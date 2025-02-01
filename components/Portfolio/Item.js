import React from "react";
import Image from "next/image";

function Item ({
  type = "left", // "left" or "right"
  title = "Project Title",
  description = "Project description goes here...",
  image,
  techStack = [] // Array of technologies
}) {
  return (
    <div className="relative mx-auto w-1/2 my-20">
      <div
        className={`relative flex w-1/2 items-center ${type === "right" ? "ml-auto" : "justify-end"
          }`}
      >
        <div className="py-1 portfolio-image hover:bg-gradient-to-r   from-[#33a057] via-[#051937]   to-[#33a057]">
          {image && (
            <Image
              aria-hidden="true"
              decoding="async"
              src={image}
              alt={title}
              width={800}
              height={300}
              className="min-h-[40vh] min-w-[60vh]"
            />
          )}
        </div>

        {/* Content Wrapper */}
        <div
          className={`portfolio-content absolute text-gray-100 text-left z-50 ${type === "right" ? "-left-full" : "right-0"
            }`}
        >
          <div className="px-10 py-4 bg-gradient-to-r from-[#051937]  via-[#33a057]  to-[#051937] my-2 rounded-lg">
            <p className="text-4xl font-extrabold">{title}</p>
            <p className="text-sm">{description}</p>
            <div className="my-4 text-sm">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-gradient-to-r from-black px-2 py-1 mx-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
