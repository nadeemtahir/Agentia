"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { motion } from "framer-motion";

const Analysis = () => {
  return (
    <div
      id="analysis"
      className="relative min-h-screen flex flex-col items-center justify-start text-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden px-6 py-32 md:py-40"
    >
      {/* Title Section */}
      <motion.h2 
        className="text-5xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg mt-12 sm:mt-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        AI Performance Insights
      </motion.h2>
      <motion.p 
        className="text-base sm:text-lg text-gray-400 mt-4 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Get real-time analytics and trends in AI-driven technology growth.
      </motion.p>

      {/* Interactive Chart Container */}
      <motion.div 
        className="relative mt-10 w-full max-w-6xl h-[500px] bg-gray-900/50 border border-blue-500/30 rounded-2xl shadow-2xl p-6 backdrop-blur-xl overflow-hidden hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Neon Glowing Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/10 blur-3xl"></div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <defs>
              <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FF7F" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#00FF7F" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorML" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#1E90FF" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#1E90FF" opacity={0.2} />
            <XAxis dataKey="month" stroke="#38BDF8" tick={{ fill: "#38BDF8" }} tickSize={10} />
            <YAxis stroke="#38BDF8" tick={{ fill: "#38BDF8" }} domain={[0, 10000]} />
            <Tooltip contentStyle={{ backgroundColor: "#1F1B24", borderColor: "#38BDF8", color: "#ffffff" }} />

            {/* Curved Area Lines */}
            <Area 
              type="monotone" 
              dataKey="aiUsage" 
              stroke="#00FF7F" 
              fillOpacity={1} 
              fill="url(#colorAI)" 
              strokeWidth={4} 
              dot={{ r: 6, fill: "#00FF7F" }} 
              activeDot={{ r: 10 }} 
            />
            <Area 
              type="monotone" 
              dataKey="mlGrowth" 
              stroke="#1E90FF" 
              fillOpacity={1} 
              fill="url(#colorML)" 
              strokeWidth={4} 
              dot={{ r: 6, fill: "#1E90FF" }} 
              activeDot={{ r: 10 }} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

// **Default export fix**
export default Analysis;

const chartData = [
  { month: "Jan", aiUsage: 1200, mlGrowth: 1500 },
  { month: "Feb", aiUsage: 1800, mlGrowth: 2100 },
  { month: "Mar", aiUsage: 2500, mlGrowth: 3100 },
  { month: "Apr", aiUsage: 3200, mlGrowth: 4000 },
  { month: "May", aiUsage: 4200, mlGrowth: 5200 },
  { month: "Jun", aiUsage: 5300, mlGrowth: 6300 },
  { month: "Jul", aiUsage: 6700, mlGrowth: 7500 },
  { month: "Aug", aiUsage: 8200, mlGrowth: 9200 },
];