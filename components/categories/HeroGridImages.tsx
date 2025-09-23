/* eslint-disable @next/next/no-img-element */
"use client";
import { MotionConfig, motion } from "framer-motion";

const imgs = Array.from(
  { length: 12 },
  (_, i) => `/gallery/gallery-${i + 1}.jpg`
);
export default function HeroGridImages({
  position,
}: {
  position: "left" | "right";
}) {
  const posit = {
    right: "rotate-[50deg] right-0",
    left: "-rotate-[50deg] left-0",
  };
  return (
    <div>
      <MotionConfig>
        <motion.div
          animate={{ opacity: 1 }}
          className={`${posit[position]} absolute bottom-[-37rem]  grid  grid-cols-4 overflow-hidden  flex-col  gap-[0.4rem]`}
        >
          {imgs.map((img) => (
            <motion.div
              key={img}
              className="w-[10rem] backdrop-blur-lg relative overflow-hidden  p-[0.3rem] rounded-xl  h-[10rem]"
            >
              <img
                style={{ filter: "brightness(0)" }}
                draggable={false}
                className="w-auto backdrop-blur-lg !h-full top-0 left-0 absolute object-contain"
                src={img}
                alt=""
              />
            </motion.div>
          ))}{" "}
          {imgs.map((img) => (
            <motion.div
              key={img}
              className="w-[10rem] relative overflow-hidden bg-white p-[0.3rem] rounded-xl  h-[10rem]"
            >
              <img
                draggable={false}
                className="w-auto !h-full top-0 left-0 absolute object-contain"
                src={img}
                alt=""
              />
            </motion.div>
          ))}
          {imgs.map((img) => (
            <motion.div
              key={img}
              className="w-[10rem] relative overflow-hidden bg-white p-[0.3rem] rounded-xl  h-[10rem]"
            >
              <img
                draggable={false}
                className="w-auto !h-full top-0 left-0 absolute object-contain"
                src={img}
                alt=""
              />
            </motion.div>
          ))}
        </motion.div>
      </MotionConfig>
    </div>
  );
}
