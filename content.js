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

document.addEventListener("click", function (event) {
    if(event.target.parentNode.parentElement.classList.contains('activityinstance'))
        event.stopPropagation();
}, true);

document.addEventListener("DOMContentLoaded", function() {
    const modules = document.querySelectorAll('li[id^="module-"]');
    for(const module of modules){
        const links = module.querySelectorAll('a');
        for(const link of links){
            link.href += "&redirect=1";
        }
    }
});
