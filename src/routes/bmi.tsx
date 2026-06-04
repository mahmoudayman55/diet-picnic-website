import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { BmiResult } from '../types/bmi.types';
import { motion, AnimatePresence } from 'motion/react';
import BmiPageHeader from '../components/bmi/BmiPageHeader';
import BmiCalculator from '../components/bmi/BmiCalculator';
import AboutBmiSection from '../components/bmi/AboutBmiSection';

export const Route = createFileRoute('/bmi')({
  component: BmiPage,
});

function BmiPage() {
  const [lastResult, setLastResult] = useState<BmiResult | null>(null);

  const [customAlert, setCustomAlert] = useState<{
    show: boolean; title: string; message: string; type: 'success' | 'info' | 'error';
  }>({ show: false, title: '', message: '', type: 'info' });

  const triggerAlert = (title: string, message: string, type: 'success' | 'info' | 'error' = 'info') => {
    setCustomAlert({ show: true, title, message, type });
  };

  const closeAlert = () => setCustomAlert((prev) => ({ ...prev, show: false }));

  // Restore saved data from localStorage
  useEffect(() => {
    const savedResult = localStorage.getItem('diet_picnic_last_bmi');
    if (savedResult) {
      try {
        setLastResult(JSON.parse(savedResult));
      } catch {
        /* ignore */
      }
    }
  }, []);

  const handleBmiCalculation = (result: BmiResult) => {
    setLastResult(result);
    localStorage.setItem('diet_picnic_last_bmi', JSON.stringify(result));
    triggerAlert(
      'تم حساب مؤشر كتلة الجسم!',
      `مرحباً يا ${result.name}، حصلنا على قراءة مؤشر كتلة جسمك بنجاح وقيمتها: ${result.bmi} (${result.category}). يمكنك الاطلاع على التقرير التفصيلي.`,
      'success',
    );
  };

  const handlePrivacyAlert = (docType: string) => {
    if (docType === 'سياسة الخصوصية') {
      triggerAlert('سياسة خصوصية البيانات', 'في دايت بيكنك نحترم خصوصيتك بالكامل. جميع بيانات الطول، الوزن، والاسم والعمليات الحسابية تتم محلياً في متصفحك ولا يتم مشاركتها أو بيعها لأي خادم خارجي.', 'info');
    } else if (docType === 'الشروط والأحكام') {
      triggerAlert('الشروط والأحكام العامة', 'مؤشر كتلة الجسم (BMI) هو أداة استرشادية عامة للبالغين ولا يعتبر بديلاً للتشخيص الطبي المباشر. يُرجى مراجعة طبيب مختص قبل إجراء تغييرات جذرية في برنامجك الغذائي.', 'info');
    } else {
      triggerAlert('قنوات التواصل معنا', 'نسعد دائماً بخدمتك! يمكنك التواصل مع فريق دايت بيكنك عبر البريد الإلكتروني support@dietpicnic.com أو عبر الرقم الموحد لحسابات اللياقة.', 'info');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ background: '#f8f9fa', color: '#191c1d', fontFamily: "'Alexandria', 'Tajawal', sans-serif" }}
    >
      <BmiPageHeader />

      <main className="mt-28 md:mt-32 pb-16 px-6 md:px-16 max-w-7xl w-full mx-auto flex-1 space-y-16">
        {/* Page Title Header */}
        <section className="text-center md:space-y-4 mb-4">
          <h1 className="text-[30px] md:text-4xl text-[#006b5b] font-bold tracking-tight">
            حاسبة مؤشر كتلة الجسم الذكية
          </h1>
          <p className="text-[#3e4946] text-sm md:text-base max-w-2xl mx-auto leading-relaxed md:leading-8">
            احسب مؤشر كتلة جسمك (BMI) فوراً بأسلوب عصري، واحصل على قياسات دقيقة لوزنك المثالي المقترح بالإضافة لتقارير إرشادية وتفصيلية.
          </p>
        </section>

        {/* 1. BMI Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-12"
        >
          <BmiCalculator onCalculation={handleBmiCalculation} lastResult={lastResult} />
        </motion.div>

        {/* Divider line */}
        <div className="w-full h-px bg-slate-200" />

        {/* 2. About BMI Section (rendered directly inline!) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <AboutBmiSection />
        </motion.div>
      </main>

      {/* BMI Page Footer */}
      <footer className="bg-white border-t border-[#bdc9c4]/30 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center text-center gap-6">
          <p className="text-[#3e4946] text-[15px] leading-[26px] max-w-lg">
            منصة دايت بيكنك هي رفيقك الذكي في رحلة الرشاقة، نسعى لتقديم أدوات سهلة وممتعة لمراقبة صحتك وجمالك.
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-[14px]">
            {['سياسة الخصوصية', 'الشروط والأحكام', 'تواصل معنا'].map((item) => (
              <button key={item} onClick={() => handlePrivacyAlert(item)}
                className="text-[#3e4946] hover:text-[#006b5b] transition-all font-medium cursor-pointer">
                {item}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#6e7a75]">
            © {new Date().getFullYear()} دايت بيكنك. جميع الحقوق محفوظة لنمط حياة صحي.
          </p>
        </div>
      </footer>

      {/* Custom Alert Overlay */}
      <AnimatePresence>
        {customAlert.show && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full border border-[#bdc9c4]/40 shadow-2xl relative text-right space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-3xl ${
                  customAlert.type === 'success' ? 'text-green-500' :
                  customAlert.type === 'error' ? 'text-red-600' : 'text-[#006b5b]'
                }`}>
                  {customAlert.type === 'success' ? 'check_circle' : customAlert.type === 'error' ? 'error' : 'info'}
                </span>
                <h4 className="text-[18px] md:text-xl font-bold text-[#006b5b]">{customAlert.title}</h4>
              </div>
              <p className="text-[#3e4946] text-sm md:text-base leading-relaxed pr-1">{customAlert.message}</p>
              <button onClick={closeAlert}
                className="w-full py-3.5 bg-[#006b5b] hover:bg-[#006b5b]/95 text-white font-bold rounded-2xl transition-all cursor-pointer text-sm shadow-md active:scale-95">
                حسنًا، فهمت
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
