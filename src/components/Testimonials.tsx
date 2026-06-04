// NOTE: dummy WhatsApp screenshots — replace `image` URLs with real ones later.
const reviews = [
  { name: "منى أحمد", image: "https://placehold.co/600x900/25D366/ffffff?text=WhatsApp+Review+1" },
  { name: "سارة خالد", image: "https://placehold.co/600x900/128C7E/ffffff?text=WhatsApp+Review+2" },
  { name: "أحمد محمود", image: "https://placehold.co/600x900/25D366/ffffff?text=WhatsApp+Review+3" },
  { name: "ندى سامي", image: "https://placehold.co/600x900/128C7E/ffffff?text=WhatsApp+Review+4" },
  { name: "كريم علي", image: "https://placehold.co/600x900/25D366/ffffff?text=WhatsApp+Review+5" },
  { name: "هبة محمد", image: "https://placehold.co/600x900/128C7E/ffffff?text=WhatsApp+Review+6" },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-24 px-4 bg-pink-soft/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-foreground">
          آراء عملائنا على واتساب 💚
        </h2>
        <p className="mt-6 text-center text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
          صور حقيقية من رسائل عملائنا بعد ما شافوا النتيجة 🤍
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border/50"
            >
              <img
                src={r.image}
                alt={`رأي العميل ${r.name}`}
                loading="lazy"
                className="w-full h-auto block"
              />
              <div className="p-3 text-center font-bold text-foreground text-sm">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
