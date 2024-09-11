function delete_element(..._) {
    chrome.tabs.query({active:true,currentWindow:true},([active])=>{
        if(typeof active==="undefined"){
            console.error("Active tab is undefined")
            return -1
        }
    console.log(active.id)
    chrome.tabs.sendMessage(active.id,{type:"command",name:"delete_element"});
    })
}

chrome.commands.onCommand.addListener(
    (command,tab)=>{
        if(command==="delitem"){
            delete_element()
            return 0;
        }
    }
)