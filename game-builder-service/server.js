const express = require('express');
const amqp = require('amqplib');

const app = express();
const PORT = 4000;
const RABBITMQ_URL = 'amqp://localhost';

let channel, connection;

// Connect to RabbitMQ
async function connectRabbitMQ() {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue("task_queue");
}

connectRabbitMQ();

// Endpoint to process messages
app.post('/send-task', async (req, res) => {
    const message = { task: "Process Task", details: "Some task details" };
    await channel.sendToQueue("task_queue", Buffer.from(JSON.stringify(message)));
    res.send("Task sent to queue");
});

// Listen to responses
async function consumeMessages() {
    await channel.assertQueue("response_queue");
    channel.consume("response_queue", (msg) => {
        if (msg !== null) {
            const content = JSON.parse(msg.content.toString());
            console.log("Received from React:", content);
            channel.ack(msg);
        }
    });
}

consumeMessages();

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
