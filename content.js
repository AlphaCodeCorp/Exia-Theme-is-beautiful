const observer = new MutationObserver(function(mutations) {
    for(let mutation of mutations){
       for(let element of mutation.addedNodes)
          if(element.id === "logo")
             element.src = chrome.runtime.getURL("icon/logo-cesi-exia.png");
    }
});

observer.observe(document, {
    subtree: true,
    childList: true
});
