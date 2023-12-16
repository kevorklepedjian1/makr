// Footer.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img from '../assets/bg-footer-squiggle.svg';
import withAnimation from '../hocs/withAnimation';

const Footer = () => {
  const [email, setEmail] = useState('Email address');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const controls = useAnimation();

  const handleInputChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const handleGetNotified = () => {
    if (isValidEmail) {
      console.log(`User with email ${email} will be notified.`);
    } else {
      alert('Please enter a valid email address before getting notified.');
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionPosition = document.getElementById('footer').offsetTop;

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
    <motion.footer className='relative' id='footer' animate={controls}>
      <img src={img} alt="Footer Squiggle" className="absolute -z-20 bottom-0"/>
      <div className='footer z-20'> 
        <h3>Get notified when we launch</h3>
        <div className='form'>
          <form>
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              style={{ borderColor: isValidEmail ? 'initial' : 'red' }}
              className='input'
            />
            <button onClick={handleGetNotified} disabled={!isValidEmail} >
              Get Notified
            </button>
            {!isValidEmail && <p style={{ color: 'red' }}>This is not a valid email address</p>}
          </form>
        </div>
      </div>  
    </motion.footer>
  );
};

export default withAnimation(Footer);
