import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="notice">
                <p>This website uses cookies to provide user experience..!</p>
             </div>`,
  styles: ["div{margin:10px 5px; padding :5px 0px;color:black}",
  "p{text-align:center;text-decoration:underline}",
  ".notice{background-color:#de9f9f}"
],
})
export class NotificationComponent {}
