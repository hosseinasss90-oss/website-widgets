// ── پیش‌نمایش تعاملی کارت‌های محصول (فقط برای بازبینی طرح) ──

const stage = document.getElementById('stage');
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// سوییچ دستگاه (دسکتاپ / تبلت / موبایل)
document.querySelectorAll('.dev').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dev').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    stage.dataset.device = btn.dataset.dev;
  });
});

// علاقه‌مندی‌ها
document.querySelectorAll('.wish').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const on = btn.classList.toggle('active');
    btn.setAttribute('aria-pressed', String(on));
    showToast(on ? 'به علاقه‌مندی‌ها اضافه شد (نمایشی)' : 'از علاقه‌مندی‌ها حذف شد (نمایشی)');
  });
});

// افزودن به سبد (نمایشی)
document.querySelectorAll('.add-btn:not(.disabled)').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('به سبد خرید اضافه شد (نمایشی)');
  });
});

// انتخاب سایز (تک‌انتخابی)
document.querySelectorAll('.c4-sizes').forEach((group) => {
  group.querySelectorAll('.size:not(.off)').forEach((chip) => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.size').forEach((c) => c.classList.remove('sel'));
      chip.classList.add('sel');
    });
  });
});

// جلوگیری از پرش لینک‌های نمایشی
document.querySelectorAll('a[href="#"]').forEach((a) => {
  a.addEventListener('click', (e) => e.preventDefault());
});

// انیمیشن ورود پلکانی + نوار موجودی هنگام اسکرول
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.card').forEach((c) => io.observe(c));
