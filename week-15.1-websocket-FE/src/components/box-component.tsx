import { useEffect, useRef, useState } from "react";
import { SendIcon } from "../icons/send-icon";
import { Input } from "./ui/input";

export const BoxCompo = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [socket, setSocket] = useState<WebSocket>();
  const [userId, setUserId] = useState<string>();

  const [messages, setMessages] = useState<
    { senderId: string; content: string }[]
  >([]);
  console.log(messages);

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
            roomId: "123",
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
    <div className="w-[680px] h-[450px] bg-slate-900 rounded-xl mt-12 flex flex-col justify-between">
      <div className=" overflow-y-auto">
        {messages.map((message) =>
          message.senderId === userId ? (
            <div className="bg-white text-black rounded-2xl rounded-tr-none p-4 break-words max-w-[280px] ml-96 my-5">
              {message.content}
            </div>
          ) : (
            <div className="bg-red-300 text-black rounded-2xl rounded-tl-none p-4 break-words max-w-[280px] my-5">
              {message.content}
            </div>
          )
        )}
         <div ref={messagesEndRef}></div>
      </div>
      <div className="w-full h-12 flex justify-end">
        <Input
          type="text"
          placeholder="Enter Your Message"
          className="w-full h-full border-slate-800 bg-slate-800 text-slate-400 text-wrap"
          ref={inputRef}
        />
        <SendIcon onclick={fun} />
      </div>
    </div>
  );
};
