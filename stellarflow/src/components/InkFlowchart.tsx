import { motion } from 'framer-motion';

export const InkFlowchart = ({ className }: { className?: string }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.4, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.4, duration: 0.01 }
      }
    })
  };

  // Helper to generate rounded rect path data
  // x, y: top-left corner
  // w, h: width, height
  // r: border radius
  const roundedRect = (x: number, y: number, w: number, h: number, r: number) => {
    return `M ${x+r} ${y} 
            L ${x+w-r} ${y} 
            Q ${x+w} ${y} ${x+w} ${y+r} 
            L ${x+w} ${y+h-r} 
            Q ${x+w} ${y+h} ${x+w-r} ${y+h} 
            L ${x+r} ${y+h} 
            Q ${x} ${y+h} ${x} ${y+h-r} 
            L ${x} ${y+r} 
            Q ${x} ${y} ${x+r} ${y} Z`;
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5" // Slightly thicker for hand-drawn feel
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-brand-ink"
      >
        {/* Node 1: Input (Left) - Rounded Rectangle */}
        <motion.path
          d={roundedRect(20, 75, 90, 50, 15)}
          variants={draw}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="fill-white"
        />
        
        {/* Connection 1-2 (Input -> Network) */}
        <motion.path
          d="M 110 100 L 155 100"
          variants={draw}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        {/* Arrowhead */}
        <motion.path
          d="M 150 95 L 155 100 L 150 105"
          variants={draw}
          custom={1.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Node 2: Network (Center) - Rounded Rectangle (Previously Circle) */}
        <motion.path
          d={roundedRect(160, 70, 80, 60, 15)}
          variants={draw}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="fill-white"
        />
        
        {/* Connection 2-3 (Network -> Value Top) */}
        <motion.path
          d="M 240 90 C 260 90 270 50 295 50"
          variants={draw}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.path
          d="M 290 45 L 295 50 L 290 55"
          variants={draw}
          custom={3.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Connection 2-4 (Network -> Value Bottom) */}
        <motion.path
          d="M 240 110 C 260 110 270 150 295 150"
          variants={draw}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.path
          d="M 290 145 L 295 150 L 290 155"
          variants={draw}
          custom={3.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Node 3: Value Top (Right Top) - Rounded Rectangle */}
        <motion.path
          d={roundedRect(300, 25, 80, 50, 10)}
          variants={draw}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="fill-white"
        />

        {/* Node 4: Value Bottom (Right Bottom) - Rounded Rectangle */}
        <motion.path
          d={roundedRect(300, 125, 80, 50, 10)}
          variants={draw}
          custom={4.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="fill-white"
        />

        {/* Labels - Centered in SVG */}
        <motion.g 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 0.8 }}
          className="font-hand text-xl select-none"
          style={{ fill: 'currentColor', stroke: 'none' }}
        >
          <text x="65" y="100" textAnchor="middle" dominantBaseline="middle">任务一</text>
          <text x="200" y="100" textAnchor="middle" dominantBaseline="middle">任务二</text>
          <text x="340" y="50" textAnchor="middle" dominantBaseline="middle">任务三</text>
          <text x="340" y="150" textAnchor="middle" dominantBaseline="middle">任务四</text>
        </motion.g>
      </svg>
    </div>
  );
};
