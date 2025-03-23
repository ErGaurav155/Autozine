"use client";

import React, { useEffect, useState } from "react";
import { Collapse, Button } from "@material-tailwind/react";
import {
  ArrowPathIcon,
  ChatBubbleLeftIcon,
  ChevronDoubleDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function AIChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { sender: "AI Bot", text: "Hello! How can I help you?" },
  ]);
  const [submit, setSubmit] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  const restartChat = () => {
    setMessages([{ sender: "AI Bot", text: "Hello! How can I help you?" }]);
  };

  return (
    <div className="h-auto w-auto flex flex-col ">
      <div
        className={` fixed bottom-4 right-4 z-40 text-center  ${
          open ? "hidden" : "inline-block"
        }  `}
      >
        <div
          className={` bg-[#143796] text-white rounded-full shadow-lg p-3  hover:bg-[#5372c0] transition`}
        >
          <ChatBubbleLeftIcon
            onClick={toggleOpen}
            className="text-white h-12 w-12"
          />
        </div>
        <h1
          className={`font-semibold text-base text-[#0f1788]  hover:text-[#5372c0]`}
        >
          Help
        </h1>
      </div>

      <Collapse
        open={open}
        className={`fixed bottom-4 right-5 w-[90vw] ${
          open ? "border" : "border-none"
        } sm:w-96 h-[90vh] max-h-[90vh] bg-gray-50 flex flex-col gap-4 rounded-xl shadow-xl shadow-gray-700 z-20 `}
      >
        <div className="flex p-4 items-center justify-between gap-2 w-full border-b">
          <div className="pl-3 w-full flex items-center text-nowrap justify-start gap-4">
            <div className="border w-14 h-14 p-3 rounded-full bg-gray-200">
              <SparklesIcon className="text-gray-700" />
            </div>
            <span className="font-normal flex gap-1 md:gap-2 text-xl md:text-2xl">
              {["Dev", "Ai"].map((word, index) => (
                <span
                  key={index}
                  style={{
                    display: "block ",
                    animation: `colorChangeHorizontal  2s infinite ${
                      index * 0.5
                    }s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <button
              className="w-10 h-10 p-2 rounded-full hover:bg-gray-300"
              onClick={restartChat}
            >
              <ArrowPathIcon className="text-gray-700" />
            </button>
            <button className="w-10 h-10 p-2 rounded-full hover:bg-gray-300">
              <ChevronDoubleDownIcon
                onClick={toggleOpen}
                className="text-gray-700"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col p-4 flex-1 min-h-[50vh] max-h-[50vh] z-10 overflow-y-auto no-scrollbar">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 my-1 rounded-lg ${
                  msg.sender === "You"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}
