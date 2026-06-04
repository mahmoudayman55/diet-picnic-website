import { Instagram, Facebook, Music2 } from "lucide-react";
import logo from "@/assets/diet-picnic-logo.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-border pt-14 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* App download */}
        <div className="rounded-3xl bg-gradient-to-br from-[#006b5b]/5 to-[#5bbfa9]/5 p-6 md:p-10 mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
            حمّل تطبيق Diet Picnic 📱
          </h3>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto">
            تابع رحلتك في أي وقت ومن أي مكان — متاح الآن على جوجل بلاي
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.MahmoudAyman.dietpicnic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تحميل من Google Play"
              className="hover:scale-105 transition-transform"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 md:h-16 w-auto"
              />
            </a>

            <div className="relative">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-14 md:h-16 w-auto opacity-60 grayscale"
              />
              <span className="absolute -top-2 -right-2 bg-coral text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
                قريباً
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-right">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Diet Picnic" className="h-14 w-auto" />
            <p className="text-foreground/70 max-w-xs">
              متابعة غذائية أونلاين بأسلوب يناسب حياتك 🤍
            </p>
          </div>

          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-full bg-coral-soft text-coral flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full bg-mint-soft text-mint flex items-center justify-center hover:bg-mint hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="TikTok" className="w-11 h-11 rounded-full bg-foreground/5 text-foreground flex items-center justify-center hover:bg-foreground hover:text-white transition-colors">
              <Music2 size={20} />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Diet Picnic. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
