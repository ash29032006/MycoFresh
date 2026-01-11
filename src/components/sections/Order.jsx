import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function Order() {
    return (
        <section id="order" className="py-32 px-6 flex flex-col items-center justify-center text-center relative z-10 overflow-hidden">
            {/* Background gradient splash */}
            <div className="absolute inset-0 bg-gradient-radial from-nature-200/40 to-transparent opacity-50 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto relative"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-nature-900 mb-6">Ready to taste the difference?</h2>
                <p className="text-xl text-earth-700 mb-10 font-light leading-relaxed">
                    We harvest strictly based on orders to ensure maximum freshness.
                    Message us on WhatsApp to check today's stock and place your order.
                </p>

                <motion.a
                    href="https://wa.me/918317464735?text=Hi%2C%20I%E2%80%99d%20like%20to%20order%20fresh%20mushrooms%20from%20MycoFresh."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-10 py-5 bg-[#25D366] text-white rounded-full text-xl font-bold shadow-xl shadow-green-200 hover:bg-[#20bd5a] transition-all"
                >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Order on WhatsApp
                </motion.a>

                <p className="mt-8 text-sm text-nature-500 font-medium tracking-wide">
                    BANGALORE ONLY • FRESH DELIVERY
                </p>
            </motion.div>
        </section>
    )
}
