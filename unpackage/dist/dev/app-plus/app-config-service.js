
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/msg/msg","pages/my/my","pages/search/search","pages/add-input/add-input"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"社区交友","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#333333","selectedColor":"#FC5C82","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"pages/msg/msg","text":"消息","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"社交项目_by邓宇辰","compilerVersion":"2.7.13","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","disabled":true,"placeholder":"搜索帖子","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"14px","text":"搜索"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
