import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative px-6 pt-20 pb-10 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-nature-900 mb-8 tracking-tight">
                        Fresh. <br /> Organic. <br />
                        <span className="text-nature-600 font-serif italic font-light">Mushrooms.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-earth-700 max-w-lg mb-10 leading-relaxed font-light">
                        Small-batch oyster & milky mushrooms, harvested fresh in Bangalore.
                        No chemicals. Pure taste.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                            href="#order"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-nature-800 text-white rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-nature-200/50 hover:bg-nature-900 group"
                        >
                            Order on WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-md text-nature-900 border border-nature-200 rounded-full text-lg font-medium transition-all hover:bg-white hover:border-nature-300"
                        >
                            Learn More
                        </motion.a>
                    </div>
                </motion.div>

                {/* Responsive spacer for mobile where 3D might be less visible or overlapped */}
                <div className="h-64 md:h-auto pointer-events-none"></div>
            </div>
        </section>
    )
}
