import { motion } from 'framer-motion'

const uses = [
    { title: "Daily Cooking", text: "Perfect for stir-frys, curries, and pasta." },
    { title: "Plant Protein", text: "Excellent meat substitute for vegetarians." },
    { title: "Wellness", text: "Rich in antioxidants and immunity boosters." },
]

export function Uses() {
    return (
        <section className="py-24 px-6 bg-nature-900 text-earth-100 relative overflow-hidden z-10">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nature-800 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">How You Can Use Them</h2>
                    <p className="text-nature-200 text-lg mb-8 font-light max-w-md">
                        Mushrooms are versatile ingredients that elevate any dish.
                        Simple to cook, delicious to eat.
                    </p>
                    <div className="space-y-6">
                        {uses.map((u, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-4 items-start border-l-2 border-nature-700 pl-6 hover:border-nature-400 transition-colors"
                            >
                                <div>
                                    <h4 className="text-xl font-medium text-nature-100">{u.title}</h4>
                                    <p className="text-nature-300 mt-1">{u.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 h-80 w-full rounded-2xl overflow-hidden glass-panel relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-center p-8"
                >
                    {/* Abstract subtle visual */}
                    <div>
                        <p className="text-3xl font-serif italic text-white/40 mb-2">"Nature's Umami"</p>
                        <p className="text-nature-200/60 text-sm">Elevate your home cooking.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
