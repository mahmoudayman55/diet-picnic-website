const features = [
  { emoji: "🍽️", title: "بدون حرمان", desc: "هتاكل أكل طبيعي يناسب حياتك بدون تعقيد أو حرمان قاسي." },
  { emoji: "👥", title: "متابعة مستمرة", desc: "فريقنا بيتابعك خطوة بخطوة علشان تفضل مستمر ومتحمس." },
  { emoji: "📋", title: "خطط مرنة", desc: "أنظمة تناسب الشغل، الدراسة، الأمهات، والروتين اليومي." },
  { emoji: "💪", title: "دعم وتحفيز", desc: "لأن الرحلة محتاجة حد يدعمك كمان 🤍" },
  { emoji: "🏆", title: "نتائج حقيقية", desc: "هدفنا إنك تشوف فرق حقيقي وتقدر تحافظ عليه." },
  { emoji: "📱", title: "تطبيق Diet Picnic", desc: "تابع من أي مكان بسهولة وراحة تامة." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-24 px-4 bg-pink-soft/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-foreground">
          ليه تختار Diet Picnic؟
        </h2>
        <p className="mt-6 text-center text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
          إحنا مش بنقدملك دايت مؤقت… إحنا بنساعدك تبني أسلوب حياة تقدر تكمل بيه وتستمتع بيه.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4 ${
                  i % 2 === 0 ? "bg-coral-soft" : "bg-mint-soft"
                }`}
              >
                {f.emoji}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
