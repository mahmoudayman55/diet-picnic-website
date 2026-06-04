import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Mail, Lock, User, Sparkles } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onSuccessLogin: (name: string) => void;
}

export default function AuthModal({ onClose, onSuccessLogin }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const displayName = email ? email.split('@')[0] : 'ضيفنا العزيز';
      setSuccess(true);
      setTimeout(() => { onSuccessLogin(displayName); onClose(); }, 1500);
    } else {
      setSuccess(true);
      setTimeout(() => { onSuccessLogin(fullName || 'المشترك الجديد'); onClose(); }, 1500);
    }
  };

  return (
    <div id="auth-modal-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#bdc9c4]/30"
      >
        {/* Header */}
        <div className="bg-[#006b5b] p-6 text-white text-center relative">
          <button onClick={onClose} className="absolute top-4 left-4 p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-all cursor-pointer">
            <X size={20} />
          </button>
          <div className="mx-auto w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center mb-3 text-white">
            <Sparkles size={22} className="text-[#feaa88]" />
          </div>
          <h3 className="text-[20px] font-bold">بوابة Diet Picnic للياقة</h3>
          <p className="text-white/80 text-xs mt-1">سجل دخولك لحفظ سجل مؤشرات جسمك ومتابعة تقدمك المستمر</p>
        </div>

        {/* Form */}
        <div className="p-8">
          {success ? (
            <div className="py-10 text-center space-y-3">
              <span className="material-symbols-outlined text-[64px] text-green-500 animate-bounce block">check_circle</span>
              <h4 className="font-bold text-xl text-[#006b5b]">تم تسجيل الدخول بنجاح!</h4>
              <p className="text-sm text-[#3e4946]">يرحب بك فريق دايت بيكنك كشريك لرحلة الرشاقة...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tab toggle */}
              <div className="flex bg-[#f3f4f5] p-1.5 rounded-2xl">
                {[{ label: 'تسجيل الدخول', val: true }, { label: 'إنشاء حساب', val: false }].map(({ label, val }) => (
                  <button key={label} type="button" onClick={() => setIsLogin(val)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      isLogin === val ? 'bg-white text-[#006b5b] shadow-sm' : 'text-[#3e4946] hover:text-[#006b5b]'
                    }`}>
                    {label}
                  </button>
                ))}
              </div>

              {/* Full Name (register only) */}
              {!isLogin && (
                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-semibold text-[#3e4946] pr-1">الاسم الكامل</label>
                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bdc9c4]"><User size={18} /></span>
                    <input type="text" required placeholder="مثال: سارة أحمد" value={fullName} onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#f3f4f5] border-none rounded-2xl py-3.5 pr-11 pl-4 text-sm font-medium text-[#191c1d] outline-none focus:ring-2 focus:ring-[#5bbfa9]/30" />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-1.5 text-right">
                <label className="text-xs font-semibold text-[#3e4946] pr-1">البريد الإلكتروني</label>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bdc9c4]"><Mail size={18} /></span>
                  <input type="email" required placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#f3f4f5] border-none rounded-2xl py-3.5 pr-11 pl-4 text-sm font-medium text-[#191c1d] outline-none focus:ring-2 focus:ring-[#5bbfa9]/30" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5 text-right">
                <div className="flex justify-between items-center pr-1">
                  <label className="text-xs font-semibold text-[#3e4946]">كلمة المرور</label>
                  {isLogin && (
                    <button type="button" className="text-xs text-[#f39678] hover:underline font-semibold cursor-pointer">
                      هل نسيت كلمة المرور؟
                    </button>
                  )}
                </div>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bdc9c4]"><Lock size={18} /></span>
                  <input type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#f3f4f5] border-none rounded-2xl py-3.5 pr-11 pl-4 text-sm font-medium text-[#191c1d] outline-none focus:ring-2 focus:ring-[#5bbfa9]/30" />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 bg-[#f39678] hover:bg-[#f39678]/95 text-white font-bold rounded-2xl mt-2 transition-all shadow-md active:scale-95 cursor-pointer">
                {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
              </button>

              <p className="text-[11px] text-[#6e7a75] text-center leading-relaxed">
                باستمرارك في تسجيل الدخول، فإنك توافق على شروط خدمة دايت بيكنك ومعايير جودة القياس الصحية المعيارية.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
