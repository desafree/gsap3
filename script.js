const tl =gsap.timeline({paused:true})
  .to('.front .buttom-container',{rotate:90, ease:"power1.inOut", duration:.2})
  .to(".front .buttom-container svg",{opacity:0,ease:"power1.inOut"})
  .to('.front .buttom-container',{bottom:-25, ease: "circ.out",duration:.3})
  .to('.front img',{height:350,duration:.3,ease:"power1.inOut"},'<')
  .to('.front .buttom-container',{ease:"power1.inOut",bottom:-325,borderRadius:'0 25 25 0', height:350, duration:.3 })
  .to('.back',{display:'block'},'-=0')
  .from('.back',{y:600, duration:.7,ease:"power1.inOut"},'<')
  // .from('.back',{y:10,ease:"power1.inOut"},'<')
  .from('.back .button-container svg',{x:20, opacity:0,ease:"power1.inOut",rotate:180})
  .from('.back h3',{opacity:0,duration:1,ease:"power1.inOut"},'<')
  .from('.back h2',{opacity:0, duration:1,ease:"power1.inOut"},'<')
  .from('.back p',{opacity:0, duration:1,ease:"power1.inOut"},'<')
  .from('.back img',{opacity:0, duration:1,ease:"power1.inOut"},'<')

    
  
    const start = document.querySelector(".front .buttom-container")
    const revert = document.querySelector(".back .button-container")

    start.addEventListener('click', playTimeline);
    revert.addEventListener('click', reverseTimeline);
    
    function playTimeline(e) {
      e.stopPropagation();
      tl.timeScale(1.5);
      tl.play();
    }
    
    function reverseTimeline(e) {
      e.stopPropagation();
      tl.timeScale(1.8);
      tl.reverse();
    }