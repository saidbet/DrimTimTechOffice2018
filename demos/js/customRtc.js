easyrtc.setStreamAcceptor(function(caller, stream) {
    var i;
    if (easyrtc.debugPrinter) {
        easyrtc.debugPrinter("stream acceptor called");
    }

    showVideo(stream);
    return;
});



//assigns stream to video (dom) element
function showVideo(stream) {
    easyrtc.setVideoObjectSrc(video, stream);
}



easyrtc.setRoomOccupantListener(this.callEverybodyElse);

function callEverybodyElse(roomName, otherPeople) {

    easyrtc.setRoomOccupantListener(null); // so we're only called once.

    var list = [];
    var connectCount = 0;
    for(var easyrtcid in otherPeople ) {
        list.push(easyrtcid);
    }
    //
    // Connect in reverse order. Latter arriving people are more likely to have
    // empty slots.
    //
    function establishConnection(position) {
        function callSuccess() {
            connectCount++;
            if(position > 0) {
                establishConnection(position-1);
            }
        }
        function callFailure(errorCode, errorText) {
            easyrtc.showError(errorCode, errorText);
            if( position > 0) {
                establishConnection(position-1);
            }
        }
        easyrtc.call(list[position], callSuccess, callFailure, ()=> console.log("wasAccepted"), []);

    }
    if( list.length > 0) {
        establishConnection(list.length-1);
    }


//Callback when message is received
easyrtc.setPeerListener(messageListener);