import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './HomePage';
import ToDo from '../Pages/ToDo';
import MultiStep from '../Pages2/MultiStep';
import Weather from '../Pages3/Weather';
import Translator from '../Pages4/Translator';
import AboutContact from './AboutContact';
import Feedback from '../Pages5/Feedback';
import EmbeddedWebsite from '../Pages6/EmbeddedWebsite';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AnimatedRoutes = () => {
  const location = useLocation(); // This is now inside the Router context

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/cv"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutContact />
            </motion.div>
          }
        />
        <Route
          path="/todo"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ToDo />
            </motion.div>
          }
        />
        <Route
          path="/multistep"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <MultiStep />
            </motion.div>
          }
        />
        <Route
          path="/weather"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Weather />
            </motion.div>
          }
        />
        <Route
          path="/translator"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Translator />
            </motion.div>
          }
        />
        <Route
          path="/feedback"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Feedback />
            </motion.div>
          }
        />
        <Route
          path="/embeddedWebsite"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <EmbeddedWebsite />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
