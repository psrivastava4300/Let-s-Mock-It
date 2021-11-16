import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
  
    public dateNow = new Date();
    milliSecondsInASecond = 1000;
    hoursInADay = 1;
    minutesInAnHour = 0;
    SecondsInAMinute  = 0;

    public timeDifference;
    public secondsToDday;
    public minutesToDday;
    public hoursToDday;


    private getTimeDifference () {
        this.timeDifference = new Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }

    private allocateTimeUnits (timeDifference) {
          this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
          this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
          this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    }

    ngOnInit() {
       this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
