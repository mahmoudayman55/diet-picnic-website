import { motion } from "motion/react";

const steps = [
  {
    number: "١",
    title: "سجل بياناتك",
    description: "املأ نموذج الاشتراك ببياناتك الأساسية، وسنتواصل معك في غضون ٢٤ ساعة لبدء رحلتك.",
    icon: "assignment",
    badgeColor: "bg-[#006b5b]/10 text-[#006b5b]",
    iconColor: "text-[#006b5b]",
    accentBorder: "group-hover:border-[#006b5b]/30",
  },
  {
    number: "٢",
    title: "مكالمة التعارف",
    description: "نجري معك مكالمة هاتفية ودية للتعرف على نمط حياتك، أهدافك، واحتياجاتك بدقة.",
    icon: "phone_in_talk",
    badgeColor: "bg-[#f39678]/10 text-[#8e4d32]",
    iconColor: "text-[#f39678]",
    accentBorder: "group-hover:border-[#f39678]/30",
  },
  {
    number: "٣",
    title: "تصميم خطتك",
    description: "يقوم فريقنا الطبي بتصميم نظامك الغذائي والتدريبي المخصص والمناسب لأسلوب حياتك.",
    icon: "design_services",
    badgeColor: "bg-[#5bbfa9]/10 text-[#006b5b]",
    iconColor: "text-[#5bbfa9]",
    accentBorder: "group-hover:border-[#5bbfa9]/30",
  },
  {
    number: "٤",
    title: "المتابعة والضبط",
    description: "نتابع تقدمك يومياً خطوة بخطوة، مع تعديل خططك بمرونة لضمان استمرارك بدون حرمان.",
    icon: "insights",
    badgeColor: "bg-[#feaa88]/20 text-[#8e4d32]",
    iconColor: "text-[#feaa88]",
    accentBorder: "group-hover:border-[#feaa88]/30",
  },
  {
    number: "٥",
    title: "النتيجة والنجاح",
    description: "تصل إلى الوزن المثالي والصحة التي تطمح إليها، وتحتفل معنا بنمط حياتك الجديد! ✨",
    icon: "emoji_events",
    badgeColor: "bg-[#8e4d32]/10 text-[#8e4d32]",
    iconColor: "text-[#8e4d32]",
    accentBorder: "group-hover:border-[#8e4d32]/30",
  },
];

export function JourneySteps() {
  return (
    <section id="journey" className="py-24 md:py-32 px-4 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#006b5b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#5bbfa9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold text-[#191c1d] mb-4">
            خطوات بسيطة لتبدأ رحلتك 🌿
          </h2>
          <p className="text-[#3e4946] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            مع دايت بيكنك، انتقالك إلى حياة صحية ونشيطة يتم بكل سلاسة عبر خطوات مدروسة ومتابعة مباشرة من فريقنا الطبي.
          </p>
        </div>

        {/* Timeline Desktop version (Horizontal) */}
        <div className="hidden lg:block relative mt-12 pb-10">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#006b5b]/10 via-[#5bbfa9]/20 to-[#006b5b]/10 -translate-y-24 z-0 rounded-full" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group flex flex-col items-center text-center px-4"
              >
                {/* Node & Icon */}
                <div className="relative mb-6">
                  {/* Outer pulsing ring on hover */}
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 shadow-lg ring-1 ring-black/5" />

                  {/* Inner container */}
                  <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 group-hover:border-transparent group-hover:shadow-xl transition-all duration-300">
                    <span className={`material-symbols-outlined text-4.5xl ${step.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                      {step.icon}
                    </span>

                    {/* Step number badge */}
                    <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full ${step.badgeColor} flex items-center justify-center text-sm font-extrabold shadow-sm ring-2 ring-white`}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Step Details */}
                <div className="mt-2 space-y-3">
                  <h3 className="text-lg font-extrabold text-[#191c1d] group-hover:text-[#006b5b] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#3e4946] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile/Tablet version (Vertical) */}
        <div className="lg:hidden relative pr-8 md:pr-16 max-w-2xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute top-4 bottom-4 right-4 md:right-12 w-1 bg-gradient-to-b from-[#006b5b]/20 via-[#5bbfa9]/20 to-[#006b5b]/20 rounded-full" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 text-right group"
              >
                {/* Timeline Node */}
                <div className="absolute right-[-14px] md:right-[-6px] top-1.5 z-10 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <span className={`material-symbols-outlined text-[15px] md:text-[18px] ${step.iconColor}`}>
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Step Content (Cardless & Minimalist) */}
                <div className="w-full pr-8 md:pr-14 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${step.badgeColor}`}>
                      الخطوة {step.number}
                    </span>
                    <h3 className="text-[17px] md:text-[19px] font-extrabold text-[#191c1d] group-hover:text-[#006b5b] transition-colors duration-200">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#3e4946] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
