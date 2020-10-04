document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".site-logo").src = chrome.runtime.getURL("icon/exia_icon_48.png");
    document.querySelector(".iconlarge").src = chrome.runtime.getURL("icon/conversation.png");
})
 