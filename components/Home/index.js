import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Centered from "../Layout/Section/Centered";
import Profile from './../About/profile'

export default function HomeComponent () {
  const [letterClass, setLetterClass] = useState("");

  const nameArray = [..." Amit Jhariya"];
  const jobArray = [..."Full Stack Developer"];

  useEffect(() => {
    setLetterClass("text-animate");
    return () =>
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
  }, []);
  return (
    <Centered>
      <span className={`${letterClass} _1`}>H</span>
      <span className={`${letterClass} _2`}>i,</span>
      <br />
      <span className={`${letterClass} _3`}>I</span>
      <span className={`${letterClass} _4`}>'m</span>
      <AnimatedLetters strArray={nameArray} letterClass={letterClass} idx={5} />
      <br />
      <AnimatedLetters strArray={jobArray} letterClass={letterClass} idx={15} />
      <p className="mt-6 text-lg leading-8 text-gray-100 duration-1000">
        👋 Hello, I'm Amit Jhariya, a passionate software developer with a knack for turning innovative ideas into efficient, user-friendly software solutions. With 8 years of experience in the tech industry, 🧙‍♂️ I've got a thing for transforming wild tech dreams into user-friendly realities.
      </p>
      <Profile />
    </Centered>
  );
}
