import { INotification_observable } from "../interfaces/iObservable";
import { Iobserver } from "../interfaces/iObserver";
import { Notification } from "../interfaces/notification_structure";

export class Notification_Observable extends INotification_observable {
    private observerList: Array<Iobserver> = [

    ];

    public async addObservers(observer: Iobserver){
        if (!this.observerList.includes(observer)) {
            this.observerList.push(observer);
        }
    }

    public removeObservers(observer: Iobserver): void {
        this.observerList = this.observerList.filter(obs => obs !== observer);
    }

    public getObservers(): Array<Iobserver> {
        return [...this.observerList];
    }

    public notifyObservers(notification: Notification): void {
        for (const observer of this.observerList) {
            observer.update(notification);
        }
    }
}