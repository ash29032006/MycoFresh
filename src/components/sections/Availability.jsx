import { motion } from 'framer-motion'
import clsx from 'clsx'

const products = [
    {
        name: "Oyster Mushrooms",
        type: "Pleurotus ostreatus",
        desc: "Delicate texture and mild flavor. Perfect for quick sautés, soups, and light curries.",
        color: "bg-earth-200"
    },
    {
        name: "Milky Mushrooms",
        type: "Calocybe indica",
        desc: "Meaty, robust, and stays firm when cooked. A tropical favorite suited for spicy gravies.",
        color: "bg-nature-100"
    }
]

export function Availability() {
    return (
        <section className="py-24 px-6 z-10 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-nature-900 mb-12 text-center">Our Harvest</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={clsx("rounded-3xl p-10 relative overflow-hidden group min-h-[300px] flex flex-col justify-between", p.color)}
                        >
                            <div className="relative z-10">
                                <span className="text-nature-600 font-serif italic text-sm mb-2 block">{p.type}</span>
                                <h3 className="text-3xl font-bold text-nature-900 mb-4">{p.name}</h3>
                                <p className="text-nature-800/80 mb-8 max-w-sm leading-relaxed">{p.desc}</p>
                            </div>

                            <div className="relative z-10 self-start">
                                <div className="inline-flex items-center text-nature-900 font-medium text-sm border border-nature-900/10 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-nature-900 group-hover:text-white transition-colors">
                                    Check Availability
                                </div>
                            </div>

                            {/* Decorative blob */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/40 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-earth-600 mt-12 text-sm">
                    * Availability varies daily based on harvest cycles.
                </p>
            </div>
        </section>
    )
}
