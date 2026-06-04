import vodafoneCashIcon from "@/assets/vodafone-cash.png";
import instapayIcon from "@/assets/instapay.png";

export function Payment() {
  return (
    <section className="py-20 md:py-24 px-4 bg-[#fef0eb]/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-extrabold text-center text-[#191c1d]">
          طرق الدفع المتاحة 💳
        </h2>
        <p className="mt-4 text-center text-[#3e4946] max-w-xl mx-auto text-base">
          نوفر أكثر من وسيلة دفع سهلة وآمنة لتأكيد اشتراكك وبدء رحلتك الصحية بكل راحة.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Vodafone Cash */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              <img
                src={vodafoneCashIcon}
                alt="Vodafone Cash Logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <div className="text-xs text-[#6e7a75] font-bold">محفظة إلكترونية</div>
              <div className="text-xl font-black text-[#191c1d]">Vodafone Cash</div>
            </div>
          </div>

          {/* InstaPay */}
          <a
            href="https://ipn.eg/S/ayman_elezzawy/instapay/82qfDJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 transition-all duration-300 cursor-pointer block"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              <img
                src={instapayIcon}
                alt="InstaPay Logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <div className="text-xs text-[#6e7a75] font-bold">تحويل فوري (اضغط للدفع)</div>
              <div className="text-xl font-black text-[#191c1d]">InstaPay</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
