// // chrome.webRequest.onBeforeRequest.addListener(
// //     function(details) {
// //       return {redirectUrl: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"};
// //     },
// //     {urls: ["*://www.instagram.com/*","https://twitter.com/*"]},
// //     ["blocking"]
// //   );    
// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     return {redirectUrl: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"};
//   },
//   {urls: ["https://www.instagram.com","https://twitter.com"]},
//   ["blocking"]
// );
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"};
  },
  {urls: ["*://www.instagram.com/*", "*://twitter.com/*",]},
  ["blocking"]
);
