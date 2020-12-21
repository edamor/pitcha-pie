import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
};

const circleStyle = {
  display: "block",
  width: "1.1rem",
  height: "1.1rem",
  border: "0.2rem solid #e9e9e9",
  borderTop: "0.2rem solid #3498db",
  borderRadius: "50%",
  boxSizing: "border-box"
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

export default function CircleLoader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}