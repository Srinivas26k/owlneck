import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Differentiator = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 space-y-32">

                {/* ROW 1: Optimized Spend */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative bg-cream/30 p-8 rounded-sm overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50" />

                            {/* SVG Chart */}
                            <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-xl">
                                {/* Grid Lines */}
                                {[1, 2, 3, 4].map(i => (
                                    <line key={i} x1="0" y1={i * 60} x2="400" y2={i * 60} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                                ))}

                                {/* Bar Chart Bars (Decreasing cost) */}
                                {[100, 80, 60, 45, 30].map((h, i) => (
                                    <motion.rect
                                        key={i}
                                        x={i * 70 + 40}
                                        y={300} // Start from bottom
                                        width="40"
                                        height={0}
                                        animate={{ y: 300 - h * 2.5, height: h * 2.5 }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="fill-electric hover:fill-sunset transition-colors duration-300"
                                    />
                                ))}

                                {/* Trend Line */}
                                <motion.path
                                    d="M 60 50 L 130 100 L 200 150 L 270 187 L 340 225"
                                    fill="none"
                                    stroke="#FF8040"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, delay: 1 }}
                                />
                            </svg>

                            <div className="absolute bottom-4 left-8 text-navy font-bold text-lg">
                                Optimization Trends
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6"
                    >
                        <div className="w-12 h-1 bg-electric" />
                        <h2 className="text-4xl md:text-5xl">AI-Driven Insights</h2>
                        <p className="text-muted text-lg leading-relaxed">
                            We don't just maintain systems—we analyze your infrastructure spend using proprietary AI models. Identifying inefficiencies before they become costs.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="bg-electric/10 p-4 rounded-sm">
                                <p className="text-3xl font-black text-electric">30%</p>
                                <p className="text-sm font-bold uppercase tracking-wider text-navy">Avg Cost Reduction</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ROW 2: 24/7 Support (Reversed) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Right Visual (Interactive Dashboard) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-video bg-navy rounded-sm overflow-hidden shadow-2xl group cursor-pointer">
                            {/* Dashboard Content Mockup */}
                            <div className="absolute inset-4 bg-navy/50 border border-white/10 rounded overflow-hidden">
                                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-navy">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-xs text-electric font-mono">LIVE MONITORING</div>
                                </div>

                                <div className="p-4 grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-electric/10 rounded animate-pulse" />
                                    <div className="h-24 bg-electric/10 rounded animate-pulse delay-75" />
                                    <div className="col-span-2 h-32 bg-electric/5 rounded relative overflow-hidden">
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 shadow-[0_0_10px_#4ade80]"
                                            animate={{ height: ["10%", "60%", "30%", "80%", "40%"] }}
                                            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6"
                    >
                        <div className="w-12 h-1 bg-sunset" />
                        <h2 className="text-4xl md:text-5xl">24/7 Support Excellence</h2>
                        <p className="text-muted text-lg leading-relaxed">
                            Human experts backed by AI automation. Response times that shatter industry standards.
                        </p>
                        <ul className="space-y-4">
                            {['< 15 Minute Response', 'Dedicated Engineers', 'Real-time Escalation'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-navy font-medium"
                                >
                                    <ArrowUpRight className="text-sunset" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
