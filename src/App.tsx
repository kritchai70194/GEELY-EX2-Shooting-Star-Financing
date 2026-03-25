import React from 'react';
import { motion } from 'motion/react';
import { BadgePercent, Banknote, CalendarDays, Car, Info } from 'lucide-react';

const data = [
  { downPercent: "10%", downAmount: "48,499", financeAmount: "436,491", m48: "10,509", r48: "3.89%", m60: "8,799", r60: "4.19%", m72: "7,696", r72: "4.49%", m84: "6,939", r84: "4.79%" },
  { downPercent: "15%", downAmount: "72,749", financeAmount: "412,241", m48: "9,719", r48: "3.29%", m60: "8,104", r60: "3.59%", m72: "7,028", r72: "3.79%", m84: "6,450", r84: "4.49%" },
  { downPercent: "20%", downAmount: "96,998", financeAmount: "387,992", m48: "8,985", r48: "2.79%", m60: "7,433", r60: "2.99%", m72: "6,485", r72: "3.39%", m84: "5,909", r84: "3.99%" },
  { downPercent: "25%", downAmount: "121,248", financeAmount: "363,742", m48: "8,178", r48: "1.98%", m60: "6,908", r60: "2.79%", m72: "6,019", r72: "3.19%", m84: "5,509", r84: "3.89%" },
  { downPercent: "30%", downAmount: "145,497", financeAmount: "339,493", m48: "-", r48: "-", m60: "6,380", r60: "2.55%", m72: "5,589", r72: "3.09%", m84: "5,114", r84: "3.79%" }
];

export function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[500px] bg-gradient-to-b from-cyan-900/40 via-blue-900/10 to-transparent blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-sm font-medium tracking-wide">
              <Car className="w-4 h-4" />
              <span>NEW ARRIVAL 2026</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              GEELY EX2 <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Shooting Star</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
              ตารางผ่อนชำระรถยนต์ไฟฟ้าสไตล์สปอร์ต สัมผัสประสบการณ์การขับขี่แห่งอนาคต ด้วยข้อเสนอสุดพิเศษที่คุณออกแบบได้เอง
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="bg-neutral-900/50 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Banknote className="text-cyan-400 w-7 h-7" />
                ตารางผ่อนชำระ
              </h2>
              <p className="text-neutral-400 text-sm">อัพเดทล่าสุด • อัตราดอกเบี้ยและยอดผ่อนชำระอาจมีการเปลี่ยนแปลง</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-amber-400/80 bg-amber-400/10 px-4 py-2 rounded-lg">
              <Info className="w-4 h-4" />
              <span>ดาวน์ 30% ไม่มีแคมเปญ 48 งวด</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.02] text-neutral-300 text-sm tracking-wide">
                  <th className="p-5 font-semibold border-b border-white/5 whitespace-nowrap"><div className="flex items-center gap-2"><BadgePercent className="w-4 h-4 text-cyan-500" />เงินดาวน์ (%)</div></th>
                  <th className="p-5 font-semibold border-b border-white/5 whitespace-nowrap">ยอดดาวน์ (บาท)</th>
                  <th className="p-5 font-semibold border-b border-white/5 whitespace-nowrap">ยอดจัดไฟแนนซ์</th>
                  <th className="p-5 font-semibold border-b border-white/5 text-center whitespace-nowrap border-l border-white/5"><div className="flex flex-col items-center gap-1"><span className="text-cyan-400">48 งวด</span><span className="text-xs text-neutral-500 font-normal">(4 ปี)</span></div></th>
                  <th className="p-5 font-semibold border-b border-white/5 text-center whitespace-nowrap"><div className="flex flex-col items-center gap-1"><span className="text-cyan-400">60 งวด</span><span className="text-xs text-neutral-500 font-normal">(5 ปี)</span></div></th>
                  <th className="p-5 font-semibold border-b border-white/5 text-center whitespace-nowrap"><div className="flex flex-col items-center gap-1"><span className="text-cyan-400">72 งวด</span><span className="text-xs text-neutral-500 font-normal">(6 ปี)</span></div></th>
                  <th className="p-5 font-semibold border-b border-white/5 text-center whitespace-nowrap"><div className="flex flex-col items-center gap-1"><span className="text-cyan-400">84 งวด</span><span className="text-xs text-neutral-500 font-normal">(7 ปี)</span></div></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm md:text-base">
                {data.map((row) => (
                  <tr key={row.downPercent} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-5 font-bold text-white"><span className="inline-flex items-center justify-center w-12 h-8 rounded-md bg-neutral-800 border border-white/10 group-hover:border-cyan-500/50 transition-colors">{row.downPercent}</span></td>
                    <td className="p-5 font-medium text-neutral-200">{row.downAmount}</td>
                    <td className="p-5 font-medium text-neutral-200">{row.financeAmount}</td>
                    <td className="p-5 text-center border-l border-white/5">{row.m48 === "-" ? <span className="text-neutral-600">-</span> : <div className="flex flex-col items-center"><span className="font-semibold text-white">{row.m48}</span><span className="text-xs text-cyan-400/80 mt-0.5">{row.r48}</span></div>}</td>
                    <td className="p-5 text-center"><div className="flex flex-col items-center"><span className="font-semibold text-white">{row.m60}</span><span className="text-xs text-cyan-400/80 mt-0.5">{row.r60}</span></div></td>
                    <td className="p-5 text-center"><div className="flex flex-col items-center"><span className="font-semibold text-white">{row.m72}</span><span className="text-xs text-cyan-400/80 mt-0.5">{row.r72}</span></div></td>
                    <td className="p-5 text-center"><div className="flex flex-col items-center"><span className="font-semibold text-white">{row.m84}</span><span className="text-xs text-cyan-400/80 mt-0.5">{row.r84}</span></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white/[0.01] p-5 text-xs text-neutral-500 flex items-center justify-between border-t border-white/5">
            <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /><span>อัตราดอกเบี้ยและเงื่อนไขเป็นไปตามที่สถาบันการเงินกำหนด</span></div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;