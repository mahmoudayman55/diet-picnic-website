import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "هل النظام فيه حرمان؟", a: "لا، هدفنا إنك تستمتع بالأكل وتقدر تستمر بدون ضغط." },
  {
    q: "هل المتابعة أونلاين؟",
    a: "أيوه، تقدر تتابع معانا من أي مكان بسهولة، متابعة يومية وأسبوعية وشهرية لنتايج حقيقة وتغيير لعادات صحية تدوم.",
  },
  { q: "لو لغبطت؟", a: "عادي جدًا 🤍 إحنا بنساعدك ترجع تكمل بدون إحساس بالذنب أو الإحباط." },
  { q: "هل الأنظمة مناسبة للحياة اليومية؟", a: "أكيد، الأنظمة معمولة علشان تناسب روتينك الحقيقي." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 px-4 bg-pink-soft/40">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-foreground">
          الأسئلة الشائعة
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-right hover:bg-coral-soft/30 transition-colors"
                >
                  <span className="font-bold text-foreground text-base md:text-lg">{f.q}</span>
                  <ChevronDown
                    className={`flex-shrink-0 text-coral transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={22}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-foreground/75 leading-relaxed animate-[fade-in_0.25s_ease-out]">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
