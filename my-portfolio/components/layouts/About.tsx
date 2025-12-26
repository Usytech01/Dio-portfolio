import { motion } from 'framer-motion'
import React from 'react'



export const About = () => {
  return (
    <section className="bg-[#061427]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-6 items-center py-8">

            <motion.img
            src="./assets/pic5.jpg"
            className='rounded-xl shadow-lg'
            initial={{ opacity: 0, x: -40}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >

            </motion.img>
            <motion.div
                initial={{opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mx-4'
            >
                <p className="text-blue-400 uppercase text-md mb-3 font-semibold">About Me</p>
                <h2 className="text-4xl font-bold text-white mb-6"> I Am Available For UI/UX Design and Web Development Project </h2>

                <p className="text-gray-400 mb-8">
                    I help startups and brands build moder web development, user-friendl digital products
                </p>

                <div className="flex gap-8 mx-auto" >
                    {["50+ Projects", "3+ Years of Experience", "7+ Awards" ].map(stat =>(
                        <div key={stat} className='text-white font-semibold'>{stat}</div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  )
}
