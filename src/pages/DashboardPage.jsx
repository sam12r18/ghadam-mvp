import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light text-slate-900 min-h-screen font-display overflow-x-hidden w-full max-w-[448px] mx-auto">
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="neo-surface-sm flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2">
          <span className="material-symbols-outlined text-primary text-xl">account_balance_wallet</span>
          <p className="text-slate-800 text-sm font-bold leading-normal">موجودی: ۱۲۰,۰۰۰ تومان</p>
        </div>
        <div className="size-12 neo-surface-sm border border-slate-200 flex items-center justify-center rounded-full">
          <span className="material-symbols-outlined text-slate-600">notifications</span>
        </div>
      </div>
      <div className="flex flex-col items-center px-6 gap-8 pb-32">
        <div className="relative flex items-center justify-center mt-4">
          <div className="size-64 rounded-full neo-surface flex items-center justify-center border border-slate-100">
            <div className="flex flex-col items-center text-center">
              <p className="text-slate-500 text-sm font-medium">گام‌های امروز</p>
              <h1 className="text-5xl font-bold mt-1 text-slate-900">۸,۵۴۳</h1>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-primary text-xs font-bold bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">
                  ۶۵٪ از هدف
                </span>
              </div>
            </div>
          </div>
          <svg className="absolute size-64 -rotate-90">
            <circle
              className="drop-shadow-[0_0_8px_rgba(242,127,13,0.8)]"
              cx="128"
              cy="128"
              fill="none"
              r="119"
              stroke="#f27f0d"
              strokeDasharray="747"
              strokeDashoffset="261"
              strokeLinecap="round"
              strokeWidth="10"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="neo-card p-4 flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">distance</span>
            </div>
            <div>
              <p className="text-slate-500 text-xs">مسافت</p>
              <p className="text-slate-900 font-bold">۵.۲ کیلومتر</p>
            </div>
          </div>
          <div className="neo-card p-4 flex items-center gap-3">
            <div className="bg-orange-500/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-orange-500">local_fire_department</span>
            </div>
            <div>
              <p className="text-slate-500 text-xs">کالری</p>
              <p className="text-slate-900 font-bold">۳۴۰ کالری</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-2">
          <button
            className="w-full py-5 bg-primary text-background-dark rounded-full font-bold text-xl flex items-center justify-center gap-3 neon-glow-orange active:scale-95 transition-transform duration-100"
            type="button"
            onClick={() => navigate('/chat')}
          >
            <span className="material-symbols-outlined text-3xl">play_circle</span>
            <span>شروع پیاده‌روی</span>
          </button>
          <p className="text-slate-500 text-center text-xs mt-4">با هر ۱۰۰۰ قدم ۵۰۰ تومان هدیه بگیرید</p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 text-lg font-bold">مسیرهای پیشنهادی</h3>
            <span className="text-primary text-sm">مشاهده همه</span>
          </div>
          <div
            className="flex overflow-x-auto gap-4 pb-4 snap-x rtl:flex-row-reverse"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="min-w-[280px] neo-card rounded-2xl overflow-hidden snap-start">
              <div
                className="h-32 bg-cover bg-center"
                data-alt="یک مسیر پیاده روی سرسبز در پارک محلی"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvJee_hoy8GKYNfOygxjtG8mdVbQNishYa0sYiW9ujQranJqx2glbJ4G564vYvrVrkamOd6ON__Yx2IFZ2Q2_CTcdvfdq6T31cpJkvt3iwc-tNcasH-x6jaUI9-1ospWeT4Gust8xLrQFotEZAX61q3amEmarCz2ue7YZgjeOZJnfpXeSmxBYPTh5AXUDib97Qj5KVZG4oQBnkrZlsQA4wu5jpvj0LoQm0O1LfoGC-dcddnbOI_lpSHN1b0-zACDZ8G-2k7RcVg-8')",
                }}
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <p className="text-slate-900 font-bold">بوستان آب و آتش</p>
                  <span className="text-primary text-xs font-bold">۴.۲ کیلومتر</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-slate-400 text-sm">location_on</span>
                  <p className="text-slate-500 text-xs" data-location="Tehran">
                    تهران، عباس‌آباد
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-[280px] neo-card rounded-2xl overflow-hidden snap-start">
              <div
                className="h-32 bg-cover bg-center"
                data-alt="مسیر پیاده روی مدرن شهری با نورپردازی"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB05xSIf6oPJ5aF4V3B9r2fkaF-VSvBWMpq0Xeju4NtasjYBUUahJOuOAWh6qMm6olIOm7ZLxA065Qi7GFqDwrTnhwNJM2S6tQzE2w4p_aIi__m_3AaLo_bOMRuMu-aIMaClQVX50kNOQoMgIUfWTw4fn22JnExJ0VHoaMrF-LWsHjy5Tkoz7glRO64-AmowW_4al3XMEJyWQB50Ixj8ld6RHF-Ym4I8NhOH0Gg_TJ3LKlG-DrD44P-gZ24CcMFcblOoClgVEUB2D8')",
                }}
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <p className="text-slate-900 font-bold">بلوار ولیعصر</p>
                  <span className="text-primary text-xs font-bold">۲.۸ کیلومتر</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-slate-400 text-sm">location_on</span>
                  <p className="text-slate-500 text-xs" data-location="Tehran">
                    تهران، میدان ونک
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(100%,448px)] max-w-[448px] h-20 neo-nav border border-slate-200 flex items-center justify-around px-4 z-50">
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            home
          </span>
          <span className="text-[10px] font-bold">خانه</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold">کاوش</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-bold">تاریخچه</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">پروفایل</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

