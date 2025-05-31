import { Notification} from "./notification_structure";

export abstract class Iobserver{
    abstract update(notification : Notification) : void;
}