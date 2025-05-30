import express from 'express';
import { connectKafka } from '../lib/connectKafka';
import cors from 'cors';
import { Router } from 'express';
import { SocketManager } from '../controllers/socketControllers';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const socketManager = SocketManager.initialize(app);
await connectKafka().catch(err => {
    console.error("Failed to connect to Kafka:", err);
    process.exit(1);
});
const router = Router();
app.use('/api', router);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
socketManager.getHttpServer().listen(port, () => {
    console.log(`WebSocket server is listening on port ${port}!!`);
});
//# sourceMappingURL=app.js.map