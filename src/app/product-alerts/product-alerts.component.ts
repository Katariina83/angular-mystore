import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    // Subscribe to notifications from the NotificationService
    this.notificationService.getNotifications().subscribe((notification) => {
      // Add the received notification to the array
      this.notifications.push(notification);
      
      // Optionally, you can remove notifications after a certain time
      setTimeout(() => {
        this.removeNotification(notification);
      }, 2000); // Automatically remove the notification after 5 seconds (adjust as needed)
    });
  }

  removeNotification(notification: any) {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }
}
