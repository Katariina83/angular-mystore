import { Component, OnInit} from '@angular/core';
import { NotificationService } from '../notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
// import { notificationAnimation } from './product-alerts.animations';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
  // animations: [notificationAnimation], // Add the animation
})

export class ProductAlertsComponent implements OnInit {
  notifications: any[] = [];

  constructor(
    public notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((notification) => {
      this.notifications.push(notification);
      setTimeout(() => {
        this.removeNotification(notification);
      }, 5000); // Automatically remove the notification after 5 seconds (adjust as needed)
    });
  }

  removeNotification(notification: any) {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }
}

// export const notificationAnimation = trigger('notificationAnimation', [
  // transition(':enter', [
    // style({ opacity: 0, height: 0 }),
    // animate('300ms ease-in', style({ opacity: 1, height: '*' })),
  // ]),
  // transition(':leave', [
    // animate('300ms ease-out', style({ opacity: 0, height: 0 })),
  // ]),
// ]); 