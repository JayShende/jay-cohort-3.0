import { useEffect, useRef, useState } from "react";
import { SendIcon } from "../icons/send-icon";

export const ChatPage = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [socket, setSocket] = useState<WebSocket>();
  const [userId, setUserId] = useState<string>();
  const roomCode = localStorage.getItem("code");
  const [messages, setMessages] = useState<
    { senderId: string; content: string }[]
  >([]);
  //   console.log(messages);
  function fun() {
    if (!socket) {
      return;
    }
    const message = inputRef.current?.value || "";
    // console.log(message);

    const sd = JSON.stringify({
      type: "chat",
      payload: {
        message: message,
        senderId: userId,
      },
    });
    // console.log(sd);
    if (message != "") {
      socket.send(sd);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.placeholder = "Enter Your Message";
    }
    inputRef.current?.focus();
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      console.log(data);
      if (data.type === "userId") {
        setUserId(data.userId);
        console.log("Set The userId as " + data.userId);
      } else if (data.type === "chat") {
        setMessages((prev) => [
          ...prev,
          { senderId: data.payload.senderId, content: data.payload.content },
        ]);
      }
    };

    // the UseEffect will Run when the Component Mount for the First Time
    // so we have to send the roomid along when we connect
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: roomCode,
          },
        })
      );
    };
    return () => {
      ws.close();
    };
  }, []);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="sm:w-[680px] sm:h-[450px] h-[620px] w-screen bg-[#ddd4b4] sm:rounded-xl rounded-none sm:mt-12 mt-0 flex flex-col justify-between">
       <div className="w-full h-12 flex  bg-[#008172] rounded-t-lg z-10 p-3">
       <span className=" text-2xl font-bold font-[poppins] text-[#1b2c29]">100x Chat</span>
       </div>
      <div className=" overflow-y-auto no-scrollbar h-full w-full ">
        {messages.map((message) =>
          message.senderId === userId ? (
            <div className="bg-[#008172] text-white rounded-2xl rounded-tr-none p-4 break-words sm:max-w-[280px]  sm:ml-96 m-64 my-5 sm:mr-0 mr-3">
              {message.content}
            </div>
          ) : (
            <div className="bg-[#778a7d] text-white rounded-2xl rounded-tl-none p-4 break-words max-w-[280px] ml-6 my-5">
              {message.content}
            </div>
          )
        )}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="w-full h-12 flex justify-end">
       <textarea name="" id=""  ref={inputRef}
          className="bg-[#008172] rounded-bl-lg  text-white p-3 font-[poppins] w-full max-h-full"
          placeholder="Enter Your Message"></textarea>
        <SendIcon onclick={fun} />
      </div>
    </div>
  );
};
