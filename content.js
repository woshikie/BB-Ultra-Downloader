//alert('Injected!');

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log('at content');
    const elem = document.getElementById('playback-video-playback-video_html5_api');
    if (msg.action && msg.action === "onIconClicked"){
        if (elem) sendResponse(elem.src);
        sendResponse(elem);
    }    
});

console.log(chrome.runtime.onMessage);