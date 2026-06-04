import { Link } from '@tanstack/react-router';
import { Calculator, TrendingDown, Scale, ArrowLeft } from 'lucide-react';

const features = [
  {
    icon: <Calculator size={22} />,
    title: 'حسابات دقيقة',
    desc: 'قياس BMI مع مقياس ملون وتقرير قابل للحفظ',
  },
  {
    icon: <Scale size={22} />,
    title: 'الوزن المثالي',
    desc: 'نحسب لك الوزن المثالي المقترح بناءً على طولك',
  },
  {
    icon: <TrendingDown size={22} />,
    title: 'نصائح مخصصة',
    desc: 'توصيات غذائية وصحية مصممة لوضعك تحديداً',
  },
];

export function BmiCta() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-[#f0f9f7] via-white to-[#f0f9f7] overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-mint/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-mint/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-[#bdc9c4]/40 text-[#006b5b] font-semibold px-5 py-2 rounded-full text-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#006b5b] animate-pulse inline-block" />
            جديد — حاسبة BMI الذكية
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="text-center md:text-right space-y-6">
            <h2 className="section-heading text-3xl md:text-4xl font-extrabold text-foreground">
              احسب مؤشر كتلة جسمك
              <span className="block text-[#006b5b]">وابدأ رحلتك الصحية</span>
            </h2>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              حاسبتنا الذكية تحسب لك مؤشر كتلة جسمك فوراً، تعرض تقرير صحي مفصّل، وتقترح لك نصائح غذائية مخصصة لحالتك.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/bmi"
                className="inline-flex items-center justify-center gap-2 bg-[#006b5b] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all text-base">
                جرّب الحاسبة الآن
                <ArrowLeft size={18} />
              </Link>
              <Link to="/bmi"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#006b5b] border border-[#006b5b]/30 font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all text-base">
                تعرّف على مؤشر BMI
              </Link>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-4">
            {features.map(({ icon, title, desc }) => (
              <div key={title}
                className="flex items-start gap-4 bg-white/80 backdrop-blur border border-[#bdc9c4]/30 p-5 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#006b5b]/10 text-[#006b5b] flex items-center justify-center shrink-0 mt-0.5">
                  {icon}
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-foreground text-base mb-1">{title}</h4>
                  <p className="text-foreground/65 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
