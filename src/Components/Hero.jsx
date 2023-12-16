// Hero.js
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img4 from "../assets/illustration-hero-mobile.png";
import img2 from "../assets/illustration-hero-left.svg";
import img1 from "../assets/bg-hero-squiggle.svg";
import img3 from "../assets/illustration-hero-right.svg";
import img5 from "../assets/icon-scroll.svg";
import withAnimation from '../hocs/withAnimation';

const Hero = () => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState('down');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100 && scrollDirection === 'down') {
      setScrollDirection('up');
      controls.start({ y: -100, opacity: 0 });
    } else if (scrollPosition <= 100 && scrollDirection === 'up') {
      setScrollDirection('down');
      controls.start({ y: 0, opacity: 1 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);

  return (
    <motion.div className='flex items-center justify-center relative'>
      <motion.img src={img4} alt="" className='a' animate={controls} />
      <motion.img src={img2} className='b absolute left-0 top-0 -z-10' animate={controls} />
      <motion.img src={img1} className='d absolute top-0 -z-10' animate={controls} />
      <div className='flex items-center justify-center flex-col mt-16 z-10 text-center'>
        <motion.h1 className='text-white w-kev text-me' animate={controls}>
          Get paid for the work you love to do.
        </motion.h1>
        <motion.p className='l' animate={controls}>
          The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.
        </motion.p>
        <motion.img src={img5} variants={{ animate: { y: [0, 10, 0], transition: { yoyo: Infinity, duration: 1.5 } } }} />
      </div>
      <motion.img src={img3} className='c absolute right-0 top-0 -z-10' animate={controls} />
    </motion.div>
  );
};

export default withAnimation(Hero);
