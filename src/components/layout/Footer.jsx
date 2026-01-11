export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-nature-200/50 bg-white/30 backdrop-blur-sm relative z-10 text-nature-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight font-display">MycoFresh</h3>
                    <p className="text-nature-600/80 text-sm mt-1">Cultivated with care in Bangalore.</p>
                </div>

                <div className="text-sm text-earth-600">
                    © {new Date().getFullYear()} MycoFresh. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
