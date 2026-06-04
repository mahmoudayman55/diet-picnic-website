import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type PackageKey = "agility" | "balance" | "medplus" | "elite" | "champions";

const packages: { key: PackageKey; name: string; emoji: string; color: string; bgSoft: string; popular?: boolean }[] = [
  { key: "agility", name: "تحدي الرشاقة", emoji: "🏃‍♀️", color: "#f39678", bgSoft: "rgba(243, 150, 120, 0.08)" },
  { key: "balance", name: "The Balance", emoji: "🧘", color: "#006b5b", bgSoft: "rgba(0, 107, 91, 0.08)", popular: true },
  { key: "medplus", name: "Med-plus", emoji: "👩‍⚕️", color: "#F06292", bgSoft: "rgba(240, 98, 146, 0.08)" },
  { key: "elite", name: "The Elite", emoji: "👑", color: "#C9A84C", bgSoft: "rgba(201, 168, 76, 0.08)" },
  { key: "champions", name: "الأبطال", emoji: "🏆", color: "#9C27B0", bgSoft: "rgba(156, 39, 176, 0.08)" },
];

const specialties: { feature: string; emoji: string; values: Record<PackageKey, boolean> }[] = [
  { feature: "لايف ستايل صحي", emoji: "🍎", values: { agility: true, balance: true, medplus: true, elite: true, champions: true } },
  { feature: "تغذية السمنة", emoji: "🎒", values: { agility: true, balance: true, medplus: true, elite: true, champions: false } },
  { feature: "تغذية النحافة", emoji: "🥗", values: { agility: false, balance: true, medplus: true, elite: true, champions: false } },
  { feature: "تغذية الأطفال", emoji: "👶", values: { agility: false, balance: true, medplus: true, elite: true, champions: false } },
  { feature: "تغذية الحوامل", emoji: "🤰", values: { agility: false, balance: true, medplus: true, elite: true, champions: false } },
  { feature: "تغذية المرضعات", emoji: "🤱", values: { agility: false, balance: true, medplus: true, elite: true, champions: false } },
  { feature: "التغذية العلاجية", emoji: "🏥", values: { agility: false, balance: false, medplus: true, elite: true, champions: false } },
  { feature: "تغذية الرياضيين", emoji: "🏋️", values: { agility: false, balance: false, medplus: false, elite: false, champions: true } },
];

const followUp: { feature: string; emoji: string; values: Record<PackageKey, string> }[] = [
  { feature: "جروب المتابعة", emoji: "👥", values: { agility: "جروب التحدي", balance: "جروب خاص", medplus: "جروب خاص", elite: "جروب خاص", champions: "جروب خاص" } },
  { feature: "المتابعة اليومية", emoji: "👩‍⚕️", values: { agility: "أخصائي التغذية", balance: "أخصائي التغذية", medplus: "الدكاترة / أخصائي التغذية", elite: "الدكاترة", champions: "الدكاترة / أخصائي التغذية" } },
  { feature: "المتابعة الأسبوعية", emoji: "👥", values: { agility: "فريق المتابعة", balance: "فريق المتابعة", medplus: "أخصائي التغذية", elite: "الدكاترة", champions: "أخصائي التغذية" } },
  { feature: "تغيير نظام الدايت", emoji: "🔄", values: { agility: "كل أسبوعين", balance: "كل أسبوعين", medplus: "كل أسبوعين", elite: "أسبوعياً", champions: "كل أسبوعين" } },
  { feature: "تعديل نظام التمارين", emoji: "🏋️", values: { agility: "شهرياً", balance: "شهرياً", medplus: "شهرياً", elite: "كل أسبوعين", champions: "كل أسبوعين" } },
  { feature: "المكالمة مع الدكتور", emoji: "📞", values: { agility: "عند البداية فقط", balance: "شهرياً", medplus: "كل أسبوعين", elite: "أسبوعياً", champions: "كل أسبوعين" } },
];

const badges = [
  { icon: "❤️", text: "رحلة صحية بأسلوب ممتع" },
  { icon: "🏆", text: "فريق متخصص يعمل لأجلك" },
  { icon: "📈", text: "نتائج حقيقية تدوم" },
  { icon: "🎯", text: "خطط مخصصة لكل احتياج" },
  { icon: "🛡️", text: "دعم ومتابعة مستمرة" },
];

export function PackagesComparison() {
  const [selectedMobilePkg, setSelectedMobilePkg] = useState<PackageKey>("balance");

  const currentMobilePkgData = packages.find((p) => p.key === selectedMobilePkg)!;

  return (
    <section id="comparison" dir="rtl" className="w-full bg-[#f8f9fa] py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#006b5b]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold text-[#191c1d] mb-4">
            مقارنة الباقات والتحديات 📊
          </h2>
          <p className="text-[#3e4946] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            قارن بين تخصصات ومميزات باقاتنا المختلفة لتختار البرنامج المثالي الذي يلبي تطلعاتك ويضمن نجاحك.
          </p>
        </div>

        {/* ── DESKTOP VIEW ── */}
        <div className="hidden lg:block rounded-3xl shadow-xl bg-white border border-slate-100 overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-right text-[#191c1d] font-extrabold text-[17px] min-w-[240px] border-b border-slate-100">
                  المقارنة والمميزات
                </th>
                {packages.map((p) => (
                  <th
                    key={p.key}
                    className={`text-center border-b border-slate-100 relative min-w-[170px] ${
                      p.popular 
                        ? "bg-[#006b5b]/3 shadow-[inset_0_-2px_0_#006b5b] pt-11 pb-6 px-4" 
                        : "p-6"
                    }`}
                  >
                    {p.popular && (
                      <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#006b5b] text-white text-[10px] font-black tracking-wide px-3 py-1 rounded-full shadow-sm whitespace-nowrap uppercase">
                        ⭐ الأكثر شيوعاً
                      </span>
                    )}
                    <div className="text-3xl mb-2 filter drop-shadow-sm">{p.emoji}</div>
                    <h3 className="text-lg font-black text-[#191c1d]" style={{ color: p.popular ? "#006b5b" : "#191c1d" }}>
                      {p.name}
                    </h3>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Specialties Subheading */}
              <tr>
                <td
                  colSpan={6}
                  className="p-4 bg-gradient-to-r from-[#006b5b]/5 via-[#f39678]/10 to-[#006b5b]/5 text-center font-extrabold text-[#006b5b] text-base border-y border-slate-100/80"
                >
                  🥗 التخصصات والمتابعات المشمولة الباقات
                </td>
              </tr>
              {specialties.map((row, idx) => (
                <tr
                  key={row.feature}
                  className="hover:bg-slate-50/40 transition-colors duration-200"
                >
                  <td className="p-4 text-right font-semibold text-[#191c1d] border-b border-slate-100/60">
                    <span className="ml-2.5 filter drop-shadow-sm">{row.emoji}</span>
                    {row.feature}
                  </td>
                  {packages.map((p) => (
                    <td
                      key={p.key}
                      className={`p-4 text-center border-b border-slate-100/60 ${
                        p.popular ? "bg-[#006b5b]/3" : ""
                      }`}
                    >
                      {row.values[p.key] ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600 shadow-sm border border-green-100">
                          <Check className="w-4 h-4" strokeWidth={3.5} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-400 shadow-sm border border-red-100">
                          <X className="w-4 h-4" strokeWidth={3.5} />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Follow-up Subheading */}
              <tr>
                <td
                  colSpan={6}
                  className="p-4 bg-gradient-to-r from-[#f39678]/5 via-[#006b5b]/10 to-[#f39678]/5 text-center font-extrabold text-[#8e4d32] text-base border-y border-slate-100/80"
                >
                  ✨ تفاصيل وقنوات المتابعة اليومية
                </td>
              </tr>
              {followUp.map((row, idx) => (
                <tr
                  key={row.feature}
                  className="hover:bg-slate-50/40 transition-colors duration-200"
                >
                  <td className="p-4 text-right font-semibold text-[#191c1d] border-b border-slate-100/60">
                    <span className="ml-2.5 filter drop-shadow-sm">{row.emoji}</span>
                    {row.feature}
                  </td>
                  {packages.map((p) => (
                    <td
                      key={p.key}
                      className={`p-4 text-center text-sm font-medium text-[#3e4946] border-b border-slate-100/60 ${
                        p.popular ? "bg-[#006b5b]/3" : ""
                      }`}
                    >
                      {row.values[p.key]}
                    </td>
                  ))}
                </tr>
              ))}

              {/* CTA row */}
              <tr className="bg-slate-50/30">
                <td className="p-6 border-b border-slate-100"></td>
                {packages.map((p) => (
                  <td
                    key={p.key}
                    className={`p-6 text-center border-b border-slate-100 ${
                      p.popular ? "bg-[#006b5b]/3" : ""
                    }`}
                  >
                    <a
                      href="#register"
                      className="inline-block w-full py-3.5 px-4 rounded-2xl font-bold text-white shadow-md text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 text-center"
                      style={{ backgroundColor: p.color }}
                    >
                      اشترك الآن
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── MOBILE VIEW (Tabbed Layout) ── */}
        <div className="lg:hidden w-full space-y-6">
          {/* Segmented Package Selector Tabs */}
          <div className="flex overflow-x-auto gap-2.5 pb-3 px-1 scrollbar-none snap-x snap-mandatory">
            {packages.map((p) => (
              <button
                key={p.key}
                onClick={() => setSelectedMobilePkg(p.key)}
                className={`snap-center flex-shrink-0 flex items-center gap-2 px-5 py-3.5 rounded-2xl border text-sm font-bold transition-all duration-300 cursor-pointer ${
                  selectedMobilePkg === p.key
                    ? "bg-white shadow-md border-transparent text-[#191c1d] scale-105"
                    : "bg-white/60 border-slate-100 text-[#3e4946] hover:bg-white"
                }`}
                style={
                  selectedMobilePkg === p.key
                    ? { borderBottom: `3px solid ${p.color}` }
                    : {}
                }
              >
                <span className="text-lg">{p.emoji}</span>
                <span>{p.name}</span>
                {p.popular && <span className="text-[10px] bg-[#006b5b]/10 text-[#006b5b] px-1.5 py-0.5 rounded-md">⭐</span>}
              </button>
            ))}
          </div>

          {/* Interactive Feature List Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMobilePkg}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100/50 space-y-6"
            >
              {/* Card Header Info */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                    style={{ backgroundColor: currentMobilePkgData.bgSoft }}
                  >
                    {currentMobilePkgData.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#191c1d]">
                      {currentMobilePkgData.name}
                    </h3>
                    {currentMobilePkgData.popular && (
                      <span className="inline-block mt-1 text-[10px] font-bold text-white bg-[#006b5b] px-2 py-0.5 rounded-full shadow-sm">
                        ⭐ الباقة الأكثر شيوعاً
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Specialties Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold text-[#006b5b] bg-[#006b5b]/5 py-2 px-4 rounded-xl">
                  🥗 التخصصات الطبية المشمولة:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pl-1">
                  {specialties.map((spec) => {
                    const isIncluded = spec.values[selectedMobilePkg];
                    return (
                      <div
                        key={spec.feature}
                        className="flex items-center justify-between p-3.5 bg-slate-50/50 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg filter drop-shadow-sm">{spec.emoji}</span>
                          <span className="text-[14px] font-bold text-[#191c1d]">
                            {spec.feature}
                          </span>
                        </div>
                        {isIncluded ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-50 text-green-600 border border-green-100">
                            <Check className="w-3.5 h-3.5" strokeWidth={4} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-400 border border-red-100">
                            <X className="w-3.5 h-3.5" strokeWidth={4} />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Follow-up Details Section */}
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-extrabold text-[#8e4d32] bg-[#f39678]/10 py-2 px-4 rounded-xl">
                  ✨ تفاصيل وقنوات المتابعة:
                </h4>
                <div className="space-y-2.5">
                  {followUp.map((item) => (
                    <div
                      key={item.feature}
                      className="flex items-center justify-between p-4 bg-[#f8f9fa]/50 rounded-2xl border border-slate-100/40 hover:bg-[#f8f9fa] transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg filter drop-shadow-sm">{item.emoji}</span>
                        <span className="text-[14px] font-bold text-[#3e4946]">
                          {item.feature}
                        </span>
                      </div>
                      <span className="text-[14px] font-black text-[#191c1d] bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-100/60">
                        {item.values[selectedMobilePkg]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#register"
                  className="block w-full py-4 rounded-2xl text-center font-black text-white shadow-lg active:scale-95 transition-all text-[15px]"
                  style={{
                    backgroundColor: currentMobilePkgData.color,
                    boxShadow: `0 8px 30px -10px ${currentMobilePkgData.color}`,
                  }}
                >
                  اشترك في باقة {currentMobilePkgData.name} الآن
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom trust badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2.5 bg-white border border-slate-200/80 shadow-sm rounded-full px-5 py-3 text-[#3e4946] text-sm font-bold hover:shadow-md transition-all hover:scale-102"
            >
              <span className="text-xl filter drop-shadow-sm">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
