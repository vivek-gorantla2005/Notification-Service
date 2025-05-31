import { Notification } from "../interfaces/notification_structure";
import {Request, Response} from "express";
import kafkaSetup from "../lib/kafka_setup";
import {logFiles} from "../factory/Observer/loggerService";
import {NotificationEngine} from "../controllers/NotificationEngine";
import {emailStratergy} from "../stratergies/Notification-Stratergies/emailStratergy";
export default class kafkaProducerService {
    public static async sendNotification(req:Request,res:Response) : Promise<void>{
        const data : Notification = req.body;
        const producer = kafkaSetup.producer();
        await producer.connect();        
        console.log("Connected to Kafka producer");
        try{
            await producer.send({
                topic:'notifications',
                messages:[
                    {
                        key : data.id.toString(),
                        value:JSON.stringify(data)
                    }
                ]
            })

            logFiles(data);
            const notificationEngine = new NotificationEngine(new emailStratergy());
            notificationEngine.update(data);

            console.log("message send to kafka producer",JSON.stringify(data));
            res.json("Message sent to Kafka producer").status(200);
            await producer.disconnect();
            console.log("Disconnected from Kafka producer");
        }catch(err){
            res.json("Error connecting to Kafka producer: " + err).status(500);
            return;
        }
    }
}