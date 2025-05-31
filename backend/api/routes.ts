import Router from 'express';
import kafkaProducerService from '../services/kafka-producer-service';

const router = Router();

router.post('/send-notification', kafkaProducerService.sendNotification);

export default router;  