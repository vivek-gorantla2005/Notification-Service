import {Notification} from '../interfaces/notification_structure';
export abstract class NotificationStrategy {
    public  abstract sendNotification(notification: Notification): void;
}