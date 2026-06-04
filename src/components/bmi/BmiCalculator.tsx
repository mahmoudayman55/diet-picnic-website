import React, { useState, useRef, useEffect } from 'react';
import { BmiResult, Gender } from '../../types/bmi.types';
import { motion, AnimatePresence } from 'motion/react';

interface BmiCalculatorProps {
  onCalculation: (result: BmiResult) => void;
  lastResult: BmiResult | null;
}

export default function BmiCalculator({ onCalculation, lastResult }: BmiCalculatorProps) {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState<Gender>('female');
  const [activeResult, setActiveResult] = useState<BmiResult | null>(lastResult);
  const [isCalculated, setIsCalculated] = useState(lastResult !== null);
  const [errorMsg, setErrorMsg] = useState('');

  const resultCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastResult) {
      setActiveResult(lastResult);
      setIsCalculated(true);
      setName(lastResult.name);
      setWeight(lastResult.weight.toString());
      setHeight(lastResult.height.toString());
      setGender(lastResult.gender);
    }
  }, [lastResult]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (!name.trim()) { setErrorMsg('يرجى إدخال الاسم الكامل للمتابعة.'); return; }
    if (!weight || parsedWeight <= 0 || parsedWeight > 500) { setErrorMsg('يرجى إدخال وزن صحيح بالكيلوجرام (بين 1 و 500).'); return; }
    if (!height || parsedHeight <= 0 || parsedHeight > 300) { setErrorMsg('يرجى إدخال طول صحيح بالسنتيمتر (بين 1 و 300).'); return; }

    const heightMeters = parsedHeight / 100;
    const bmiNumber = parsedWeight / (heightMeters * heightMeters);
    const bmiString = bmiNumber.toFixed(1);
    const idealWeightNumber = 21.7 * (heightMeters * heightMeters);
    const idealWeightString = idealWeightNumber.toFixed(1);

    let category = '';
    let percentage = 0;

    if (bmiNumber < 18.5) { category = 'نحافة'; percentage = Math.max(5, (bmiNumber / 18.5) * 20); }
    else if (bmiNumber < 25) { category = 'وزن مثالي'; percentage = 20 + ((bmiNumber - 18.5) / 6.5) * 20; }
    else if (bmiNumber < 30) { category = 'وزن زائد'; percentage = 40 + ((bmiNumber - 25) / 5) * 20; }
    else if (bmiNumber < 35) { category = 'سمنة درجة أولى'; percentage = 60 + ((bmiNumber - 30) / 5) * 20; }
    else if (bmiNumber < 40) { category = 'سمنة درجة ثانية'; percentage = 80 + ((bmiNumber - 35) / 5) * 10; }
    else { category = 'سمنة درجة ثالثة'; percentage = Math.min(98, 90 + ((bmiNumber - 40) / 10) * 8); }

    const todayString = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });

    const resultObject: BmiResult = {
      name: name.trim(), weight: parsedWeight, height: parsedHeight,
      gender, bmi: bmiString, idealWeight: idealWeightString, category, percentage, date: todayString,
    };

    setActiveResult(resultObject);
    setIsCalculated(true);
    onCalculation(resultObject);

    setTimeout(() => {
      if (window.innerWidth < 1024 && resultCardRef.current) {
        resultCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const exportAsImage = () => {
    if (!activeResult) return;
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    logoImg.src = 'https://storage.googleapis.com/gpt-engineer-file-uploads/unzeHmPxJHf90KMzaEXxyY7lwIP2/social-images/social-1779669605516-logo.webp';

    const drawFallbackLogo = (ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = '#006b5b'; ctx.beginPath(); ctx.arc(105, 105, 12, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = '#f39678'; ctx.beginPath(); ctx.arc(125, 105, 12, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = '#ffffff'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('D', 105, 108); ctx.fillText('P', 125, 108);
    };

    const drawCanvasContent = (ctx: CanvasRenderingContext2D, img: HTMLImageElement | null) => {
      const bgGradient = ctx.createLinearGradient(0, 0, 0, 700);
      bgGradient.addColorStop(0, '#f0f4f3'); bgGradient.addColorStop(1, '#ffffff');
      ctx.fillStyle = bgGradient; ctx.fillRect(0, 0, 800, 700);
      ctx.fillStyle = '#ffffff'; ctx.shadowColor = 'rgba(0,107,91,0.08)'; ctx.shadowBlur = 24; ctx.shadowOffsetY = 8;
      ctx.beginPath(); ctx.roundRect(40, 40, 720, 620, 24); ctx.fill(); ctx.shadowColor = 'transparent';
      ctx.fillStyle = '#006b5b'; ctx.beginPath(); ctx.roundRect(40, 40, 720, 15, [24, 24, 0, 0]); ctx.fill();

      if (img && img.complete && img.naturalHeight > 0) {
        try { const lh = 52; ctx.drawImage(img, 80, 80, (img.naturalWidth / img.naturalHeight) * lh, lh); }
        catch { drawFallbackLogo(ctx); }
      } else { drawFallbackLogo(ctx); }

      ctx.fillStyle = '#006b5b'; ctx.font = 'bold 24px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText('تقرير تحليل الجسم', 720, 106);
      ctx.fillStyle = '#6e7a75'; ctx.font = '500 13px sans-serif';
      ctx.fillText(`تاريخ التقرير: ${activeResult!.date} | Diet Picnic`, 720, 136);
      ctx.strokeStyle = 'rgba(0,107,91,0.12)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(80, 160); ctx.lineTo(720, 160); ctx.stroke();

      // Info cards row
      [[520, 'الاسم', activeResult!.name], [300, 'الوزن الحالي', `${activeResult!.weight} كجم`], [80, 'الطول الحالي', `${activeResult!.height} سم`]].forEach(([x, lbl, val]) => {
        ctx.fillStyle = '#f6f9f8'; ctx.beginPath(); ctx.roundRect(Number(x), 185, 200, 90, 16); ctx.fill();
        ctx.strokeStyle = 'rgba(0,107,91,0.05)'; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillStyle = '#6e7a75'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(String(lbl), Number(x) + 180, 215);
        ctx.fillStyle = '#191c1d'; ctx.font = 'bold 16.5px sans-serif';
        ctx.fillText(String(val), Number(x) + 180, 250);
      });

      // Gauge
      const trackY = 515; const trackHeight = 13;
      const trackGradient = ctx.createLinearGradient(720, 0, 80, 0);
      trackGradient.addColorStop(0.05, '#3b82f6'); trackGradient.addColorStop(0.25, '#10b981');
      trackGradient.addColorStop(0.50, '#eab308'); trackGradient.addColorStop(0.75, '#f97316');
      trackGradient.addColorStop(0.95, '#ef4444');
      ctx.fillStyle = trackGradient; ctx.beginPath(); ctx.roundRect(80, trackY, 640, trackHeight, 6.5); ctx.fill();
      const clampedPercent = Math.max(2, Math.min(98, activeResult!.percentage));
      const pinX = 720 - (clampedPercent / 100) * 640;
      ctx.fillStyle = '#ffffff'; ctx.shadowColor = 'rgba(0,107,91,0.2)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 4;
      ctx.beginPath(); ctx.roundRect(pinX - 9, trackY - 11, 18, 35, 9); ctx.fill(); ctx.shadowColor = 'transparent';
      ctx.strokeStyle = '#006b5b'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.roundRect(pinX - 9, trackY - 11, 18, 35, 9); ctx.stroke();
      ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(pinX, trackY + 6.5, 1.8, 0, 2 * Math.PI); ctx.fill();
    };

    const drawAndDownload = (img: HTMLImageElement | null) => {
      const canvas = document.createElement('canvas');
      canvas.width = 800; canvas.height = 700;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      drawCanvasContent(ctx, img);
      const link = document.createElement('a');
      link.download = `تقرير_دايت_بيكنك_${activeResult!.name}.png`;
      try { link.href = canvas.toDataURL('image/png'); link.click(); }
      catch {
        const fb = document.createElement('canvas'); fb.width = 800; fb.height = 700;
        const fc = fb.getContext('2d'); if (fc) { drawCanvasContent(fc, null); link.href = fb.toDataURL('image/png'); link.click(); }
      }
    };

    logoImg.onload = () => drawAndDownload(logoImg);
    logoImg.onerror = () => drawAndDownload(null);
  };

  const getWhatsappShareUrl = () => {
    if (!activeResult) return '#';
    const textMsg = `أهلاً! استخدمت حاسبة Diet Picnic وطلعت نتيجتي: مؤشر كتلة الجسم ${activeResult.bmi} (${activeResult.category}). الوزن المثالي المقترح لي هو ${activeResult.idealWeight} كجم. جرب الحاسبة بنفسك!`;
    return `https://wa.me/?text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

      {/* Form */}
      <div className="lg:col-span-5 bmi-glass-card p-8 md:p-10 rounded-3xl space-y-8">
        <div className="flex items-center gap-3 text-[#006b5b]">
          <span className="material-symbols-outlined text-3xl">analytics</span>
          <h2 className="text-[22px] md:text-[26px] font-bold">بيانات القياس</h2>
        </div>

        <form onSubmit={handleCalculate} className="space-y-6">
          {errorMsg && (
            <div className="p-4 bg-red-50 text-red-700 border border-red-100 rounded-2xl text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined shrink-0 text-[18px]">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="bmi-input-name" className="text-sm font-semibold text-[#3e4946] pr-1">الاسم الكامل</label>
            <input id="bmi-input-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="مثال: سارة أحمد"
              className="bg-[#f3f4f5] border-none rounded-2xl p-4 text-sm font-medium text-[#191c1d] placeholder-[#6e7a75] outline-none focus:ring-2 focus:ring-[#5bbfa9]/40 transition-shadow" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="bmi-input-weight" className="text-sm font-semibold text-[#3e4946] pr-1">الوزن (كجم)</label>
              <input id="bmi-input-weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
                placeholder="00"
                className="bg-[#f3f4f5] border-none rounded-2xl p-4 text-sm font-medium text-[#191c1d] placeholder-[#6e7a75] outline-none focus:ring-2 focus:ring-[#5bbfa9]/40 transition-shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="bmi-input-height" className="text-sm font-semibold text-[#3e4946] pr-1">الطول (سم)</label>
              <input id="bmi-input-height" type="number" value={height} onChange={(e) => setHeight(e.target.value)}
                placeholder="000"
                className="bg-[#f3f4f5] border-none rounded-2xl p-4 text-sm font-medium text-[#191c1d] placeholder-[#6e7a75] outline-none focus:ring-2 focus:ring-[#5bbfa9]/40 transition-shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-[#3e4946] pr-1">الجنس</label>
            <div className="flex gap-4">
              {(['female', 'male'] as Gender[]).map((g) => (
                <label key={g} className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl cursor-pointer border-2 transition-all ${
                  gender === g ? 'border-[#5bbfa9]/80 bg-[#006b5b]/5 text-[#006b5b]' : 'border-transparent bg-[#f3f4f5] text-[#191c1d] hover:bg-[#edeeef]'
                }`}>
                  <input type="radio" name="bmi-gender" checked={gender === g} onChange={() => setGender(g)} className="hidden" />
                  <span className={`material-symbols-outlined ${gender === g ? 'text-[#006b5b]' : 'text-neutral-500'}`}>{g}</span>
                  <span className="font-bold text-[15px]">{g === 'female' ? 'أنثى' : 'ذكر'}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit"
            className="w-full py-5 rounded-2xl text-[16px] md:text-[18px] font-bold shadow-lg hover:brightness-95 transition-all flex items-center justify-center gap-3 active:scale-[0.98] bg-[#f39678] text-white cursor-pointer">
            <span className="material-symbols-outlined animate-bounce">rocket_launch</span>
            احسب النتيجة الآن
          </button>
        </form>
      </div>

      {/* Result Card */}
      <div ref={resultCardRef} id="result-card-print-area"
        className="lg:col-span-7 relative overflow-hidden bmi-glass-card rounded-3xl min-h-[550px] flex flex-col transition-all duration-700 shadow-2xl border border-[#006b5b]/25">

        <div className="relative z-10 p-8 md:p-10 flex-1 flex flex-col gap-8 md:gap-10">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="text-[22px] md:text-[26px] font-bold text-[#006b5b]">تقرير تحليل الجسم</h3>
              <p className="text-[13px] text-[#6e7a75]">
                {isCalculated && activeResult ? `تاريخ التقرير: ${activeResult.date}` : 'بانتظار حساب قياساتك...'}
              </p>
            </div>
            <div className="block">
              <img alt="Diet Picnic Brand Logo" className="h-11 md:h-12 w-auto object-contain transition-all"
                src="https://storage.googleapis.com/gpt-engineer-file-uploads/unzeHmPxJHf90KMzaEXxyY7lwIP2/social-images/social-1779669605516-logo.webp" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isCalculated && activeResult ? (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-8 flex-1">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: 'الاسم', value: activeResult.name },
                    { label: 'الوزن الحالي', value: `${activeResult.weight} كجم` },
                    { label: 'الطول الحالي', value: `${activeResult.height} سم` },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white/55 p-4 rounded-2xl border border-white/60">
                      <p className="text-[12px] text-[#3e4946] font-medium mb-1">{label}</p>
                      <p className="text-[15px] font-bold text-[#191c1d] truncate">{value}</p>
                    </div>
                  ))}

                  <div className="col-span-2 bg-[#006b5b]/5 p-6 rounded-2xl border border-[#006b5b]/10 flex justify-between items-center">
                    <div className="space-y-1 text-right">
                      <p className="text-[13px] text-[#006b5b] font-bold">مؤشر كتلة الجسم</p>
                      <p className="text-[40px] leading-tight font-black text-[#006b5b]">{activeResult.bmi}</p>
                    </div>
                    <div className="text-left space-y-1">
                      <p className="text-[12px] text-[#006b5b] font-bold opacity-75">التصنيف الحالي</p>
                      <p className="text-[20px] md:text-[24px] font-bold text-[#006b5b]">{activeResult.category}</p>
                    </div>
                  </div>

                  <div className="bg-[#feaa88]/10 p-4 rounded-2xl border border-[#feaa88]/20 flex flex-col justify-center">
                    <p className="text-[12px] text-[#8e4d32] font-bold mb-1">الوزن المثالي</p>
                    <p className="text-[16px] font-bold text-[#191c1d]">{`${activeResult.idealWeight} كجم`}</p>
                  </div>
                </div>

                {/* BMI Gauge */}
                <div className="space-y-5">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[13px] font-bold text-[#3e4946]">مقياس الحالة الصحية</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#006b5b] animate-pulse" />
                      <span className="text-[12px] text-[#006b5b] font-bold">النطاق الصحي (18.5 - 24.9)</span>
                    </div>
                  </div>
                  <div className="relative h-4.5 rounded-full bmi-track shadow-inner">
                    <div className="absolute top-1/2 w-4 h-9 bg-white border-[2.5px] border-[#006b5b] shadow-lg rounded-full transition-all duration-1000 ease-out z-20"
                      style={{ right: `calc(${activeResult.percentage}% - 8px)`, left: 'auto', transform: 'translateY(-50%)' }} />
                  </div>
                  <div className="grid grid-cols-5 text-[10px] md:text-xs font-bold text-center gap-1 leading-none tracking-tight">
                    <span className="text-blue-500">نحافة</span>
                    <span className="text-green-600">مثالي ✨</span>
                    <span className="text-yellow-600">زائد</span>
                    <span className="text-orange-500">سمنة</span>
                    <span className="text-red-500">مفرطة</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pt-8 border-t border-[#bdc9c4]/20 flex flex-wrap gap-3.5 justify-center">
                  <button onClick={exportAsImage}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#bdc9c4] hover:border-[#006b5b] rounded-full text-[13px] font-semibold text-[#191c1d] hover:text-[#006b5b] transition-all cursor-pointer shadow-sm hover:shadow-md">
                    <span className="material-symbols-outlined text-[18px]">photo_library</span>
                    حفظ كصورة
                  </button>
                  <button onClick={() => window.print()}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#bdc9c4] hover:border-[#006b5b] rounded-full text-[13px] font-semibold text-[#191c1d] hover:text-[#006b5b] transition-all cursor-pointer shadow-sm hover:shadow-md">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                    ملخص PDF
                  </button>
                  <a href={getWhatsappShareUrl()} target="_blank" rel="noopener noreferrer" id="wa-share"
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#075E54] border border-[#25D366]/30 rounded-full text-[13px] font-bold transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    مشاركة النتائج
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#006b5b]/5 flex items-center justify-center text-[#006b5b] animate-pulse border border-[#006b5b]/15 shadow-inner">
                  <span className="material-symbols-outlined text-[36px]">clinical_notes</span>
                </div>
                <div className="space-y-3 max-w-sm">
                  <h4 className="text-[18px] font-bold text-[#006b5b]">التقرير بانتظار حساب قياساتك</h4>
                  <p className="text-[14px] text-[#6e7a75] leading-[22px] font-medium">
                    قم بتعبئة بيانات الوزن، والطول، والاسم في النموذج واضغط على{' '}
                    <strong className="text-[#f39678]">"احسب النتيجة الآن"</strong>{' '}
                    لتوليد تقرير صحي تفصيلي ومقياس كتلة جسمك الملون فوراً.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
