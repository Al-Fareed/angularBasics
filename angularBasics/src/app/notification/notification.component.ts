import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="notice" [hidden]="displayNotification" >
                <div class="left">This website uses cookies to provide user experience..!</div>
                <button class="right" (click)="notify()">close</button>
             </div>`,
  styles: ["div{margin:5px 5px; padding :2px 0px;color:red;font-weight:bold;background-color:#de9f7f;display:flex}",
  "p{text-align:center;}",
  ".left{float:left; width:100%}",
  ".right{float:right;cursor:pointer;color:black}",
],
})
export class NotificationComponent {
  displayNotification:boolean = false;
  constructor(){}
  notify() {
      this.displayNotification = true;
  }
}
