import { useState } from "react";
import { toast } from "sonner";

const packages = ["تحدي الرشاقة", "The Balance", "Med-plus", "The Elite", "الأبطال"];
const WA_NUMBER = "201146474817";

export function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    gender: "أنثى",
    age: "",
    height: "",
    weight: "",
    pkg: packages[0],
    phone: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("من فضلك املأ الاسم ورقم الموبايل");
      return;
    }
    const msg =
      `السلام عليكم 🌟 عايز أشترك في دايت بيكنك\n\n` +
      `👤 الاسم: ${form.name}\n` +
      `⚧ النوع: ${form.gender}\n` +
      `🎂 السن: ${form.age || "-"}\n` +
      `📏 الطول: ${form.height || "-"} سم\n` +
      `⚖️ الوزن: ${form.weight || "-"} كجم\n` +
      `📦 الباقة: ${form.pkg}\n` +
      `📱 الموبايل: ${form.phone}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("جاري فتح واتساب لإرسال بياناتك 🤍");
  };

  const input =
    "w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-all";

  return (
    <section id="register" className="py-20 md:py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-foreground">
          جاهز تبدأ رحلتك؟ ✨
        </h2>
        <p className="mt-6 text-center text-foreground/70 max-w-xl mx-auto">
          املأ بياناتك وسيتم التواصل معاك لمساعدتك في اختيار الباقة المناسبة والبدء في رحلتك 🤍
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-border/50 space-y-5"
        >
          <div>
            <label className="block font-semibold mb-2">الاسم</label>
            <input
              className={input}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="اكتب اسمك الكامل"
              maxLength={100}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">النوع</label>
            <div className="flex gap-3">
              {["أنثى", "ذكر"].map((g) => (
                <label
                  key={g}
                  className={`flex-1 flex items-center justify-center gap-2 cursor-pointer rounded-xl border-2 py-3 font-medium transition-all ${
                    form.gender === g
                      ? "border-coral bg-coral-soft text-coral"
                      : "border-border bg-background"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    className="hidden"
                    checked={form.gender === g}
                    onChange={() => setForm({ ...form, gender: g })}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold mb-2">السن</label>
              <input
                type="number"
                min={1}
                max={120}
                className={input}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">الطول (سم)</label>
              <input
                type="number"
                min={50}
                max={250}
                className={input}
                value={form.height}
                onChange={(e) => setForm({ ...form, height: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">الوزن (كجم)</label>
              <input
                type="number"
                min={20}
                max={300}
                className={input}
                value={form.weight}
                onChange={(e) => setForm({ ...form, weight: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">الباقة المهتم بيها</label>
            <select
              className={input}
              value={form.pkg}
              onChange={(e) => setForm({ ...form, pkg: e.target.value })}
            >
              {packages.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">رقم الموبايل</label>
            <input
              type="tel"
              className={input}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="01xxxxxxxxx"
              maxLength={20}
            />
          </div>

          <button
            type="submit"
            className="w-full gradient-brand text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            ابدأ الآن
          </button>
        </form>
      </div>
    </section>
  );
}
