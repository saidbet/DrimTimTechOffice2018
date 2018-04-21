import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-holder',
  templateUrl: './video-holder.component.html',
  styleUrls: ['./video-holder.component.css']
})
export class VideoHolderComponent implements OnInit {

  @ViewChild('videoHolder') videoHolder: HTMLVideoElement;
  @Input() stream: MediaStream;

  constructor() { }

  ngOnInit() {
    easyrtc.setVideoObjectSrc(this.videoHolder, this.stream);
  }
}
