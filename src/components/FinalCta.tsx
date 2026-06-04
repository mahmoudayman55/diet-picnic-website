export function FinalCta() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl gradient-brand px-6 py-14 md:py-20 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_80%,white,transparent_40%)]" />
        <div className="relative">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            ابدأ رحلتك النهاردة…
            <br />
            والنسخة الأفضل منك مستنياك 🤍
          </h2>
          <a
            href="#register"
            className="inline-block mt-8 bg-white text-coral font-extrabold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
          >
            ابدأ الآن
          </a>
        </div>
      </div>
    </section>
  );
}
