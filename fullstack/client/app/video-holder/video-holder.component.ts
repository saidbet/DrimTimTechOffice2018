import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import { easyrtc } from "easyrtc";

@Component({
  selector: 'app-video-holder',
  templateUrl: './video-holder.component.html',
  styleUrls: ['./video-holder.component.css']
})
export class VideoHolderComponent implements OnInit, AfterViewInit {

  @Input() idx: String;
  @Input() player: String;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {


    // ID with which to access the template's video element
    const el = 'video_' + this.idx;

    // setup the player via the unique element ID
    //this.player = videojs(document.getElementById(el), {}, function () {

    // Store the video object
    const myPlayer = this, id = myPlayer.id();

    // Make up an aspect ratio
    const aspectRatio = 264 / 640;

    // internal method to handle a window resize event to adjust the video player
    function resizeVideoJS() {
      const width = document.getElementById(id).parentElement.offsetWidth;
      myPlayer.width(width).height(width * aspectRatio);
    }

    // Initialize resizeVideoJS()
    resizeVideoJS();

    // Then on resize call resizeVideoJS()
    window.onresize = resizeVideoJS;
  });
}
}
