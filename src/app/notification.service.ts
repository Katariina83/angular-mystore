import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  notifications: Subject<any> = new Subject<any>();

  constructor() { }

  getNotifications(): Observable<any> {
    return this.notifications.asObservable();
  }

  addNotification(notification: any) {
    this.notifications.next(notification);
  }
}
