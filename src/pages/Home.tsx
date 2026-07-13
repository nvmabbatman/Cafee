import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Sustainability from '../components/Sustainability';
import Bestsellers from '../components/Bestsellers';
import CafeMap from '../components/CafeMap';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Hero />
      <Menu />
      <Sustainability />
      <Bestsellers />
      <CafeMap />
    </motion.main>
  );
}
