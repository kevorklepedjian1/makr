import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features }) => {
  return (
    <motion.div
      className="bg-blue rounded-card px-7 pb-8 md:px-[2.375rem] md:pb-12 xl:max-w-[445px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="../assets/icon-free.svg"
        className="mt-[-1.4375rem]"
        alt="Free"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div
        className="mt-[1.625rem] text-h4 font-extrabold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {title}
      </motion.div>
      <motion.p
        className="mt-5 opacity-60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {price}
      </motion.p>
      <motion.h3
        className="text-h2 leading-h2 mt-[1.625rem] font-extrabold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {price}
      </motion.h3>
      <motion.ul
        className="mt-5 flex flex-col gap-3 list-inside list-image-checkmark-cyan"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {features.map((feature, index) => (
          <motion.li key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 + index * 0.1 }}>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default PricingCard;
