import { WebSocketServer } from 'ws';

const PORT = 8080;

// Create a WebSocket server
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log(message.toString());
    const msg=message.toString();
    if(msg=="ping")
    {
      ws.send("pong");
    }
    else {ws.send("I Can Only respond to ping msg --> Sent From the Server")}
  });

});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
