"use client";

import { motion } from "framer-motion";

export default function TextTyping({ text }){

    const words = text.split("");

    return(
        <span>
            {words.map((el, i) => (
                <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.1,
                  delay: i / 30
                }}
                key={i}
                className=" m-0 p-0 tracking-normal "
                >
                    {el}
                </motion.span>
            ))}
        </span>
    )
}