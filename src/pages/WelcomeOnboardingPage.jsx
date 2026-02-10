import { useNavigate } from 'react-router-dom';

function WelcomeOnboardingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark text-white transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-mesh-onboarding">
        <div className="h-12 w-full" />
        <div className="flex items-center px-6 py-2 justify-end">
          <button className="flex items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-md">
            <span className="material-symbols-outlined text-white">settings</span>
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-6 @container">
          <div className="relative w-full max-w-sm mb-12 flex justify-center">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-[60px]" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary-neon/20 blur-[60px]" />
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
              <div
                className="w-full h-full bg-cover bg-center rounded-xl neon-glow border border-white/10 bg-black"
                data-alt="Neon glowing orange sneaker on dark background"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMV3HOMpGItBZ8XaGiQlyf-eSjrfRisaDm60XpLMS_0gE_tFwrc3dJin73xsmL_nMCVjITSnk5jp_lOoMabtfgZqv_rFvsnR_jkRWWnedQ0XwK_OoBm4fpBBWtmwUjissmSAcimpPcEtlTFNFZBgDIjRoZPi93FicaqwJ3lquXqHMPkmYJBc5X-cO4xsoWqhY75AbRnMUgpk3rV8-Qc_UYzmlV682PY8O0213r1R9SdXOWx4qTlO35nI4D_ZYeiwPJJj-eiDmqc0w")',
                }}
              />
              <div className="absolute -bottom-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-lg flex items-center gap-3 shadow-2xl">
                <div className="bg-primary p-2 rounded-full">
                  <span className="material-symbols-outlined text-white text-sm">bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60">کالری مصرفی</span>
                  <span className="text-sm font-bold text-white font-display">420 kcal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center space-y-4 max-w-md">
            <h1 className="text-primary text-4xl font-bold leading-tight tracking-tight drop-shadow-sm">
              به مسیر سلامتی <span className="text-primary">خوش آمدید</span>
            </h1>
            <p className="text-primary/80 text-lg font-normal leading-relaxed px-2">
              قدم‌هایت را بشمار، مسیرهای جدید را کشف کن و به اندام ایده‌آل خود برس
            </p>
          </div>
          <div className="flex w-full flex-row items-center justify-center gap-2.5 py-10">
            <div className="h-1.5 w-8 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="w-full px-6 pb-12 pt-4">
          <button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-xl py-5 rounded-full shadow-[0_10px_30px_rgba(244,123,37,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3"
            type="button"
            onClick={() => navigate('/login')}
          >
            <span className="material-symbols-outlined text-2xl ">arrow_back</span>
            <span>شروع کنید</span>
          </button>
          <p className="text-center mt-6 text-white/40 text-sm">
            قبلاً عضو شده‌اید؟{' '}
            <a className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4" href="#">
              وارد شوید
            </a>
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-64 opacity-10 pointer-events-none grayscale invert"
          data-alt="Subtle abstract city map pattern"
          data-location="Tehran"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAn8nU6SeHC1jyvL_Ei3zH8O0Iz5xbGS-IDMsGOHxRfkXeKoh1BGAbKoUrERPcDhnRLwzx6RUUZzE5m6V9lXDxun0xjd2N9TEjM6bNqI_e-Ntoqdlv3v8M0yLFdNhtyJXGFfYley2zKK2XHR8zAzbAV9MZbhyLtU1f46tAFKi5S2OzvSxgKzy1gJh_yaK9ExJ2DKYXUtrp8N9AGc23gbkekhzgSIHsQUYzTjEt9hjllaR1j0txhUNt-eFXPsrNbHxOT_P0VPWGJwhE")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </div>
    </div>
  );
}

export default WelcomeOnboardingPage;

