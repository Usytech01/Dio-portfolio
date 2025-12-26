import { motion } from 'framer-motion'
import React from 'react'

export const About = () => {
  return (
    <section className="bg-[#061427]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">

            <motion.img
                src="./assets/girl.png"
                className='with-[50px] hight-[50px] rounded-full'
                initial={{opacity: 0, x: -40}}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 0.6 }}
            />

            <motion.div
                initial={{opacity: 0, y:40 }}
                whileInView={{ opacity: 0, y:0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-blue-400 uppercase text-sm mb-3">About Me</p>
                <h2 className="">I Am Available for UI/UX and Website Development</h2>

                <p className="textg-gray-400 mb-8">
                    I help startups and brands build moder, user-friendly digital products.
                </p>

                <div className="flax gap-8">
                    {["120+ Projects", "3+ Years", "5+ Awards"].map(stat => (
                        <div className="text-white font-semibold" key={stat}>
                            {stat}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  )
}
