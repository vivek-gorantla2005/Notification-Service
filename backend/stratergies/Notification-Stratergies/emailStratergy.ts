import { Notification } from "../../interfaces/notification_structure";
import { NotificationStrategy } from "../../interfaces/NotificationStratergy";
export class emailStratergy extends NotificationStrategy {
    public sendNotification(notification: Notification): void {
        console.log("Sending Email Notification",notification);
    }
}