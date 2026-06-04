import { motion } from 'motion/react';

export default function AboutBmiSection() {
  const categories = [
    { title: 'نحافة (Underweight)', range: 'أقل من 18.5', status: 'تحتاج لزيادة السعرات', color: 'bg-blue-500', text: 'text-blue-500' },
    { title: 'وزن مثالي (Healthy)', range: '18.5 - 24.9', status: 'حافظ على هذا النمط الممتاز', color: 'bg-green-500', text: 'text-green-500' },
    { title: 'وزن زائد (Overweight)', range: '25 - 29.9', status: 'تحتاج لمراقبة الوجبات وزيادة الحركة', color: 'bg-yellow-500', text: 'text-yellow-600' },
    { title: 'سمنة درجة أولى (Obese)', range: '30 - 34.9', status: 'انتبه للتغذية الموجهة وتدرب بذكاء', color: 'bg-orange-500', text: 'text-orange-500' },
    { title: 'سمنة مفرطة (Severely Obese)', range: '35 أو أكثر', status: 'يُنصح باستشارة طبيب أو خبير تغذية', color: 'bg-red-500', text: 'text-red-500' },
  ];

  return (
    <div id="about-section" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#006b5b]">عن حاسبة Diet Picnic الذكية</h2>
        <p className="text-[#3e4946] max-w-2xl mx-auto leading-relaxed">
          منصة دايت بيكنك تم تصميمها وتطويرها لتزويد المستخدمين بطرق ذكية وموثوقة لتقييم بنيتهم الجسدية وحساب مؤشر كتلة جسمهم بشكل فوري، متكاملة مع نصائح غذائية مخصصة لتمكين نمط حياة صحي ومستدام.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* What is BMI? */}
        <div className="bmi-glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-right">
            <div className="w-12 h-12 rounded-2xl bg-[#006b5b]/10 text-[#006b5b] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">info</span>
            </div>
            <h3 className="text-2xl font-bold text-[#006b5b]">ما هو مؤشر كتلة الجسم (BMI)؟</h3>
            <p className="text-[#3e4946] leading-relaxed">
              هو صيغة رياضية معترف بها عالمياً وجدول مخصص للتحقق من العلاقة بين طول ووزن أي شخص بالغ. يُصنف مؤشر كتلة الجسم التكوين البشري إلى فئات متباينة لتحديد ما إذا كان الشخص يقع في نطاق الوزن الصحي الطبيعي، أو يعاني من النحافة أو زيادة الوزن بدرجاتها المختلفة.
            </p>
            <div className="bg-[#006b5b]/5 p-5 border border-[#006b5b]/15 rounded-2xl space-y-2">
              <p className="font-bold text-[#006b5b]">المعادلة الرياضية الأساسية:</p>
              <p className="font-mono text-sm tracking-wide text-[#3e4946] text-left shrink-0" dir="ltr">
                BMI = Weight (kg) / (Height (m) × Height (m))
              </p>
              <p className="text-xs text-[#6e7a75]">
                مثال: وزن 70 كجم وطول 1.70 متر يعطي: 70 / (1.70 × 1.70) = 24.2 (وزن مثالي)
              </p>
            </div>
          </div>
        </div>

        {/* Ideal Weight */}
        <div className="bmi-glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-right">
            <div className="w-12 h-12 rounded-2xl bg-[#feaa88]/20 text-[#8e4d32] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">sports_martial_arts</span>
            </div>
            <h3 className="text-2xl font-bold text-[#8e4d32]">كيف نحسب الوزن المثالي؟</h3>
            <p className="text-[#3e4946] leading-relaxed">
              لحساب الوزن المثالي الموصى به، نعتمد على استهداف نقطة التوازن الصحية لمؤشر كتلة الجسم البالغة <b>21.7 كحد وسطي</b>، مما يمنح الجسم أفضل مرونة حركية ووظائف تمثيل غذائي ممتازة.
            </p>
            <div className="bg-[#feaa88]/10 p-5 border border-[#feaa88]/30 rounded-2xl space-y-2">
              <p className="font-bold text-[#8e4d32]">المعادلة الرياضية للوزن المثالي:</p>
              <p className="font-mono text-sm tracking-wide text-[#3e4946] text-left shrink-0" dir="ltr">
                Ideal Weight (kg) = 21.7 × (Height (m) × Height (m))
              </p>
              <p className="text-xs text-[#6e7a75]">
                تحافظ هذه المعادلة على توفير كتلة عضلية ودهنية مستهدفة ممتازة ومثبتة علمياً لمتوسط الأعمار.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHO Classification Table */}
      <div className="space-y-6">
        <h3 className="text-[22px] font-bold text-[#006b5b] text-center">جدول تصنيفات منظمة الصحة العالمية لمؤشر BMI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white p-6 rounded-3xl border border-[#bdc9c4]/30 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-center">
                <span className={`text-xs font-bold ${cat.text}`}>النطاق: {cat.range}</span>
                <span className={`w-3.5 h-3.5 rounded-full ${cat.color}`} />
              </div>
              <div className="space-y-2 text-right">
                <h4 className="font-bold text-[16px] text-[#006b5b]">{cat.title}</h4>
                <p className="text-sm text-[#3e4946]">{cat.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
