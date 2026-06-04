import { useState } from 'react';
import { HEALTH_TIPS } from '../../data/healthTips';
import { BmiResult } from '../../types/bmi.types';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface HealthTipsSectionProps {
  lastResult: BmiResult | null;
}

type FilterCategory = 'all' | 'underweight' | 'normal' | 'overweight' | 'obese' | 'general';

export default function HealthTipsSection({ lastResult }: HealthTipsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const getUserRecommendedCategory = (): string | null => {
    if (!lastResult) return null;
    const bmi = parseFloat(lastResult.bmi);
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
  };

  const recommendedCat = getUserRecommendedCategory();

  const filterButtons = [
    { id: 'all', label: 'الجميع' },
    { id: 'underweight', label: 'نحافة' },
    { id: 'normal', label: 'وزن مثالي' },
    { id: 'overweight', label: 'وزن زائد' },
    { id: 'obese', label: 'سمنة' },
    { id: 'general', label: 'نصائح عامة' },
  ] as const;

  const getFilteredTips = () => {
    if (activeCategory === 'all') {
      return [
        ...HEALTH_TIPS.underweight.map((t) => ({ ...t, source: 'underweight', label: 'للنحافة' })),
        ...HEALTH_TIPS.normal.map((t) => ({ ...t, source: 'normal', label: 'للحفاظ على الوزن' })),
        ...HEALTH_TIPS.overweight.map((t) => ({ ...t, source: 'overweight', label: 'للوزن الزائد' })),
        ...HEALTH_TIPS.obese.map((t) => ({ ...t, source: 'obese', label: 'للسمنة والمخاطر' })),
        ...HEALTH_TIPS.general.map((t) => ({ ...t, source: 'general', label: 'إرشاد عام' })),
      ];
    }
    const labelMap: Record<string, string> = {
      underweight: 'للنحافة', normal: 'للحفاظ على الوزن',
      overweight: 'للوزن الزائد', obese: 'للسمنة والمخاطر', general: 'إرشاد عام',
    };
    return (HEALTH_TIPS[activeCategory] || []).map((t) => ({
      ...t, source: activeCategory, label: labelMap[activeCategory] || 'عام',
    }));
  };

  const filteredTips = getFilteredTips();

  const handleShare = async (title: string, desc: string) => {
    const shareText = `💡 نصيحة صحية من دايت بيكنك:\n\n*${title}*\n${desc}\n\nاحسب مؤشر كتلة جسمك واحصل على توجيه مخصص عبر دايت بيكنك: ${window.location.origin}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: window.location.origin,
        });
      } catch (err) {
        // Share cancelled or failed
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        toast.success('تم نسخ النصيحة بنجاح لمشاركتها! 🤍');
      } catch (err) {
        toast.error('عذراً، لم نتمكن من نسخ النصيحة.');
      }
    }
  };

  return (
    <div id="health-tips-section" className="space-y-12">

      {/* Personalized Banner */}
      {lastResult && recommendedCat && (
        <div className="bg-[#006b5b]/5 border border-[#006b5b]/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-right">
            <div className="inline-flex items-center gap-2 bg-[#006b5b]/10 text-[#006b5b] text-xs font-bold px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-[14px]">stars</span>
              نصيحة مخصصة لك يا {lastResult.name}
            </div>
            <h3 className="text-2xl font-bold text-[#006b5b]">
              تقرير مؤشر كتلة جسمك هو {lastResult.bmi} ({lastResult.category})
            </h3>
            <p className="text-[#3e4946]">
              لقد قمنا بتصفية وترتيب بعض النصائح الصحية المفيدة والمخصصة خصيصاً لوضعك الحالي لمساعدتك في الوصول إلى وزنك المثالي البالغ {lastResult.idealWeight} كجم.
            </p>
          </div>
          <button
            onClick={() => setActiveCategory(recommendedCat as FilterCategory)}
            className="shrink-0 bg-[#f39678] hover:bg-[#f39678]/90 text-white font-bold py-3 px-6 rounded-2xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
          >
            عرض نصائحي المخصصة
          </button>
        </div>
      )}

      {/* Main Heading */}
      <div className="text-center space-y-3">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#006b5b]">نصائح وإرشادات Diet Picnic للياقة</h2>
        <p className="text-[#3e4946] max-w-xl mx-auto">
          استكشف مئات الإرشادات والأساليب الصحية المصممة بعناية بواسطة خبرائنا للحفاظ على نشاطك وموازنة حصصك الغذائية اليومية.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2.5 justify-center">
        {filterButtons.map((btn) => {
          const isSelected = activeCategory === btn.id;
          const isRecommended = recommendedCat === btn.id;
          return (
            <button key={btn.id} onClick={() => setActiveCategory(btn.id)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all relative cursor-pointer active:scale-95 ${
                isSelected
                  ? 'bg-[#006b5b] text-white shadow-md'
                  : 'bg-white border border-[#bdc9c4]/50 text-[#3e4946] hover:bg-neutral-50 hover:text-[#006b5b]'
              }`}>
              {btn.label}
              {isRecommended && (
                <span className="absolute -top-1 -left-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f39678] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f39678]" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map((tip, index) => {
          const isPersonal = recommendedCat === tip.source;
          return (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              key={`${tip.title}-${index}`}
              className={`bmi-glass-card p-6 rounded-3xl flex flex-col justify-between gap-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border ${
                isPersonal ? 'border-[#006b5b]/30 ring-2 ring-[#006b5b]/10' : 'border-white/50'
              }`}>
              {isPersonal && (
                <div className="absolute top-0 left-0 bg-[#006b5b] text-white text-[10px] font-bold px-3 py-1 rounded-br-2xl flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">recommend</span>
                  موصى به لك
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-[#edeeef] text-[#3e4946] text-xs font-bold px-3 py-1 rounded-full">{tip.label}</span>
                  <div className="w-10 h-10 rounded-2xl bg-[#006b5b]/10 text-[#006b5b] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">{tip.icon}</span>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <h4 className="font-bold text-lg text-[#006b5b]">{tip.title}</h4>
                  <p className="text-[#3e4946] text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#bdc9c4]/20 flex justify-between items-center">
                <span className="text-xs text-[#6e7a75]">النوع: {tip.category}</span>
                <button
                  onClick={() => handleShare(tip.title, tip.description)}
                  className="text-[#006b5b] hover:text-[#f39678] text-xs font-bold flex items-center gap-1 cursor-pointer active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined text-[16px]">share</span>
                  مشاركة النصيحة
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
