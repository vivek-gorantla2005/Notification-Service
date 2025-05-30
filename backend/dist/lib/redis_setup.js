import { createClient } from "redis";
export class RedisSetup {
    constructor() {
        this.client = null;
    }
    async initializeClient() {
        if (!this.client) {
            this.client = createClient();
            this.client.on("error", (err) => console.error("Redis Client Error", err));
            await this.client.connect();
            console.log("Connected to Redis successfully");
        }
    }
    static async getInstance() {
        if (this.instance === null) {
            this.instance = new RedisSetup();
            await this.instance.initializeClient();
        }
        return this.instance;
    }
    getClient() {
        if (!this.client) {
            throw new Error("Redis client is not initialized.");
        }
        return this.client;
    }
}
RedisSetup.instance = null;
const r1 = RedisSetup.getInstance().then(redisSetup => {
    console.log("Redis setup instance created.");
    return redisSetup.getClient();
}).catch(err => {
    console.error("Failed to create Redis setup instance:", err);
    process.exit(1);
});
const r2 = RedisSetup.getInstance().then(redisSetup => {
    console.log("Redis setup instance created.");
    return redisSetup.getClient();
}).catch(err => {
    console.error("Failed to create Redis setup instance:", err);
    process.exit(1);
});
console.log(r1 == r2);
//# sourceMappingURL=redis_setup.js.map