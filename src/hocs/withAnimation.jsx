// withAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const withAnimation = (WrappedComponent) => {
  return (props) => {
    const animationVariants = {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    };

    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animationVariants}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withAnimation;
