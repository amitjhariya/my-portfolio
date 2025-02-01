import React from "react";
import Item from "./Item";
import ChatImg from "./../../assets/chat.png";


export default function Portfolio () {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-100 dark:text-white">
          Some Things I’ve Built
        </h2>
        <p className="font-light text-gray-200 sm:text-xl dark:text-gray-400">
          The projects and applications giving you a glimpse into my
          capabilities and showcase of my expertise, where you can marvel at the
          work I have done in the past and get a sense of the magic I am capable
          of.
        </p>

      </div>
      <Item
        type="right"
        title="React Chat"
        description="A minimal real-time communication tool for text-based messaging."
        image={ChatImg}
        techStack={["React", "Tailwind", "NodeJs", "WebSocket", "MongoDB"]}
      />
      <Item
        type="left"
        title="React Chat"
        description="A minimal real-time communication tool for text-based messaging."
        image={ChatImg}
        techStack={["React", "Tailwind", "NodeJs", "WebSocket", "MongoDB"]}
      />
    </div>
  );
}
