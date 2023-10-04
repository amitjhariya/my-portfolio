'use client'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
// import config from './config.js'
import config2 from './config2.js'


const ParticlesComponent = (props) => {
  const options = useMemo(() => {

    return config2;
    
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;