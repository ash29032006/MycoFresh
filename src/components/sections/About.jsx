import { motion } from 'framer-motion'

export function About() {
    return (
        <section id="about" className="py-24 px-6 relative bg-white/30 backdrop-blur-sm z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-nature-600 font-medium tracking-widest text-sm uppercase mb-4 block"
                >
                    Our Philosophy
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-nature-900 mb-8 font-display"
                >
                    Cultivating nature’s finest,<br /> right here in the city.
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-earth-800 leading-relaxed font-light space-y-6"
                >
                    <p>
                        At MycoFresh, we believe that the best food is grown with patience and respect for nature.
                        Located in Bangalore, our urban farm mimics the cool, misty conditions of a forest floor.
                    </p>
                    <p>
                        We don’t use shortcuts. No pesticides, no growth accelerators—just pure substrate,
                        clean water, and the natural magic of mycelium. The result is mushrooms that are
                        firmer, tastier, and healthier.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
