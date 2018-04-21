import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DashBoardItem } from '../../shared/models/dashboard-item.model';
import { IotService } from '../../services/iot.service.';
import { ToastComponent } from '../../shared/toast/toast.component';


@Component({
  selector: 'app-worker-item',
  templateUrl: './worker-item.component.html',
})
export class WorkerItemComponent implements OnInit {


  @Input() worker: DashBoardItem;
  constructor(private _iot: IotService, public toast: ToastComponent) { }
  ngOnInit() { }
  punish() {
    console.log(this.worker._id);
    this._iot.blameWorker().subscribe(
      res => {
        this.toast.setMessage('blame send successfully.', 'success');
      },
      error => console.log(error)
    );
  }
  reward() {
    console.log(this.worker._id);
    // this._iot.rewardWorker();
  }

}
