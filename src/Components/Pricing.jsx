import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PricingCard from './PricingCard';
import img from '../assets/icon-check-cyan.svg';
import img1 from '../assets/icon-check.svg';
import img2 from '../assets/icon-paid.svg';
import img3 from '../assets/icon-free.svg';
import withAnimation from '../hocs/withAnimation';

const Pricing = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionPosition = document.getElementById('pricing').offsetTop;

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
    <motion.section className="price-container" id='pricing' animate={controls}>
      <div className="content-price-container">
        <h3>Our pricing plans</h3>
        <p>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
      </div>

      <div className="box-price-container">
        <div className="start-box-price">
          <img src={img3} className="start-box-icon" alt="" />
          <div className="start-box-content">
            <h5>Dip your toe</h5>
            <p>Just getting started? No problem at all! Our free plan will take you a long way.</p>
          </div>
          <div className="options-start-box">
            <h2>Free</h2>
            <div className="options-content">
              <img src={img} alt="" />
              <p>Unlimited products</p>
            </div>
            <div className="options-content">
              <img src={img} alt="" />
              <p>Basic analytics</p>
            </div>
            <div className="options-content">
              <img src={img} alt="" />
              <p>Limited marketplace exposure</p>
            </div>
            <div className="options-content">
              <img src={img} alt="" />
              <p>10% fee per transaction</p>
            </div>
          </div>
        </div>

        <div className="end-box-price">
          <img src={img2} className="end-box-icon" alt="" />
          <div className="end-box-content">
            <h5 className="title-end-box">Dive right in</h5>
            <p className="paragraph-end-box">Ready for the big time? Our paid plan will help you take your business to the next level.</p>
          </div>
          <div className="options-end-box">
            <div className="title-price-end-box">
              <h2 className="title-end-box">$25.00</h2>
              <p className="paragraph-end-box">/ month</p>
            </div>
            <div className="end-options-content">
              <img src={img1} alt="" />
              <p className="paragraph-end-box">Custom domain</p>
            </div>
            <div className="end-options-content">
              <img src={img1} alt="" />
              <p className="paragraph-end-box">Advanced analytics and reports</p>
            </div>
            <div className="end-options-content">
              <img src={img1} alt="" />
              <p className="paragraph-end-box">High marketplace visibility</p>
            </div>
            <div className="end-options-content">
              <img src={img1} alt="" />
              <p className="paragraph-end-box">High marketplace visibility</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default withAnimation(Pricing);
