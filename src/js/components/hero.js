import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { blockOne, blockTwo, blockThree } from "../_vars";

gsap.registerPlugin(ScrollTrigger);



gsap.to(blockOne, {
  scrollTrigger: {
    trigger: blockOne,
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  duration: 2,
  height: 600
})

gsap.to(blockTwo, {
  scrollTrigger: {
    trigger: blockTwo,
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  duration: 2,
  height: 300
})

gsap.to(blockThree, {
  scrollTrigger: {
    trigger: blockThree,
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  duration: 2,
  height: 100
})

