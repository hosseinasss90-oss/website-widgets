# راهنمای ایمپورت قالب‌های JSON در Elementor Pro

پنج فایل `loop-card-*.json` = پنج قالب **Loop Item** مطابق `docs/elementor-product-cards-build-guide.md`.
متن‌ها و عددهای داخل قالب‌ها **نمونهٔ ثابت** هستند؛ بعد از ایمپورت، ویجت‌هایی که برچسب `dyn→` دارند را با تگ داینامیک وصل کنید (جدول پایین).

## ۱) ایمپورت
1. وردپرس ← **Templates → Saved Templates → Import Templates** ← انتخاب هر پنج فایل.
2. قالب‌ها با نوع `loop-item` ساخته می‌شوند و در **Theme Builder ← Loop Items** و در انتخابگرِ ویجت **Loop Grid / Loop Carousel** (`Choose Template`) قابل انتخاب‌اند.
3. **اگر در انتخابگر Loop Grid دیده نشدند** (تفاوت نسخه): یک Loop Item جدید در Theme Builder بسازید ← قالب ایمپورت‌شده را باز کنید ← روی بخش ریشه راست‌کلیک ← **Copy All Content** ← در Loop Item جدید **Paste** کنید. (این مسیر همیشه کار می‌کند.)

## ۲) اتصال تگ‌های داینامیک (آیکن داینامیک کنار فیلد هر ویجت)
در هر قالب، ویجت‌های داده با پیشوند `_title` زیر نام‌گذاری شده‌اند (در Navigator می‌بینید):

| برچسب ویجت | تگ داینامیک Elementor (بخش WooCommerce) |
|---|---|
| `dyn→Product Title` | Product Title |
| `dyn→Product Price` | Product Price (قیمت خط‌خوردهٔ حراج خودکار چاپ می‌شود) |
| `dyn→Product Rating` | Product Rating |
| `dyn→Product Sale` | Product Sale (بدون bg گذاشته شده؛ خالی = نامرئی) |
| `dyn→Product Stock` | Product Stock |
| `dyn→Product Terms` | Product Terms (taxonomy = product_cat) |
| `dyn→Product Image` (ویجت Image) | Product Image |

## ۳) تکمیل دستی (مطابق راهنمای اصلی)
- **کارت ۲ و ۴:** ویجت Call to Action را باز کنید و در Style: Image Hover Animation = Zoom In · Transition ≈ 500-600ms · Content Hover Animation = Slide Up/Fade · **Sequenced Animation = Yes** · Overlay Normal/Hover = `rgba(11,17,32,.25/.45)`.
- **دکمهٔ افزودن به سبد:** برای افزودن AJAX واقعی، ویجت Button را با ویجت **Add to Cart** (Woo) جایگزین و همان استایل را کپی کنید (کارت‌های ۱ و ۵).
- **موقعیت Absolute** بج‌ها/آیکن‌ها: کلیدهای position در JSON best-effort است؛ اگر بعد از ایمپورت بج‌ها در جریان عادی بودند، در Advanced ← Positioning حالت Absolute و آفست ۱۲px را دستی بزنید (۳۰ ثانیه per template).
- **فونت:** وزیرمتن را یک‌بار در **Custom Fonts** آپلود کنید و Global Fonts راهنما را روی آن بگذارید؛ خانوادهٔ تایپوگرافی ویجت‌ها روی Vazirmatn ست شده است.
- **رنگ‌ها:** مطابق جدول Global Colors در بخش ۰. راهنما؛ رنگ‌های ثابتِ JSON همان توکن‌ها هستند.

## ۴) بازتولید فایل‌ها
`node _generator.mjs` — ساختار درخت‌ها از روی بخش‌های ۱ تا ۵ راهنمای اصلی پیاده‌سازی شده است.
