import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpLoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (event) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    let value = event.target.value || '';

    value = value
      .split('')
      .map((ch) => {
        const idx = persianDigits.indexOf(ch);
        if (idx !== -1) return String(idx);
        if (/[0-9]/.test(ch)) return ch;
        return '';
      })
      .join('');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    setPhone(value);
  };
  return (
    <div className="bg-mesh-login text-slate-900 min-h-screen flex flex-col font-display">
      <div className="flex items-center justify-end p-6 pt-12">
        <button className="w-10 h-10 flex items-center justify-center rounded-full neumorphic-btn">
          <span className="material-symbols-outlined text-back">chevron_right</span>
        </button>
        {/*<div className="w-10 h-10" />*/}
      </div>
      <div className="flex-1 px-8 pb-12 ">
        <div className="mt-8 mb-12 ">
          <div className='flex justify-end'>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6 shadow-neon-orange border border-primary/30">
              <span className="material-symbols-outlined text-primary text-4xl">directions_walk</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold leading-tight mb-3 text-end">ورود یا ثبت‌نام</h1>
          <p className="text-slate-400 text-lg text-end">برای شروع قدم زدن، شماره موبایل خود را وارد کنید</p>
        </div>
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-slate-400 mb-2 mr-1 text-end">شماره موبایل</label>
            <div className="flex items-center neo-surface-inset border border-slate-200 px-4 py-1 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all">
              <span className="material-symbols-outlined text-slate-500 ml-3">smartphone</span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-xl py-3 text-left tracking-[0.2em] font-display text-slate-900 placeholder:text-slate-500"
                dir="ltr"
                placeholder="۰۹---------"
                type="tel"
                inputMode="numeric"
                maxLength={11}
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>
          <button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-neon-orange transition-all flex items-center justify-center gap-2 text-lg active:scale-[0.98]"
            type="button"
            onClick={() => navigate('/dashboard')}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span>دریافت کد تایید</span>
          </button>
        </div>
        <div className="relative my-12">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background-light text-slate-500">کد تایید ۴ رقمی</span>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex justify-center gap-4" dir="ltr">
            <input
              className="otp-input w-16 h-16 neo-surface-inset border border-slate-200 rounded-xl text-2xl font-bold text-slate-900 focus:border-primary focus:ring-0 transition-all"
              maxLength={1}
              type="text"
            />
            <input
              className="otp-input w-16 h-16 neo-surface-inset border border-slate-200 rounded-xl text-2xl font-bold text-slate-900 focus:border-primary focus:ring-0 transition-all"
              maxLength={1}
              type="text"
            />
            <input
              className="otp-input w-16 h-16 neo-surface-inset border border-slate-200 rounded-xl text-2xl font-bold text-slate-900 focus:border-primary focus:ring-0 transition-all"
              maxLength={1}
              type="text"
            />
            <input
              className="otp-input w-16 h-16 neo-surface-inset border border-slate-200 rounded-xl text-2xl font-bold text-slate-900 focus:border-primary focus:ring-0 transition-all"
              maxLength={1}
              type="text"
            />
          </div>
          <div className="text-center space-y-4">
            <p className="text-slate-400 text-sm">
              کد را دریافت نکردید؟
              <button className="text-primary font-bold mr-1">ارسال مجدد (۵۹ ثانیه)</button>
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 pb-10">
        <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
            data-alt="Abstract fitness person walking in neon lights"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-7z86do1_PbMPJ0N4rSc9qsN6hK66p_72sY4Oi93E2Gtr4olSFrVbt5xDz3vE9QK5wdiaDnr0yMlXqyukBE0E5E7sXs6b8NezPqAE4azmsyHlJQBm8yqqoXoIY-Y01EDVH6YjRqMkgaqSDgprtjET3V_nOM4EZIqPcfH3RwcRQOanHsFavNXHbblsL1lCeeZdrrhlqPOQUmsyKTuWT6uM9Oqk_t0FZnYtgwHYs1v16zSLkNSKLkBdhIVd9KP68VM_WD5mis5YyY"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent" />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-neon-orange" />
            <span className="text-xs text-slate-300 font-medium">
              ۱,۴۳۲ نفر هم‌اکنون در حال پیاده‌روی هستند
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpLoginPage;

