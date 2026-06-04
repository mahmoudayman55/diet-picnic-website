import { useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw, Info } from "lucide-react";
import vodafoneCashIcon from "@/assets/vodafone-cash.png";
import instapayIcon from "@/assets/instapay.png";

type Pkg = {
  key: string;
  name: string;
  emoji: string;
  tagline: string;
  suitableFor: string[];
  details: string[];
  offers: { label: string; oldPrice: string; price: string; save: string }[];
  gradient: string;
  accent: string;
};

const packages: Pkg[] = [
  {
    key: "agility",
    name: "تحدي الرشاقة",
    emoji: "🏃‍♀️",
    tagline: "تحدي جماعي يخليك تخس وتكتسب عادات صحية في وقت قصير 💪",
    suitableFor: [
      "اللي عايز يخس بسرعة وبأمان",
      "اللي بيحب روح التحدي والجروبات",
      "بداية رحلة صحية بدون تعقيد",
      "اكتساب عادات صحية تدوم",
      "طريقك للوصول لوزن مثالي",
    ],
    details: [
      "أنظمة دايت متجددة كل أسبوعين",
      "متابعة يومية مع أخصائي التغذية",
      "جروب التحدي للدعم والتحفيز",
      "نظام تمارين شهري",
    ],
    offers: [
      { label: "عرض الشهر", oldPrice: "750", price: "400", save: "46%" },
      { label: "عرض 3 شهور", oldPrice: "2250", price: "1125", save: "50%" },
    ],
    gradient: "linear-gradient(160deg, #F4876A 0%, #FF6B9D 60%, #C44569 100%)",
    accent: "#F4876A",
  },
  {
    key: "balance",
    name: "The Balance",
    emoji: "🧘",
    tagline: "الباقة الأكثر شيوعاً، حياة متوازنة وصحية بأسلوب ممتع ✨",
    suitableFor: [
      "اللي عايز نمط حياة صحي متكامل",
      "تغذية مناسبة لكل المراحل",
      "إنقاص أو تثبيت الوزن",
      "متابعة منتظمة وجدية",
      "نتائج تدوم على المدى الطويل",
    ],
    details: [
      "كل التخصصات: سمنة، نحافة، أطفال، حوامل، مرضعات",
      "متابعة يومية مع أخصائي التغذية",
      "تغيير نظام الدايت كل أسبوعين",
      "مكالمة شهرية مع الدكتور",
      "جروب خاص لمشتركي الباقة",
    ],
    offers: [
      { label: "عرض الشهر", oldPrice: "950", price: "550", save: "42%" },
      { label: "عرض 3 شهور", oldPrice: "2850", price: "1500", save: "47%" },
    ],
    gradient: "linear-gradient(160deg, #5DD9A4 0%, #4ECDC4 60%, #2E86AB 100%)",
    accent: "#5DD9A4",
  },
  {
    key: "medplus",
    name: "Med-plus",
    emoji: "👩‍⚕️",
    tagline: "تغذية علاجية تحت إشراف دكاترة متخصصين 🏥",
    suitableFor: [
      "أصحاب الحالات المرضية",
      "السكر، الضغط، القولون، الكلى",
      "ما بعد العمليات والتعافي",
      "متابعة طبية دقيقة",
      "تغذية علاجية مخصصة",
    ],
    details: [
      "كل تخصصات Balance + التغذية العلاجية",
      "متابعة يومية مع الدكاترة وأخصائي التغذية",
      "مكالمة كل أسبوعين مع الدكتور",
      "تعديل النظام حسب الحالة الصحية",
      "جروب خاص للمتابعة",
    ],
    offers: [
      { label: "عرض الشهر", oldPrice: "1400", price: "850", save: "39%" },
      { label: "عرض 3 شهور", oldPrice: "4200", price: "2350", save: "44%" },
    ],
    gradient: "linear-gradient(160deg, #F06292 0%, #E91E63 60%, #AD1457 100%)",
    accent: "#F06292",
  },
  {
    key: "elite",
    name: "The Elite",
    emoji: "👑",
    tagline: "الباقة الأرقى لمتابعة شخصية مكثفة مع الدكاترة 👑",
    suitableFor: [
      "اللي عايز أعلى مستوى من الخدمة",
      "متابعة شخصية مكثفة",
      "تعديل أسبوعي للنظام",
      "أولوية في الرد والمتابعة",
      "نتائج سريعة ومضمونة",
    ],
    details: [
      "كل تخصصات Med-plus",
      "متابعة يومية مع الدكاترة شخصياً",
      "تغيير نظام الدايت أسبوعياً",
      "مكالمة أسبوعية مع الدكتور",
      "تعديل التمارين كل أسبوعين",
    ],
    offers: [
      { label: "عرض الشهر", oldPrice: "2200", price: "1400", save: "36%" },
      { label: "عرض 3 شهور", oldPrice: "6600", price: "3850", save: "42%" },
    ],
    gradient: "linear-gradient(160deg, #C9A84C 0%, #D4AF37 60%, #8B6914 100%)",
    accent: "#C9A84C",
  },
  {
    key: "champions",
    name: "الأبطال",
    emoji: "🏆",
    tagline: "باقة الرياضيين والأبطال لتحقيق أفضل أداء 🏆",
    suitableFor: [
      "الرياضيين ولاعبي كمال الأجسام",
      "تضخيم العضلات أو التنشيف",
      "تحسين الأداء الرياضي",
      "تغذية متوازنة مع التمارين",
      "تعديل التمارين والدايت بانتظام",
    ],
    details: [
      "تخصص تغذية الرياضيين",
      "متابعة يومية مع الدكاترة وأخصائي التغذية",
      "تعديل التمارين كل أسبوعين",
      "تغيير نظام الدايت كل أسبوعين",
      "مكالمة كل أسبوعين مع الدكتور",
    ],
    offers: [
      { label: "عرض الشهر", oldPrice: "1600", price: "950", save: "40%" },
      { label: "عرض 3 شهور", oldPrice: "4800", price: "2650", save: "45%" },
    ],
    gradient: "linear-gradient(160deg, #9C27B0 0%, #7B1FA2 60%, #4A148C 100%)",
    accent: "#9C27B0",
  },
];

const WA_NUMBER = "201146474817";

function buildWa(pkg: Pkg, offer?: { label: string; price: string }) {
  const text = offer
    ? `السلام عليكم 🌟\nمهتم بـ *${pkg.name}* ${pkg.emoji}\nالعرض: ${offer.label} - ${offer.price} ج.م`
    : `السلام عليكم 🌟\nمهتم بـ *${pkg.name}* ${pkg.emoji}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function PackagesSlider() {
  const [active, setActive] = useState(1);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggle = (k: string) => setFlipped((p) => ({ ...p, [k]: !p[k] }));
  const go = (dir: number) =>
    setActive((a) => (a + dir + packages.length) % packages.length);

  return (
    <section id="packages-slider" dir="rtl" className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-foreground">
          اختر باقتك المناسبة
        </h2>
        <p className="mt-6 text-center text-foreground/70 max-w-xl mx-auto">
          اسحب بين الباقات واضغط على البطاقة لرؤية التفاصيل الكاملة 👆
        </p>

        <div className="mt-12 relative">
          {/* Nav arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="السابق"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="text-foreground" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="التالي"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="text-foreground" />
          </button>

          {/* Slider track */}
          <div className="overflow-hidden md:px-16">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${active * 100}%)` }}
            >
              {packages.map((p) => {
                const isFlipped = !!flipped[p.key];
                return (
                  <div key={p.key} className="min-w-full px-2 md:px-6">
                    <div className="max-w-md mx-auto">
                      {/* Flip card */}
                      <div
                        className="relative w-full"
                        style={{ perspective: "1500px", minHeight: "600px" }}
                      >
                        <div
                          className="relative w-full h-full transition-transform duration-700"
                          style={{
                            transformStyle: "preserve-3d",
                            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                            minHeight: "600px",
                          }}
                        >
                          {/* FRONT */}
                          <div
                            className="absolute inset-0 rounded-3xl shadow-2xl p-6 md:p-8 text-white overflow-hidden"
                            style={{
                              background: p.gradient,
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                            }}
                          >
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                            <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-white/10" />

                            <div className="relative">
                              <div className="bg-white/15 backdrop-blur-sm rounded-2xl py-5 px-4 text-center border border-white/20">
                                <h3 className="text-2xl md:text-3xl font-extrabold">
                                  {p.name} {p.emoji}
                                </h3>
                                <div className="text-3xl mt-2">🎉</div>
                              </div>

                              <div className="mt-4 bg-white/15 backdrop-blur-sm rounded-2xl py-4 px-5 text-center border border-white/20">
                                <p className="leading-relaxed text-sm md:text-base">{p.tagline}</p>
                              </div>

                              <div className="mt-4 bg-white/15 backdrop-blur-sm rounded-2xl py-4 px-5 border border-white/20">
                                <div className="font-bold text-lg mb-3">🎯 مناسبة لمين؟</div>
                                <ul className="space-y-2 text-sm md:text-[15px]">
                                  {p.suitableFor.map((s) => (
                                    <li key={s} className="flex items-start gap-2">
                                      <span className="text-green-300 mt-0.5">✅</span>
                                      <span>{s}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <button
                                onClick={() => toggle(p.key)}
                                className="mt-4 w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl py-3.5 px-5 font-bold border border-white/30 flex items-center justify-center gap-2 transition-all"
                              >
                                التفاصيل الكاملة <RefreshCw size={18} />
                              </button>
                            </div>
                          </div>

                          {/* BACK */}
                          <div
                            className="absolute inset-0 rounded-3xl shadow-2xl p-6 md:p-8 bg-white overflow-hidden"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                              border: `2px solid ${p.accent}30`,
                            }}
                          >
                            <div
                              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                              style={{ background: p.accent }}
                            />

                            <div className="relative flex flex-col h-full" style={{ minHeight: "510px" }}>
                              <div className="flex items-center justify-center gap-2 mb-4">
                                <Info size={20} style={{ color: p.accent }} />
                                <h3 className="text-xl md:text-2xl font-extrabold" style={{ color: p.accent }}>
                                  تفاصيل الباقة
                                </h3>
                              </div>
                              <div
                                className="h-0.5 w-16 mx-auto mb-5 rounded-full opacity-30"
                                style={{ background: p.accent }}
                              />

                              <p className="text-foreground/80 text-center leading-relaxed mb-5">
                                {p.tagline}
                              </p>

                              <div className="mb-4">
                                <div className="font-bold text-foreground mb-3">✨ داخل الباقة:</div>
                                <ul className="space-y-2.5">
                                  {p.details.map((d) => (
                                    <li
                                      key={d}
                                      className="flex items-start gap-2 text-foreground/80 text-sm md:text-[15px]"
                                    >
                                      <span style={{ color: p.accent }} className="mt-0.5">●</span>
                                      <span>{d}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Offers */}
                              <div className="mt-auto grid grid-cols-2 gap-2 mb-3">
                                {p.offers.map((o) => (
                                  <a
                                    key={o.label}
                                    href={buildWa(p, o)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-2xl p-3 text-white text-center hover:scale-[1.02] transition-transform relative"
                                    style={{ background: "#2E5C8A" }}
                                  >
                                    <span className="absolute -top-2 right-1/2 translate-x-1/2 bg-white text-[#2E5C8A] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow">
                                      وفر {o.save}
                                    </span>
                                    <div className="text-xs mt-1.5 opacity-90">{o.label}</div>
                                    <div className="text-xs line-through opacity-70">{o.oldPrice} EGP</div>
                                    <div className="font-extrabold">{o.price} EGP</div>
                                  </a>
                                ))}
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <a
                                  href={buildWa(p)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="rounded-xl py-3 px-4 text-white font-bold text-center hover:scale-105 transition-transform"
                                  style={{
                                    background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)`,
                                  }}
                                >
                                  اشتراك
                                </a>
                                <button
                                  onClick={() => toggle(p.key)}
                                  className="rounded-xl py-3 px-4 font-bold border-2 hover:bg-foreground/5 transition-colors"
                                  style={{ borderColor: p.accent, color: p.accent }}
                                >
                                  رجوع
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile nav row */}
          <div className="md:hidden flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center"
              aria-label="السابق"
            >
              <ChevronRight />
            </button>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center"
              aria-label="التالي"
            >
              <ChevronLeft />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {packages.map((p, i) => (
              <button
                key={p.key}
                onClick={() => setActive(i)}
                aria-label={p.name}
                className="h-2.5 rounded-full transition-all"
                style={{
                  width: i === active ? 32 : 10,
                  background: i === active ? p.accent : "#cbd5e1",
                }}
              />
            ))}
          </div>
        </div>

        {/* Subscription steps - Cardless & Premium */}
        <div className="mt-20 max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#006b5b]/10 text-[#006b5b] font-black px-4 py-1.5 rounded-full text-xs mb-3 shadow-sm">
              💳 خطوات الدفع والاشتراك
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#191c1d]">
              خطوات الاشتراك في الباقات
            </h3>
          </div>

          <div className="space-y-8">
            <div>
              <div className="text-center font-bold text-[#3e4946] mb-5">يمكنك التحويل عبر الوسائل المعتمدة التالية:</div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://ipn.eg/S/ayman_elezzawy/instapay/82qfDJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-100 hover:border-[#006b5b]/30 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
                    <img src={instapayIcon} alt="InstaPay Logo" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="font-extrabold text-[14px] text-[#191c1d] text-center">InstaPay (اضغط للدفع)</div>
                </a>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
                    <img src={vodafoneCashIcon} alt="Vodafone Cash Logo" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="font-extrabold text-[14px] text-[#191c1d] text-center">فودافون كاش</div>
                </div>
              </div>
            </div>

            <div className="bg-white/40 border border-slate-100/60 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="font-extrabold text-[#191c1d] mb-4 text-base">اتبع الخطوات البسيطة التالية لتفعيل اشتراكك:</div>
              <ol className="space-y-5">
                {[
                  "حول قيمة الاشتراك المذكورة للباقة المحددة عبر إحدى الوسائل المتاحة بالأعلى.",
                  <>
                    أرسل لقطة شاشة عملية التحويل (سكرين شوت) إلى رقم واتساب الموحد:{" "}
                    <span className="font-black text-[#006b5b] dir-ltr inline-block hover:underline">+{WA_NUMBER}</span>{" "}
                    مع ذكر اسم الباقة المختارة.
                  </>,
                  "سيقوم فريق المتابعة ببدء إعداد برنامجك المخصص وربطك بالدكاترة فوراً! 🎉",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3.5 items-start">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full text-white font-extrabold flex items-center justify-center text-sm shadow-sm"
                      style={{ background: "#006b5b" }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[#3e4946] text-sm md:text-base leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("السلام عليكم، عايز أشترك في دايت بيكنك 🌟")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-white font-extrabold py-4 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 mt-4"
                style={{ background: "linear-gradient(135deg, #006b5b, #5bbfa9)" }}
              >
                💬 تواصل معنا لتأكيد التحويل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
