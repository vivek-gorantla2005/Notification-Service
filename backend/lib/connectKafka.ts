import kafkaSetup from "./kafka_setup";

export async function connectKafka() {
    try{
        const admin = kafkaSetup.admin();
        console.log("Connecting to Kafka...");
        await admin.connect();
        console.log("Connected to Kafka successfully");
    }catch(err){
        console.error("An error occurred while connecting to Kafka:", err);
    }
};

