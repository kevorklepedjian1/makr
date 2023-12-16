// Features.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img1 from '../assets/illustration-passions.svg';
import img2 from '../assets/illustration-financial-freedom.svg';
import img3 from '../assets/illustration-lifestyle.svg';
import img4 from '../assets/illustration-work-anywhere.svg';
import withAnimation from '../hocs/withAnimation';

const Features = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionPosition = document.getElementById('features').offsetTop;

    if (scrollPosition > sectionPosition - window.innerHeight / 2) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section className='section' id='features' animate={controls}>
      <div className='flex flex-col items-center imgf'>
        <img src={img1} className='img' alt='Passions' />
        <div className='text-content-box'>
          <h4>Indulge your passions</h4>
          <p className='p'>Your passions shouldn't be just for the weekend. Earn a living doing what you love</p>
        </div>
      </div>
      <div className='flex flex-col items-center img2box imgs'>
        <img src={img2} className='img1' alt='Financial Freedom' />
        <div className='text-content-box'>
          <h4>Gain financial freedom</h4>
          <p className='p'>Start making money work for you. There’s nothing quite like earning while you sleep.</p>
        </div>
      </div>
      <div className='flex flex-col items-center imgt'>
        <img src={img3} className='img2' alt='Choose Your Lifestyle' />
        <div className='text-content-box'>
          <h4>Choose your lifestyle</h4>
          <p className='p'>Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</p>
        </div>
      </div>
      <div className='flex flex-col items-center img2box imga'>
        <img src={img4} className='img3' alt='Work from Anywhere' />
        <div className='text-content-box'>
          <h4>Work from anywhere</h4>
          <p className='p'>Selling online means not being pinned down. Want to work AND travel? Go for it!</p>
        </div>
      </div>
    </motion.section>
  );
};

export default withAnimation(Features);
