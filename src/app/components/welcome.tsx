import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Welcome = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold mb-4">Ammar Ahmed</h1>
        <TypeAnimation
          sequence={[
            'Software Engineer',
            2000,
            'Full Stack Developer',
            2000,
            'AI Enthusiast',
            2000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="text-3xl text-blue-400"
        />
      </motion.div>
    </section>
  );
};

export default Welcome;

