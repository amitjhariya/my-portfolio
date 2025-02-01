import Centered from '../Layout/Section/Centered'
import React, { useEffect, useState } from "react";
import AnimatedLetters from "./../AnimatedLetters";

function AboutUs () {
  const [letterClass, setLetterClass] = useState("");

  const nameArray = [..."About Me"];

  useEffect(() => {
    setLetterClass("text-animate");
    return () =>
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
  }, []);
  return (
    <Centered>
      <AnimatedLetters
        strArray={nameArray}
        letterClass={letterClass}
        idx={5}
      />
      <p className="mt-6 text-lg leading-8 text-gray-100 duration-1000">
        I'm Amit Jhariya, 🚀 My journey? It as a thrilling rollercoaster ride through programming languages like JavaScript, React, Node.js, Php, AWS, and Typescript. 🎢 I'm always up for learning the latest and greatest in tech.

        💡Problem-solving? It's my superpower. I love untangling complex challenges, crafting elegant solutions, and teaming up with fellow wizards to create software that wows.

        🌟I've had the honor of working on diverse projects - from scaling web apps to fine-tuning databases and beefing up APIs.

        🌐Clean code, version control, and automated testing? I'm their biggest fan. They're the secret sauce to building robust, scalable software, and I'm all about it.

        📈 In addition to my technical skills, I'm also passionate about sharing knowledge and fostering a collaborative development culture. I've had the opportunity to mentor junior developers, conduct tech workshops, and contribute to open-source projects.

        🌎The digital world keeps evolving, and I'm riding the wave. I'm always on the lookout for fresh challenges and opportunities to make tech do incredible things.

        📚 Beyond tech, I'm a mentor, workshop guru, and open-source enthusiast. Sharing knowledge and fostering a collaborative vibe is my jam.

        🤝 Let's connect! Whether you want to chat about the latest tech trends, cook up cool collaborations, or just geek out over tech's awesomeness, I'm all ears.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-100 duration-1000">
        I have over several years of experience in creating web
        applications, utilizing my skills in frontend development using
        <span className="mx-1 text-blue-600/100 underline decoration-red-500">
          ReactJs
        </span>
        ,
        <span className="mx-1 text-blue-600/100 underline decoration-sky-500">
          HTML5
        </span>
        ,
        <span className="mx-1 text-blue-600/100 underline decoration-pink-500">
          CSS3
        </span>{" "}
        and
        <span className="mx-1 text-blue-600/100 underline decoration-pink-500">
          JavaScript
        </span>
        , and backend development using{" "}
        <span className="mx-1 text-blue-600/100 underline decoration-yellow-500">
          NodeJs
        </span>
        ,
        <span className="mx-1 text-blue-600/100 underline decoration-orange-500">
          Express.JS
        </span>
        ,
        <span className="mx-1 text-blue-600/100 underline decoration-cyan-500">
          PHP
        </span>
        ,
        <span className="mx-1 text-blue-600/100 underline decoration-voilet-500">
          PostgresSQL
        </span>,
        <span className="mx-1 text-blue-600/100 underline decoration-voilet-500">
          MySQL
        </span>
        and
        <span className="mx-1 text-blue-600/100 underline decoration-cyan-500">
          MongoDB
        </span>
        .
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-100 duration-1000">
        I am a highly motivated software developer with a passion for
        taking on new challenges and staying update with current industry
        trends and technologies to provide the best solutions for
        clients. I am dedicated to providing innovative and efficient
        solutions
      </p>
    </Centered>
  )
}

export default AboutUs

