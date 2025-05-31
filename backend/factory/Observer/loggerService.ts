import fs from 'fs'
import { Notification } from '../../interfaces/notification_structure'
export function logFiles(notification: Notification){
    const logFolder = 'D:/Vivek/Notification-Engine/backend/logs/NotificationLogs';
    if (!fs.existsSync(logFolder)) {
        console.log("folder does not exist, creating it");
        fs.mkdirSync(logFolder, { recursive: true });
    }
    const logFile = `${logFolder}/notification_${notification.userId}.log`;
    if(!fs.existsSync(logFile)) {
        console.log("file does not exist, creating it");
        fs.writeFileSync(logFile, '');
    }
    fs.appendFileSync(logFile, JSON.stringify(notification) + '\n');
}
