function appInit(){
    easyrtc.setSocketUrl("10.100.0.20:3000");
    var stream = easyrtc.getLocalStream(null);
    if (stream) {
      easyrtc.connect("test", (x)=>console.log(x), (x)=>console.log(x));
    }
    else {
      easyrtc.initMediaSource(
        ()=>easyrtc.connect("test", (x)=>console.log(x), (x)=>console.log(x)),
        ()=>console.log("fail"));
    }
}