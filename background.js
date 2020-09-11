chrome.browserAction.onClicked.addListener(function(tab) { 
        const onIconClickedCallback = function(data){
            console.log('onIconClickedCallback', data);
            if (!data) return;
            const title = tab.title;
            chrome.downloads.download({
                url: data,
                filename: title + '.mp4'
            });
        }
        // chrome.tabs.executeScript(null, {file: "content.js"});
        // const port = chrome.tabs.connect(tab.id);
        // port.postMessage({ action: 'onIconClicked' });
        // port.onMessage.addListener(onIconClickedCallback);
        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //     chrome.tabs.sendMessage(tabs[0].id, { action: 'onIconClicked' }, onIconClickedCallback);    
        // });
        chrome.tabs.sendMessage(tab.id, { action: 'onIconClicked' }, onIconClickedCallback);    
    }
);