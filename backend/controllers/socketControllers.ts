import { Application, Request, Response } from "express";
import http, { Server } from "http";
import { Server as IOServer } from "socket.io";


// Singleton class for managing WebSockets
export class SocketManager {
  private static instance: SocketManager;
  private httpServer: Server;
  private io: IOServer;

  private constructor(app: Application) {
    this.httpServer = http.createServer(app);
    this.io = new IOServer(this.httpServer, {
      cors: { origin: "*" }
    });
    this.setupListeners();
  }

  public static initialize(app: Application): SocketManager {
    if (!SocketManager.instance) {
      SocketManager.instance = new SocketManager(app);
    }
    return SocketManager.instance;
  }

  public static getInstance(): SocketManager {
    if (!SocketManager.instance) {
      throw new Error("SocketManager not initialized. Call initialize(app) first.");
    }
    return SocketManager.instance;
  }

  public getHttpServer(): Server {
    return this.httpServer;
  }

  public getIO(): IOServer {
    return this.io;
  }


  private setupListeners(): void {
    this.io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }
}


export class SocketControllers {
  public static async setSocket(_req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: "Socket service set successfully." });
  }

  public static async getSocket(_req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: "Get socket endpoint." });
  }

  public static async disconnectSocket(_req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: "Socket disconnected." });
  }

  public static async manageSockets(_req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: "Managing sockets." });
  }
}

