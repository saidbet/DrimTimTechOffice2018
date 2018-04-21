let connectedUsers = [];

function appInit(){
    easyrtc.setSocketUrl("10.100.0.20:3000");
    easyrtc.setRoomOccupantListener(callConnectedUser);

    easyrtc.setOnStreamClosed(
        (userId)=>
        {
            if(connectedUsers.includes(userId)){
                document.getElementById(userId).remove();
                connectedUsers = connectedUsers.filter(x=>x != userId);
            }
        });

    easyrtc.setStreamAcceptor(
        (caller, stream)=> 
        {
            video = document.createElement("video");
            video.setAttribute("id", caller);
            document.body.appendChild(video);
            easyrtc.setVideoObjectSrc(video, stream)
        }
    )
    easyrtc.connect('test', (x)=>console.log(x), (x)=>console.log(x));
}

function callConnectedUser(roomName, otherPeople){
    for(var user in otherPeople){
        if(connectedUsers.includes(user))
            continue;

        easyrtc.call(user);
        connectedUsers.push(user);
    }
}