import { motion } from "framer-motion";
import { ReactNode } from "react";

type framerMotionWrapperProps = {
  children: ReactNode;
};

export default function FramerMotionWrapper({
  children,
}: framerMotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
