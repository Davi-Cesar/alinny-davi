import React, { useEffect } from "react";

// import { Container } from './styles';

import { gsap, Linear, Sine } from "gsap";

import "./styles.css";

function Flowers() {
  useEffect(() => {
    gsap.registerPlugin();

    gsap.set("#container", { perspective: 600 });
    gsap.set("img", { xPercent: "-50%", yPercent: "-50%" });

    var total = 30;
    var warp = document.getElementById("container"),
      w = window.innerWidth,
      h = window.innerHeight;

    for (var i = 0; i < total; i++) {
      var Div = document.createElement("div");
      gsap.set(Div, {
        attr: { class: "dot" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
      });
      warp.appendChild(Div);
      animm(Div);
    }

    function animm(elm) {
      gsap.to(elm, R(12, 30), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });
      gsap.to(elm, R(8, 16), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      gsap.to(elm, R(4, 16), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    }

    function R(min, max) {
      return min + Math.random() * (max - min);
    }
  }, []);

  return <div id="container"></div>;
}

export default Flowers;
