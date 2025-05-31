import { Notification } from "./notification_structure";
import { Iobserver } from "./iObserver";


export abstract class INotification_observable {
    public abstract addObservers(observer : Iobserver): void;
    public abstract removeObservers(observer : Iobserver): void;
    public abstract getObservers(): Array <Iobserver>;
    public abstract notifyObservers(notification: Notification): void;
}