chrome.browserAction.onClicked.addListener(function (tab) {
   console.log("Received message from background script");

   if (tab && tab.status == "complete") {
      chrome.tabs.executeScript(tab.id, {
         file: "content.js"
      });

   }
});
