import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { DashBoardItem } from '../shared/models/dashboard-item.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {


  worker1: DashBoardItem = {
    _id: 'string',
    name: 'Big boss',
    arrivalTime: new Date(),
    distractionTime: 15,
    emptyChairTime: 25,
    state: 'happy',
  };
  worker2: DashBoardItem = {
    _id: 'string',
    name: 'Jean Claude Mimoun',
    arrivalTime: new Date(),
    distractionTime: 15,
    emptyChairTime: 25,
    state: 'happy',
  };
  worker3: DashBoardItem = {
    _id: 'string',
    name: 'Britany Padberg',
    arrivalTime: new Date(),
    distractionTime: 15,
    emptyChairTime: 25,
    state: 'happy',
  };
  worker4: DashBoardItem = {
    _id: 'string',
    name: 'Kevin McKenzie',
    arrivalTime: new Date(),
    distractionTime: 15,
    emptyChairTime: 25,
    state: 'happy',
  };

  isLoading = true;
  isEditing = false;

  connectedUsers = [];

  constructor(

    public toast: ToastComponent) { }

  ngOnInit() {
    easyrtc.setSocketUrl("10.100.0.20:3000", {});
    easyrtc.setRoomOccupantListener(this.callConnectedUser);

    easyrtc.setOnStreamClosed(
        (userId)=>
        {
            if(this.connectedUsers.includes(userId)){
                document.getElementById(userId).remove();
                this.connectedUsers = this.connectedUsers.filter(x=>x != userId);
            }
        });

    easyrtc.setStreamAcceptor(
        (caller, stream)=> 
        {
            let video = document.createElement("video");
            video.setAttribute("id", caller);
            document.body.appendChild(video);

            easyrtc.setVideoObjectSrc(video, stream)
        }
    )
    easyrtc.connect("test", (x)=>console.log(x), (x)=>console.log(x));
  }

  callConnectedUser(roomName, otherPeople){
    for(let user in otherPeople){
        if(this.connectedUsers.includes(user))
            continue;

        easyrtc.call(user, ()=>console.log("success"), ()=>console.log("fail"), ()=>console.log("."), []);
        this.connectedUsers.push(user);
    }
}

}
