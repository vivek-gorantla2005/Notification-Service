export enum NotificationChannel {
  EMAIL = "email",
  SMS = "sms",
  WEBSOCKET = "websocket",
  POPUP = "popup"
}

export interface Notification {
  id: string;
  userId: string;
  eventType: string;
  message: {
    title?: string;
    body: string;
    data?: Record<string, unknown>;
  };
  channels: NotificationChannel[];
  timestamp: number;
  metadata?: Record<string, unknown>;
}


//example
// const notif: Notification = {
//   id: "123e4567-e89b-12d3-a456-426614174000",
//   userId: "user_001",
//   eventType: "order_shipped",
//   message: {
//     title: "Order Update",
//     body: "Your order #456 has been shipped!",
//     data: { orderId: 456, trackingUrl: "https://track.me/456" }
//   },
//   channels: [NotificationChannel.WEBSOCKET, NotificationChannel.EMAIL],
//   timestamp: Date.now(),
//   metadata: { priority: "high", tenant: "tenant_abc" }
// };
