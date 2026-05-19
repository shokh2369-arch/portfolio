import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1];

export function FadeUp({
  children,
  className = "",
  delay = 0,
  as = "div",
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function FadeUpStagger({ children, className = "", stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  },
};
