import { useEffect, useRef, useState } from 'react';

function ChatPageLegacy() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white overflow-hidden">
      <div className="relative flex h-screen w-full flex-col bg-background-dark shadow-2xl overflow-hidden border-x border-primary/10">
        <div className="flex items-center justify-between px-6 pt-4 pb-2 text-xs font-bold">
          <span className="font-display">9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[16px]">wifi</span>
            <span className="material-symbols-outlined text-[20px]">battery_full</span>
          </div>
        </div>
        <div className="flex items-center px-4 py-2 justify-between">
          <button className="text-white/60 p-2">
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
            راه‌اندازی حساب کاربری
          </h2>
          <div className="w-10" />
        </div>
        <div className="px-6 py-2">
          <div className="flex justify-between items-center mb-1 text-[10px] text-primary font-bold">
            <span>تکمیل پروفایل</span>
            <span className="font-display">25%</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full neon-glow-purple" style={{ width: '25%' }} />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6 flex flex-col pt-8">
          <div className="flex items-start gap-3 max-w-[85%] self-start">
            <div className="relative shrink-0">
              <div className="size-10 rounded-full bg-gradient-to-br from-primary to-purple-400 p-[2px] neon-glow-purple">
                <div className="bg-background-dark rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="AI smart coach avatar with neon glow"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOtCrNPZavp0Pq2ugTR3ryo7SOHZuceQTEKd8euEb2ia4c-Z7FWmyQ9VxtjZYk2OiWTZ0jdRP_bv3BdtUSikiKvTnRfyiH2Sgff2yz3lYvUZBdFy5dx8rVKatYKhnoIDixkrT89ZIOSGNBM9c5YwyQgDGwQt7wVs25c--MA4ulg7gus0rRJ6rHLgzU-_vzKmb3TbLS4OKoeNNyYXD34QRASA9o8cC6sw5ePft1Oj5t2UbuDMQ-8EbjeSa1TaHqITZ61JIpZWlhEMA"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-background-dark" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-primary font-medium mr-2">مربی هوشمند</span>
              <div className="bg-primary/20 border border-primary/30 text-white p-4 rounded-2xl rounded-tr-none neon-glow-purple">
                <p className="text-sm leading-relaxed">
                  سلام! من مربی هوشمند شما هستم. برای شروع، نام، سن و وزنت رو به من بگو.
                </p>
              </div>
              <span className="text-[10px] text-white/30 mr-2 mt-1 font-display">10:12 AM</span>
            </div>
          </div>
          <div className="flex items-start gap-3 max-w-[85%] self-end flex-row-reverse">
            <div className="shrink-0">
              <div className="size-10 rounded-full bg-gradient-to-br from-accent-orange to-orange-400 p-[2px] neon-glow-orange">
                <div className="bg-background-dark rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="User profile avatar placeholder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh7WkLtNF4PnTwg59Xk6c70dpTFEddyBN4DfiRwUwOSdmBVmg5eIqOyV691UXfYqESpfcBS8tF_919V8JvTHYjZvFwZRPbiPBYSAdex7ISkUxtJki3LYx35UOxD5e97S2tLsmcq3L7dfmuvPzKqzJfWdc1ziU_MumVl5Y7Th9kpiw2IeC3r2Sj56y7DHSCMdeG6WcKP9fGSwafEMy-hyoxn9Eab175p_I4lkcd4AL-LcpUXjbTwlUrAvluSmpC6Jr56ve14E-hYQI"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="text-[11px] text-accent-orange font-medium ml-2">شما</span>
              <div className="bg-accent-orange text-background-dark font-bold p-4 rounded-2xl rounded-tl-none neon-glow-orange">
                <p className="text-sm leading-relaxed">سلام، من علی هستم، ۲۸ ساله و ۸۰ کیلوگرم.</p>
              </div>
              <span className="text-[10px] text-white/30 ml-2 mt-1 font-display">10:13 AM</span>
            </div>
          </div>
          <div className="flex items-start gap-3 max-w-[85%] self-start">
            <div className="size-10 rounded-full bg-gradient-to-br from-primary to-purple-400 p-[2px] neon-glow-purple shrink-0">
              <div className="bg-background-dark rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="AI smart coach avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHiNVxcykQzXynODYP1rfF5KQb2Nf8a1lmPrZME03IfMo7JpuL9d-pW_kFjwxsWMVxAMk5C9MV3OuE9bqG9H5pyXiGCVRTKjudsLEzJWNshiZpBz0BM0CBpPvutuIjL1WbofamnXPaSMo78LJs4bu8L4hbfUxu56LsgBf8lGNA-EnrasgGN1SE24NoWbfYG8XKYbgEpNwqSiP0-7mJD2PNulO9XIyOFIadM2Nk93OK2bKp9mRqkC1EdCGCErALPlmYKVBbZiQVH0w"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-primary font-medium mr-2">مربی هوشمند</span>
              <div className="bg-primary/20 border border-primary/30 text-white p-4 rounded-2xl rounded-tr-none neon-glow-purple">
                <p className="text-sm leading-relaxed">
                  عالیه علی جان! خوشحالم که اینجایی. بر اساس اطلاعاتت، یک برنامه پیاده‌روی شخصی‌سازی شده برات آماده
                  می‌کنم. هدفت چیه؟
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-panel p-4 pb-2">
          <div className="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 px-4 h-12">
            <button className="text-accent-orange">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm flex-1 placeholder:text-white/20 text-white"
              placeholder="اینجا بنویسید..."
              type="text"
            />
            <button className="bg-primary size-8 rounded-lg flex items-center justify-center neon-glow-purple">
              <span className="material-symbols-outlined text-white text-[20px]">arrow_back</span>
            </button>
          </div>
        </div>
        <div className="ios-keyboard-bg w-full p-1.5 pt-3 pb-8 space-y-3">
          <div className="flex justify-center gap-1.5 px-1">
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ض</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ص</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ث</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ق</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ف</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">غ</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ع</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ه</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">خ</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ح</div>
          </div>
          <div className="flex justify-center gap-1.5 px-4">
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ش</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">س</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ی</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ب</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ل</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ا</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ت</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ن</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">م</div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ک</div>
          </div>
          <div className="flex justify-between gap-1.5 px-1">
            <div className="bg-[#acacac]/20 w-11 h-11 rounded-md flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">shift</span>
            </div>
            <div className="flex-1 flex gap-1.5">
              <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ظ</div>
              <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ط</div>
              <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ز</div>
              <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ر</div>
              <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">ذ</div>
              <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">د</div>
              <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-lg">و</div>
            </div>
            <div className="bg-[#acacac]/20 w-11 h-11 rounded-md flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">backspace</span>
            </div>
          </div>
          <div className="flex justify-between gap-1.5 px-1">
            <div className="bg-[#acacac]/20 w-20 h-11 rounded-md flex items-center justify-center text-sm font-display">
              123
            </div>
            <div className="bg-[#acacac]/20 w-11 h-11 rounded-md flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">emoji_emotions</span>
            </div>
            <div className="ios-key flex-1 h-11 rounded-md flex items-center justify-center text-sm">فاصله</div>
            <div className="bg-primary w-24 h-11 rounded-md flex items-center justify-center text-sm font-bold">
              تایید
            </div>
          </div>
          <div className="flex justify-center pt-2">
            <div className="w-32 h-1.5 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}



function ChatPage() {
  const [step, setStep] = useState('name');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [recommendedSteps, setRecommendedSteps] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'سلام به قدم خوش آمدید. ما در قدم شما را به سمت زندگی سالم هدایت می‌کنیم. لطفاً برای اینکه بتوانیم بهتر کمکتان کنیم، اطلاعاتی که از شما پرسیده می‌شود را مرحله به مرحله و با دقت وارد کنید.',
    },
    {
      id: 2,
      sender: 'bot',
      text: 'لطفاً نام و نام خانوادگی خود را وارد کنید.',
    },
  ]);

  const messageIdRef = useRef(3);
  const messagesEndRef = useRef(null);

  const addMessage = (sender, text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: messageIdRef.current++,
        sender,
        text,
      },
    ]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  const getInputPlaceholder = () => {
    if (step === 'name') {
      return 'نام و نام خانوادگی خود را اینجا بنویسید...';
    }
    if (step === 'height') {
      return 'قد خود را بر حسب سانتی‌متر وارد کنید...';
    }
    if (step === 'weight') {
      return 'وزن خود را بر حسب کیلوگرم وارد کنید...';
    }
    if (step === 'result') {
      return 'گفتگو تکمیل شد.';
    }
    return 'اینجا بنویسید...';
  };

  const handleSubmitText = () => {
    const value = inputValue.trim();
    if (!value || step === 'gender' || step === 'result') return;

    if (step === 'name') {
      setName(value);
      addMessage('user', value);

      addMessage(
        'bot',
        `از آشنایی با شما خوشبختم ${value}، لطفاً برای ادامه جنسیت خود را تأیید کنید.`
      );
      setStep('gender');
      setInputValue('');
      return;
    }

    if (step === 'height') {
      const parsedHeight = parseInt(value, 10);
      if (Number.isNaN(parsedHeight) || parsedHeight <= 0) return;

      setHeight(parsedHeight);
      addMessage('user', `قد من ${parsedHeight} سانتی‌متر است.`);

      const standardHeight =
        gender === 'female' ? 165 : gender === 'male' ? 175 : 170;

      if (parsedHeight > standardHeight) {
        addMessage(
          'bot',
          'هوووم، عالیه! قد شما از استاندارد جهانی بیشتر است. لطفاً برای ادامه وزن خود را وارد کنید.'
        );
      } else {
        addMessage(
          'bot',
          `${name ? `${name} عزیز، ` : ''}لطفاً برای ادامه وزن خود را وارد کنید.`
        );
      }

      setStep('weight');
      setInputValue('');
      return;
    }

    if (step === 'weight') {
      const parsedWeight = parseFloat(value.replace(',', '.'));
      if (Number.isNaN(parsedWeight) || parsedWeight <= 0 || !height) return;

      setWeight(parsedWeight);
      addMessage('user', `وزن من ${parsedWeight} کیلوگرم است.`);

      const heightInMeters = height / 100;
      const calculatedBmi = parsedWeight / (heightInMeters * heightInMeters);
      const roundedBmi = Number.isFinite(calculatedBmi)
        ? Number(calculatedBmi.toFixed(1))
        : null;

      let status = '';
      let stepsPerDay = 8000;

      if (roundedBmi !== null) {
        if (roundedBmi < 18.5) {
          status = 'کمبود وزن';
          stepsPerDay = 6000;
        } else if (roundedBmi < 25) {
          status = 'وزن نرمال';
          stepsPerDay = 8000;
        } else if (roundedBmi < 30) {
          status = 'اضافه وزن';
          stepsPerDay = 10000;
        } else {
          status = 'اضافه وزن (چاقی)';
          stepsPerDay = 12000;
        }
      }

      setBmi(roundedBmi);
      setRecommendedSteps(stepsPerDay);

      if (roundedBmi !== null) {
        let messageText = '';

        if (status === 'وزن نرمال') {
          messageText = `طبق شاخص BMI شما در محدوده وزن نرمال هستید. برای حفظ وضعیت فعلی، پیشنهاد می‌کنم روزانه حدود ${stepsPerDay.toLocaleString(
            'fa-IR'
          )} قدم پیاده‌روی کنید. (BMI شما حدود ${roundedBmi} است)`;
        } else {
          messageText = `طبق شاخص BMI شما ${status} دارید و برای مدیریت بهتر وزن، نیاز است در روز حدود ${stepsPerDay.toLocaleString(
            'fa-IR'
          )} قدم پیاده‌روی کنید. (BMI شما حدود ${roundedBmi} است)`;
        }

        addMessage('bot', messageText);
      }

      setStep('result');
      setInputValue('');
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmitText();
    }
  };

  const handleConfirmGender = () => {
    if (!selectedGender) return;

    setGender(selectedGender);

    const genderText = selectedGender === 'female' ? 'زن هستم.' : 'مرد هستم.';
    addMessage('user', genderText);

    addMessage(
      'bot',
      `${name ? `${name} عزیز، ` : ''}لطفاً قد خود را بر حسب سانتی‌متر وارد کنید.`
    );

    setStep('height');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-white overflow-hidden">
      <div className="relative flex h-screen w-full flex-col bg-background-dark shadow-2xl overflow-hidden border-x border-primary/10">
        <div className="flex items-center justify-between px-6 pt-4 pb-2 text-xs font-bold">
          <span className="font-display">9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[16px]">wifi</span>
            <span className="material-symbols-outlined text-[20px]">battery_full</span>
          </div>
        </div>
        <div className="flex items-center px-4 py-2 justify-between">
          <button className="text-white/60 p-2">
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
            راه‌اندازی حساب کاربری
          </h2>
          <div className="w-10" />
        </div>
        <div className="px-6 py-2">
          <div className="flex justify-between items-center mb-1 text-[10px] text-primary font-bold">
            <span>تکمیل پروفایل</span>
            <span className="font-display">25%</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full neon-glow-purple" style={{ width: '25%' }} />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6 flex flex-col pt-8">
          {messages.map((message) =>
            message.sender === 'bot' ? (
              <div key={message.id} className="flex items-start gap-3 max-w-[85%] self-start">
                <div className="relative shrink-0">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary to-purple-400 p-[2px] neon-glow-purple">
                    <div className="bg-background-dark rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="AI smart coach avatar with neon glow"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOtCrNPZavp0Pq2ugTR3ryo7SOHZuceQTEKd8euEb2ia4c-Z7FWmyQ9VxtjZYk2OiWTZ0jdRP_bv3BdtUSikiKvTnRfyiH2Sgff2yz3lYvUZBdFy5dx8rVKatYKhnoIDixkrT89ZIOSGNBM9c5YwyQgDGwQt7wVs25c--MA4ulg7gus0rRJ6rHLgzU-_vzKmb3TbLS4OKoeNNyYXD34QRASA9o8cC6sw5ePft1Oj5t2UbuDMQ-8EbjeSa1TaHqITZ61JIpZWlhEMA"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-background-dark" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-primary font-medium mr-2">مربی هوشمند</span>
                  <div className="bg-primary/20 border border-primary/30 text-white p-4 rounded-2xl rounded-tr-none neon-glow-purple">
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex items-start gap-3 max-w-[85%] self-end flex-row-reverse">
                <div className="shrink-0">
                  <div className="size-10 rounded-full bg-gradient-to-br from-accent-orange to-orange-400 p-[2px] neon-glow-orange">
                    <div className="bg-background-dark rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="User profile avatar placeholder"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh7WkLtNF4PnTwg59Xk6c70dpTFEddyBN4DfiRwUwOSdmBVmg5eIqOyV691UXfYqESpfcBS8tF_919V8JvTHYjZvFwZRPbiPBYSAdex7ISkUxtJki3LYx35UOxD5e97S2tLsmcq3L7dfmuvPzKqzJfWdc1ziU_MumVl5Y7Th9kpiw2IeC3r2Sj56y7DHSCMdeG6WcKP9fGSwafEMy-hyoxn9Eab175p_I4lkcd4AL-LcpUXjbTwlUrAvluSmpC6Jr56ve14E-hYQI"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[11px] text-primary font-medium ml-2">شما</span>
                  <div className="bg-primary text-white font-bold p-4 rounded-2xl rounded-tl-none neon-glow-orange neo-surface-sm">
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            )
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="glass-panel p-4 pb-2">
          <div className="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 px-4 h-12">
            {step === 'gender' ? (
              <>
                <div className="flex items-center gap-4 flex-1 text-xs">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={selectedGender === 'female'}
                      onChange={(event) => setSelectedGender(event.target.value)}
                      className="accent-primary"
                    />
                    <span>زن</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={selectedGender === 'male'}
                      onChange={(event) => setSelectedGender(event.target.value)}
                      className="accent-primary"
                    />
                    <span>مرد</span>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleConfirmGender}
                  className="bg-primary px-3 h-8 rounded-lg flex items-center justify-center text-xs font-bold neon-glow-purple disabled:opacity-40"
                  disabled={!selectedGender}
                >
                  تایید
                </button>
              </>
            ) : (
              <>
                <button className="text-accent-orange" type="button">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm flex-1 placeholder:text-white/20 text-white"
                  placeholder={getInputPlaceholder()}
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  disabled={step === 'result'}
                />
                <button
                  className="bg-primary size-8 rounded-lg flex items-center justify-center neon-glow-purple disabled:opacity-40"
                  type="button"
                  onClick={handleSubmitText}
                  disabled={step === 'result'}
                >
                  <span className="material-symbols-outlined text-white text-[20px]">arrow_back</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
