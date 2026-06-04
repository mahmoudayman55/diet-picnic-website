const services = [
  {
    emoji: "🏅",
    title: "التحديات الجماعية",
    desc: "تجربة تجمع بين المتابعة الفردية والتحدي الجماعي.. مليانة حماس وتشجيع تساعدك تلتزم وتستمتع بالرحلة وسط مجتمع داعم 🤍",
  },
  {
    emoji: "👩‍⚕️",
    title: "المتابعات الفردية",
    desc: "خطة غذائية ومتابعة مخصصة بالكامل حسب هدفك، جسمك، وروتين يومك.",
  },
  {
    emoji: "📞",
    title: "الاستشارات الهاتفية",
    desc: "استشارة مباشرة تساعدك تفهم جسمك أكتر وتاخد خطوات مناسبة لحالتك وهدفك.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-foreground">
          خدمات التغذية في Diet Picnic
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 gradient-brand" />
              <div className="text-5xl mb-5">{s.emoji}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
