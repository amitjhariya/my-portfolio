const config ={
  
  fullScreen: {
    enable: true,
    zIndex: -1, 
  },
  particles: {
    number: {
      value: 50,
      limit: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type:["character",'polygon','circle'],
      stroke: {
        width: 0,
        color: "#000"
      },
      polygon: {
        sides: 4,
        inset: 5,
      },
      character:{
        value:["Node","React","NextJs","MongoDB","AWS","git","SQL","Docker","LLM"],
        inset: 5,
      },
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: true
      }
    },
    size: {
      value: 10,
      limit:20,
      random: false,
      anim: {
        enable: true,
        speed: 5,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 50,
        duration: 2,
        opacity: 1,
        speed: 2
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: {
        value: {
          r: 0,
          g: 0,
          b: 0
        }
      }
    }
  },
  retina_detect: true,
  fps_limit: 60,
  background: {
    image: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
  }
}
export default config