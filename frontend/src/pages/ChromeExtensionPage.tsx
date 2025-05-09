import React from 'react';
import { Download, Chrome, Zap, Star, Bookmark, FileText, CheckCircle } from 'lucide-react';

/**
 * Chrome扩展页面组件
 * 展示Chrome扩展的功能和下载链接
 */
const ChromeExtensionPage: React.FC = () => {
  // 扩展功能列表
//   const features = [
//     {
//       icon: <Zap className="w-6 h-6 text-indigo-600" />,
//       title: '自动填表',
//       description: '一键自动填写求职申请表，节省时间，避免重复输入。'
//     },
//     {
//       icon: <Star className="w-6 h-6 text-indigo-600" />,
//       title: '职位收藏',
//       description: '在任何求职网站上快速收藏职位，自动同步到您的求职追踪器。'
//     },
//     {
//       icon: <Bookmark className="w-6 h-6 text-indigo-600" />,
//       title: '职位洞察',
//       description: '获取职位的详细分析，包括公司信息、薪资范围和技能要求。'
//     },
//     {
//       icon: <FileText className="w-6 h-6 text-indigo-600" />,
//       title: '简历优化',
//       description: '根据职位要求自动优化您的简历，提高匹配度。'
//     }
//   ];

  return (
    <div className="container-lg">
      <div className="section">
        <h1 className="title-lg">JobTrip Chrome扩展</h1>
        <p className="text-description">
          安装我们的Chrome扩展，让您的求职过程更加高效和智能。
        </p>
      </div>

      {/* 下载区域 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Chrome className="w-12 h-12 text-indigo-600 mr-4" />
            <div>
              <h2 className="title-sm">JobTrip Chrome扩展</h2>
              <p className="text-description">版本 1.0.0</p>
            </div>
          </div>
            <a href="https://codeload.github.com/MagicDogGuo/JobTip_Extention/zip/refs/heads/main" download>
                <button className="btn btn-primary">
                    <Download className="w-4 h-4 mr-2" />
                    下载Chrome扩展
                </button>
            </a>
        </div>
      </div>

      {/* 功能列表 */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="title-sm mb-2">{feature.title}</h3>
                <p className="text-description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* 安装步骤 */}
      <div className="section">
        <h2 className="title-md mb-6">安装步骤</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">1</span>
            </div>
            <div>
              <h3 className="title-sm mb-1">下载扩展</h3>
              <p className="text-description">点击上方的"下载Chrome扩展"按钮，获取扩展文件。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">2</span>
            </div>
            <div>
              <h3 className="title-sm mb-1">打开Chrome扩展页面</h3>
              <p className="text-description mb-2">在Chrome浏览器中访问：</p>
              <code className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-md font-mono text-sm">
                chrome://extensions/
              </code>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">3</span>
            </div>
            <div>
              <h3 className="title-sm mb-1">启用开发者模式</h3>
              <p className="text-description mb-2">在扩展页面右上角找到开发者模式开关：</p>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative mr-3">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-sm">Developer mode</span>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">4</span>
            </div>
            <div>
              <h3 className="title-sm mb-1">安装扩展</h3>
              <p className="text-description">将下载的扩展文件拖放到扩展页面，完成安装。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">5</span>
            </div>
            <div>
              <h3 className="title-sm mb-1">釘選延伸功能</h3>
              <p className="text-description">點擊 Chrome 工具列上的拼圖圖示，釘住 JobTrip 擴充套件以方便存取。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">6</span>
            </div>
            <div>
              <h3 className="title-sm mb-1">開始使用</h3>
              <p className="text-description mb-2">按一下 JobTrip 延伸功能圖示，輸入您的工作搜尋準則（標題、地點和平台），然後按一下「開始搜尋」。擴充套件會自動搜刮工作並將其匯入 JobTrip。</p>
              <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  在搜尋前請確保有使用您的帳號登入 LinkedIn、Seek、Indeed 才能夠進行職位搜尋。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 注意事項 */}
      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-900 rounded-lg p-6 mb-8">
        <h3 className="title-sm mb-2 text-blue-800 dark:text-blue-200">注意事項</h3>
        <p className="text-blue-700 dark:text-blue-300">
          擴展套件需要存取招聘網站的權限才能正常運作。您可在安裝時查看權限。
        </p>
      </div>

      {/* 常见问题 */}
      <div className="section">
        <h2 className="title-md mb-6">常见问题</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="title-sm mb-2">扩展支持哪些浏览器？</h3>
            <p className="text-description">目前仅支持Chrome浏览器，未来将支持更多浏览器。</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="title-sm mb-2">扩展需要付费吗？</h3>
            <p className="text-description">扩展完全免费，您可以免费使用所有功能。</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="title-sm mb-2">如何更新扩展？</h3>
            <p className="text-description">扩展会自动更新，您也可以手动在Chrome扩展页面检查更新。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeExtensionPage; 