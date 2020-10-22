//alert('Injected!');

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log('at content');
    if (msg.action && msg.action === "onIconClicked"){
        const id_list = ['playback-video-playback-video_html5_api', 'Video1_html5_api'];
        let elem;
        for (const id of id_list){
            elem = document.getElementById(id);
            if (!!elem) break;
        }
        if (elem) sendResponse(elem.src);
        sendResponse(elem);
    }    
});

console.log(chrome.runtime.onMessage);