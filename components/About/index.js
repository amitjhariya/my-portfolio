import Centered from '../Layout/Section/Centered'
import React,{ useEffect, useState } from "react";
import AnimatedLetters from "./../AnimatedLetters";

function AboutUs() {
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
                I'm Amit Jhariya, a software developer with a knack for crafting
                cutting-edge solutions and a drive to push boundaries. Expert in
                Full Stack Development with a passion for conjuring up
                revolutionary solutions and an unyielding drive
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
                  MySQL
                </span>{" "}
                and{" "}
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

