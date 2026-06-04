import { ArrowRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import logo from '@/assets/diet-picnic-logo.png';

export default function BmiPageHeader() {
  const navigate = useNavigate();

  return (
    <header
      id="bmi-header"
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#bdc9c4]/30"
    >
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Left side: Back to Home button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-1.5 text-[#006b5b] hover:text-[#f39678] text-sm md:text-base font-extrabold cursor-pointer transition-all hover:translate-x-[-2px] duration-200"
            aria-label="العودة للرئيسية"
          >
            <ArrowRight size={18} />
            <span>العودة للرئيسية</span>
          </button>
        </div>

        {/* Right side: Logo */}
        <div
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => navigate({ to: '/' })}
        >
          <img src={logo} alt="Diet Picnic Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>
      </div>
    </header>
  );
}
