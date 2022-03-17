//  var OriginTitle = document.title;
//  var titleTime;
//  document.addEventListener('visibilitychange', function () {
//      if (document.hidden) {
//          $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
//          document.title = '页面好像失效了QAQ';
//          clearTimeout(titleTime);
//      }
//      else {
//          $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
//          document.title = '骗你的！' + OriginTitle;
//          titleTime = setTimeout(function () {
//              document.title = OriginTitle;
//          }, 2000);
//      }
//  });