import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-recorder',
  templateUrl: './stream-recorder.component.html',
  styleUrls: ['./stream-recorder.component.css']
})
export class StreamRecorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    easyrtc.setSocketUrl("10.100.0.20:3000", {});
    var stream = easyrtc.getLocalStream(null);
    if (stream) {
      easyrtc.connect("test", (x)=>console.log(x), (x)=>console.log(x));
    }
    else {
      easyrtc.initMediaSource(
        ()=>easyrtc.connect("test", (x)=>console.log(x), (x)=>console.log(x)),
        ()=>console.log("fail"), 
        '');
    }
    }
}
