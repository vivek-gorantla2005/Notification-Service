import { Iobserver } from "../interfaces/iObserver";

export class DB_Logger extends Iobserver{
    public  update(){
        console.log("hello")
    }
}

export abstract class NotificationEngine{
    public update(){
        
    }
}