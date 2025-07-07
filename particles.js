tsParticles.load("particles", {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#FFD700" // złoto
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      random: true
    },
    size: {
      value: 2.5,
      random: true
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out"
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: false
      },
      onClick: {
        enable: false
      }
    }
  },
  detectRetina: true
});

