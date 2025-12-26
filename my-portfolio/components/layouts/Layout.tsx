import { motion } from "framer-motion";
import Image from "next/image";

const Layout: React.FC = () => {
    return(
        <section className="min-h-screen bg-[#061427] flex items-center pt-28">
            <div className="mx-auto grid md:grid-cols-2 gap-8 px-6">
                {/* Left Content */}
                
                <motion.div
                    initial={{opacity:0, x: -60}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                >
                    <p className="text-blue-400 uppercase tracking-wide text-sm mb-3">Usman O. Dio</p>
                    <h1 className="text-3xl md:text-6Xl font-bold text-white leading-tight">HI! I'M USMAN <br/> 
                        <span className="text-blue-500">I'M A DESIGNER AND A DEVELOPER</span>
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-md">I design modern UI/UX experience clean aesthetics and smooth interactions | <br/>
                        <span className="">Professional Fullstack Web Developer</span>
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <button className="bg-blue-500 px-6 py-3 rounded-full text-white hover:scale-105 transition">Get In Touch</button>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1}}
                    className="flex justify-center"
                >
                    <div className=" animate-spin-slow flex grid-cols-2 gap-4">
                        <Image
                            src="/assets/pic5.jpg"
                            alt="profile"
                            width={250}
                            height={150}
                            className="rounded-full border border-blue-500/30 object-cover"
                         />
                        <Image
                            src="/assets/pic.jpeg"
                            alt="profile"
                            width={250}
                            height={150}
                            className="rounded-full border border-blue-500/30 object-cover"
                         />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Layout;