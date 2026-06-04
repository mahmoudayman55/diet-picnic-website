import mark from "@/assets/diet-picnic-mark.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative gradient-hero pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-right fade-in-up">
          <span className="inline-block bg-white/70 backdrop-blur text-coral font-semibold px-4 py-1.5 rounded-full text-sm mb-5 shadow-sm">
            متابعة غذائية أونلاين
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground" style={{ fontFamily: "Tajawal, sans-serif" }}>
            رحلة تغيير حقيقية…
            <br />
            بأسلوب يناسب حياتك <span className="inline-block">🤍</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl mx-auto md:mx-0">
            في Diet Picnic بنقدّم متابعة غذائية أونلاين بأسلوب عملي ومرن يساعدك تخس،
            تحس بصحة أفضل، وتستمر من غير حرمان.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#register"
              className="bg-coral text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
            >
              ابدأ رحلتك الآن
            </a>
            <a
              href="#packages"
              className="bg-white text-foreground font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg border border-border transition-all text-lg"
            >
              شوف الباقات
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-mint/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl" />
          <img
            src={mark}
            alt="Diet Picnic"
            className="relative w-64 md:w-96 drop-shadow-2xl animate-[fade-in_1s_ease-out] hover:scale-105 transition-transform duration-500"
            style={{ animation: "fade-in 1s ease-out, float 6s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
}
