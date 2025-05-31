import { Notification } from "./notification_structure";

export abstract class INotificationDecorator {
    protected notification: Notification;
    constructor(notification: Notification) {
        this.notification = notification;
    }
    abstract send(): Notification;   
}