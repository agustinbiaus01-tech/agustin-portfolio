"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  category: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  image,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm text-muted uppercase">
          {category}
        </p>

        <h3 className="text-3xl mt-2 font-semibold">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}