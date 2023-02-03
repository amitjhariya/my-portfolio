import React from 'react'
import Image from "next/image";
import ChatImg from "./../../assets/chat.png";

function Item({type}) {
  return (
    <>
      {type ==="right" ? <div className="relative  mx-auto w-1/2">
        <div className="relative ml-auto flex w-1/2  items-center">
          <div className="p-2 portfolio-image  bg-gradient-to-r from-[#051937] via-[#004d7a] via-[#008793]  via-[#00bf72] to-[#000]">
            <Image
              aria-hidden="true"
              data-placeholder-image
              decoding="async"
              src={ChatImg}
              alt="chat"
              width={800}
              height={300}
              className="min-h-[40vh] min-w-[60vh]"
            />
          </div>
          <div className=" portfolio-content absolute -left-full text-gray-100 text-left z-100">
            <div className="px-10 py-4  bg-gradient-to-r from-[#051937]  via-[#004d7a]  via-[#008793] via-[#00bf72] to-[#a8eb12] my-2 rounded-lg ">
              <p className="text-4xl font-extrabold"> React Chat</p>
              <p className="text-sm ">
                A Minimal real-time communication tool that allows users to
                interact with each other through text-based messaging.
              </p>
              <div className="my-4 text-sm ">
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mr-2">
                  {" "}
                  React{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  Tailwind{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  NodeJs{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  WebSocket{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  MongoDB{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> : <div className="relative  mx-auto w-1/2 my-20 ">
        <div className="relative flex  w-1/2  justify-end items-center">
          <div className="p-2 portfolio-image  bg-gradient-to-r from-[#051937] via-[#004d7a] via-[#008793]  via-[#00bf72] to-[#000]">
            <Image
              aria-hidden="true"
              data-placeholder-image
              decoding="async"
              src={ChatImg}
              alt="chat"
              width={800}
              height={300}
              className="min-h-[40vh] min-w-[60vh]"
            />
          </div>
          <div className="portfolio-content absolute  mr-[-32vh]  text-gray-100 text-left z-100 ">
            <div className="px-10 py-4  bg-gradient-to-r from-[#051937]  via-[#004d7a]  via-[#008793] via-[#00bf72] to-[#a8eb12] my-2 rounded-lg ">
              <p className="text-4xl font-extrabold"> React Chat</p>
              <p className="text-sm ">
                A Minimal real-time communication tool that allows users to
                interact with each other through text-based messaging.
              </p>
              <div className="my-4 text-sm ">
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mr-2">
                  {" "}
                  React{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  Tailwind{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  NodeJs{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  WebSocket{" "}
                </span>
                <span className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2">
                  {" "}
                  MongoDB{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>}

      
    </>
  )
}

export default Item