import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-20 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text column (title & description) */}
        <div className="flex-1 text-center lg:text-right space-y-6">
          <h2 className="section-heading lg:section-heading-right text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            رحلتك معانا هتكون عاملة إزاي؟
          </h2>
          <p className="text-foreground/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            متابعة مستمرة، نظام يناسبك، ودعم يساعدك تكمل وتحقق نتيجة حقيقية خطوة بخطوة 🤍
          </p>
        </div>

        {/* Video column */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#006b5b]/5 to-[#5bbfa9]/5 aspect-square w-full max-w-md lg:max-w-lg group cursor-pointer"
            style={{ aspectRatio: "1 / 1" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/vdYWHv3XpiI?si=Q8tZ6xwgdDjlgftu"
              title="Diet Picnic"
              style={{ border: 0, aspectRatio: "1 / 1" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-coral/90 rounded-full p-6 shadow-xl">
                <Play className="text-white" size={32} fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
