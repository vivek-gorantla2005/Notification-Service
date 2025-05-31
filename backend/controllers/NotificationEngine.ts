import {Iobserver} from '../interfaces/iObserver';
import {Notification} from '../interfaces/notification_structure';

import {emailStratergy} from '../stratergies/Notification-Stratergies/emailStratergy';

export class NotificationEngine extends Iobserver {
    private strategy :  emailStratergy
    public constructor(strategy :  emailStratergy) {
        super();
        this.strategy = strategy;
    }
    public update(notification: Notification): void {
        console.log("Notification Engine received notification:", notification);
        this.strategy.sendNotification(notification);
    }
}