easyrtc.setStreamAcceptor(function(caller, stream) {
    var i;
    if (easyrtc.debugPrinter) {
        easyrtc.debugPrinter("stream acceptor called");
    }

    showVideo(stream);
    return;
});

function postGetUserMedia() {
    function connectError(errorCode, errorText) {
        if (gotConnectionCallback) {
            gotConnectionCallback(false, errorText);
        }
        else if (onFailure) {
            onFailure(easyrtc.errCodes.CONNECT_ERR, errorText);
        }
        else {
            easyrtc.showError(easyrtc.errCodes.CONNECT_ERR, errorText);
        }
    }

    easyrtc.connect(applicationName, connectSuccess, connectError);
}

//assigns stream to video (dom) element
function showVideo(stream) {
    easyrtc.setVideoObjectSrc(video, stream);
}

var stream = easyrtc.getLocalStream(null);
if (stream) {
    postGetUserMedia();
}
else {
    easyrtc.initMediaSource(
            postGetUserMedia,
            function(errorCode, errorText) {
                if (gotMediaCallback) {
                    gotMediaCallback(false, errorText);
                }
                else if (onFailure) {
                    onFailure(easyrtc.errCodes.MEDIA_ERR, errorText);
                }
                else {
                    easyrtc.showError(easyrtc.errCodes.MEDIA_ERR, errorText);
                }
            },
            null // default stream
        );
}

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
            if( connectCount < maxCALLERS && position > 0) {
                establishConnection(position-1);
            }
        }
        function callFailure(errorCode, errorText) {
            easyrtc.showError(errorCode, errorText);
            if( connectCount < maxCALLERS && position > 0) {
                establishConnection(position-1);
            }
        }
        easyrtc.call(list[position], callSuccess, callFailure);

    }
    if( list.length > 0) {
        establishConnection(list.length-1);
    }
}

easyrtc.setRoomOccupantListener(callEverybodyElse);


//Callback when message is received
easyrtc.setPeerListener(messageListener);