import http from "http";
import { Server as IOServer } from "socket.io";
// Singleton class for managing WebSockets
export class SocketManager {
    constructor(app) {
        this.httpServer = http.createServer(app);
        this.io = new IOServer(this.httpServer, {
            cors: { origin: "*" }
        });
        this.setupListeners();
    }
    static initialize(app) {
        if (!SocketManager.instance) {
            SocketManager.instance = new SocketManager(app);
        }
        return SocketManager.instance;
    }
    static getInstance() {
        if (!SocketManager.instance) {
            throw new Error("SocketManager not initialized. Call initialize(app) first.");
        }
        return SocketManager.instance;
    }
    getHttpServer() {
        return this.httpServer;
    }
    getIO() {
        return this.io;
    }
    setupListeners() {
        this.io.on("connection", (socket) => {
            console.log("User connected:", socket.id);
            socket.on("disconnect", () => {
                console.log("User disconnected:", socket.id);
            });
        });
    }
}
export class SocketControllers {
    static async setSocket(_req, res) {
        res.status(200).json({ message: "Socket service set successfully." });
    }
    static async getSocket(_req, res) {
        res.status(200).json({ message: "Get socket endpoint." });
    }
    static async disconnectSocket(_req, res) {
        res.status(200).json({ message: "Socket disconnected." });
    }
    static async manageSockets(_req, res) {
        res.status(200).json({ message: "Managing sockets." });
    }
}
//# sourceMappingURL=socketControllers.js.map