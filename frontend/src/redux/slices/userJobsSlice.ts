import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationStatus, CreateUserJobData, PaginatedResponse, UserJob } from '@/types';
import userJobService from '@/services/userJobService';

// 异步Thunk actions
export const fetchUserJobs = createAsyncThunk(
  'userJobs/fetchUserJobs',
  async (params: { 
    page?: number; 
    limit?: number;
    status?: ApplicationStatus;
    search?: string;
    sort?: string;
  } = {}, { rejectWithValue }) => {
    try {
      const response = await userJobService.getUserJobs(params);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchUserJob = createAsyncThunk(
  'userJobs/fetchUserJob',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await userJobService.getUserJob(id);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const createUserJob = createAsyncThunk(
  'userJobs/createUserJob',
  async (userJobData: CreateUserJobData, { rejectWithValue }) => {
    try {
      const response = await userJobService.createUserJob(userJobData);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const updateUserJob = createAsyncThunk(
  'userJobs/updateUserJob',
  async ({ id, data }: { id: string, data: Partial<CreateUserJobData> }, { rejectWithValue }) => {
    try {
      const response = await userJobService.updateUserJob(id, data);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteUserJob = createAsyncThunk(
  'userJobs/deleteUserJob',
  async (id: string, { rejectWithValue }) => {
    try {
      await userJobService.deleteUserJob(id);
      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchStatusStats = createAsyncThunk(
  'userJobs/fetchStatusStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userJobService.getStatusStats();
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// 状态接口
interface UserJobsState {
  userJobs: UserJob[];
  userJob: UserJob | null;
  stats: Record<ApplicationStatus, number> | null;
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  } | null;
  isLoading: boolean;
  error: string | null;
}

// 初始状态
const initialState: UserJobsState = {
  userJobs: [],
  userJob: null,
  stats: null,
  pagination: null,
  isLoading: false,
  error: null,
};

// 创建slice
const userJobsSlice = createSlice({
  name: 'userJobs',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearUserJob: (state) => {
      state.userJob = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 获取用户职位列表
      .addCase(fetchUserJobs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userJobs = action.payload.data;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(fetchUserJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      
      // 获取单个用户职位
      .addCase(fetchUserJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userJob = action.payload;
        state.error = null;
      })
      .addCase(fetchUserJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      
      // 创建用户职位关联
      .addCase(createUserJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUserJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userJobs.push(action.payload);
        state.error = null;
      })
      .addCase(createUserJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      
      // 更新用户职位关联
      .addCase(updateUserJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userJobs = state.userJobs.map(userJob => 
          userJob._id === action.payload._id ? action.payload : userJob
        );
        if (state.userJob && state.userJob._id === action.payload._id) {
          state.userJob = action.payload;
        }
        state.error = null;
      })
      .addCase(updateUserJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      
      // 删除用户职位关联
      .addCase(deleteUserJob.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUserJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userJobs = state.userJobs.filter(userJob => userJob._id !== action.payload);
        if (state.userJob && state.userJob._id === action.payload) {
          state.userJob = null;
        }
        state.error = null;
      })
      .addCase(deleteUserJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      
      // 获取状态统计
      .addCase(fetchStatusStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchStatusStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
        state.error = null;
      })
      .addCase(fetchStatusStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearUserJob } = userJobsSlice.actions;
export default userJobsSlice.reducer; 