import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notice" [hidden]="displayNotification">
      <button class="right" (click)="notify()">close</button>
      <div class="left">This website is developed for Desktop view, will be working on Mobile view </div>
    </div>
  `,
  styles: [`
    .notice {
      /* margin: 5px 5px; */
      padding: 2px 0px;
      color: white;
      font-weight: bold;
      background-color: #de9f7f;
      top:73px;
      width: 100%;
      position: absolute;
    }

    .left {
      width: 100%;
      margin:5px;
    }
    
    .right {
      float:right;
      margin:5px;
      cursor: pointer;
      color: black;
    }
  `],
})
export class NotificationComponent {
  displayNotification: boolean = false;

  notify() {
    this.displayNotification = true;
  }
}
