import { WebSocketServer,WebSocket } from "ws";
import { v4 as uuidv4 } from 'uuid';
const wss=new WebSocketServer({port:8080});

interface Users{
    socket:WebSocket;
    room:string;
}

let allSockets:Users[]=[];

wss.on("connection",function(socket){
    console.log("User Connected");
    const userId = uuidv4();
    socket.send(JSON.stringify({ type: "userId", userId: userId }));
    socket.on("message",(message)=>{
        console.log(message.toString());
        // the message recived can be either of two types ie to join a room or to send an msg
        // the msg recived will be in String to better process it we need to convert it to the JSON
        const parsedMessage=JSON.parse(message.toString());
        console.log(parsedMessage);
        // now the msg is in json based upon the type parametter in msg we can either join a room or chat

        if(parsedMessage.type=="join")
        {   
            // when someone whats to join an room he / she will send us an room id
            // we should store the socket and the roomId in the array
            console.log("User Joined the Room "+parsedMessage.payload.roomId);
            allSockets.push({
                socket,
                room:parsedMessage.payload.roomId
            })
        }
        if(parsedMessage.type=="chat")
        {
            // when the user wants to chat that means he is already connected to one of the room
            // ie is entry exists in the allSockets Array of objects 
            // to chat the req will come from an specific Socket we have to Identify the roomId Corrosponding to the 
            // Socket and then send the message to all the sockets in the room

            // we need to find the Roomid Corrosponding to the current Socket 

            let currentRoomUser=null;

            for(let i=0;i<allSockets.length;i++)
            {
                if(allSockets[i].socket==socket)
                {
                    currentRoomUser=allSockets[i].room;
                    break;
                }
            }

            // now we have the roomid we have to send the message recived on the current socket to all the sockets on the 
            // same Roomid

            for(let i=0;i<allSockets.length;i++)
            {
                if(allSockets[i].room==currentRoomUser)
                {
                    allSockets[i].socket.send(JSON.stringify({
                        "type": "chat",
                        "payload": {
                            senderId: parsedMessage.payload.senderId,
                            content: parsedMessage.payload.message,
                        }
                    }));
                }
            }
        }
    })
})