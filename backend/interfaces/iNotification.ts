import { Notification } from "./notification_structure";
export abstract class INotification{
    abstract send(notification: Notification): Promise<void>;
};