import React, { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

const Chat = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello,  I am chatgpt",
      sender: "chatgpt",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setTyping(true);

    await processMessageFromChatGPT(newMessages);
  };

  async function processMessageFromChatGPT(chatmessages) {
    let apiMessages = chatmessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "chatgpt") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content:
        "Explain all concepts of finance and mutual funds to Homemakers who don't have a lot of knowledge of finance",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatmessages,
          {
            message: data.choices[0].message.content,
            sender: "chatgpt",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div style={{ position: "relative", height: "500px", width: "800px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                typing ? <TypingIndicator content="We're thinking...." /> : null
              }
            >
              {messages.map((message, i) => {
                return <Message model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
      ;
    </div>
  );
};

export default Chat;
