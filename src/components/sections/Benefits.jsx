import { motion } from 'framer-motion'
import { Leaf, Heart, Activity, Scale } from 'lucide-react'

const benefits = [
    {
        icon: Leaf,
        title: "100% Vegetarian",
        desc: "Pure plant-based nutrition. An essential protein source for vegetarian and vegan diets."
    },
    {
        icon: Activity,
        title: "Gut Friendly",
        desc: "Rich in prebiotic fiber that supports healthy digestion and nourishes good gut bacteria."
    },
    {
        icon: Heart,
        title: "Heart Hero",
        desc: "Contains natural compounds known to help lower bad cholesterol (LDL) and support heart health."
    },
    {
        icon: Scale,
        title: "Sugar Smart",
        desc: "A low-glycemic food that is diabetic-friendly and helps maintain stable blood sugar levels."
    }
]

export function Benefits() {
    return (
        <section id="benefits" className="py-24 px-6 relative z-10 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-nature-600 font-medium tracking-wider text-sm uppercase mb-2 block">Wholesome & Healing</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-nature-900 mb-6 font-display">
                        Nature’s Superfood
                    </h2>
                    <p className="text-earth-700 max-w-2xl mx-auto text-lg font-light">
                        Cultivated with care to deliver maximum health benefits in every bite.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/50 hover:border-nature-300 hover:bg-white/80 transition-all group shadow-sm hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-nature-100 rounded-full flex items-center justify-center text-nature-700 mb-6 group-hover:bg-nature-800 group-hover:text-nature-50 transition-colors duration-300">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-nature-900 mb-3 font-display">{benefit.title}</h3>
                            <p className="text-earth-700 leading-relaxed text-sm">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
