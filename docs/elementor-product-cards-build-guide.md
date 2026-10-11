# راهنمای ساخت قالب المنتوری — ۵ کارت محصول
**Elementor Pro (Loop Builder) + WooCommerce · کاملاً RTL · بدون HTML / بدون Custom CSS**

> پایه: هر ۵ کارت به‌صورت ۵ قالب **Loop Item** جداگانه ساخته می‌شوند و با ویجت‌های **Loop Grid** (آرشیو/فروشگاه) و **Loop Carousel** (صفحه اصلی) استفاده می‌شوند. همهٔ مقادیر رنگ/تایپوگرافی از **Global Settings** خوانده می‌شوند تا شخصی‌سازی بعدی یک‌جایی باشد.

---

## ۰) تنظیمات سراسری (یک‌بار، قبل از همهٔ کارت‌ها)

### ۰. مسیر: Site Settings (منوی همبرگری ادیتور ← Site Settings)

**Global Colors:**

| نام | کد | کاربرد |
|---|---|---|
| Primary | `#2563EB` | قیمت‌ها، لینک‌ها، دکمه‌های اصلی |
| Primary Dark | `#1D4ED8` | هاور دکمه اصلی |
| Accent | `#F59E0B` | ستاره‌ها، برچسب پرفروش |
| Success | `#10B981` | نقطهٔ موجودی |
| Text | `#111827` | عنوان‌ها روی روشن |
| Muted | `#6B7280` | متن‌های ثانویه |
| Surface | `#FFFFFF` | پس‌زمینهٔ کارت روشن |
| Border | `#E5E7EB` | حاشیه‌ها و جداکننده‌ها |
| Dark | `#0B1120` | پس‌زمینهٔ کارت نئون |
| Neon | `#22D3EE` | اکسنت کارت ۳ |

**Global Fonts (خانوادهٔ همه: Vazirmatn):**

| نام | وزن | سایز دسکتاپ | کاربرد |
|---|---|---|---|
| Card Title | ۷۰ | ۱۸px / خط ۱.۶ | عنوان محصول |
| Card Meta | ۵۰۰ | ۱۲px | دسته، امتیاز، موجودی |
| Card Price | ۸۰۰ | ۲۰px | قیمت |
| Card Body | ۴۰۰ | ۱۴px | توضیح/مشخصات |

> فونت وزیرمتن را یک‌بار از **Custom Fonts** (Elementor Pro) آپلود کنید (woff2 متغیر کافی است) و خانوادهٔ Global Fonts را روی آن بگذارید. در پاسخ‌گر تبلت/موبایل سایزها را −۲px دهید (از آیکن دستگاه کنار هر کنترل).

**Layout:** Widgets Space = `16` · RTL: چون زبان وردپرس `fa_IR` است، همهٔ Rowها خودکار راست‌به‌چپ می‌چینند؛ **Row Reverse فقط وقتی لازم می‌شود که بخواهید ترتیب بصری را برعکسِ RTL کنید** (در این ۵ کارت نیاز نداریم؛ DOM طوری چیده شده که RTL درستش می‌کند).

### ۰.۲ ساخت هر Loop Item
مسیر: **Templates → Theme Builder ← Loop Item ← Add New** (یا راحت‌تر: ویجت Loop Grid را در صفحه بیندازید ← دکمهٔ **Create Template** ← نوع محتوا **Products**).
نام قالب‌ها: `loop-card-1-minimal` ، `loop-card-2-glass` ، `loop-card-3-neon` ، `loop-card-4-fashion` ، `loop-card-5-split`.

> **میان‌بر:** فایل‌های JSON آمادهٔ همین پنج قالب در پوشهٔ `elementor-templates/` مخزن هستند؛ با **Saved Templates ← Import Templates** ایمپورت‌شان کنید و سپس تگ‌های داینامیک را طبق `elementor-templates/README-IMPORT.md` وصل کنید.

### ۰.۳ جایگزینی کارت پیش‌فرض ووکامرس در آرشیو
1. **Theme Builder ← Add New ← Product Archive** (نام: `archive-products-custom`).
2. داخل آن یک **Container** عمودی بگذارید و ویجت **Loop Grid** را داخلش بیندازید.
3. در Loop Grid: `Content ← Choose Template` = قالب Loop Item موردنظر · `Source = Products`.
4. ستون‌ها: Layout ← Columns: دسکتاپ ۳ (کارت ۵: یک ستون لیستی) · تبلت ۲ · موبایل ۱ · Rows Gap / Columns Gap = `16`.
5. **Publish ← Add Condition ← Include: All Product Archives** (یا Shop Page). از این به بعد کارت پیش‌فرض قالب/ووکامرس در فروشگاه و دسته‌ها با کارت شما جایگزین می‌شود.
6. برای صفحه اصلی: ویجت **Loop Carousel** ← همان قالب Loop Item ← Source: Products ← Query: On Sale / Featured · Slides to Show: دسکتاپ ۴ / تبلت ۲.۵ / موبایل ۱.۲ (Peek برای حس اسلایدر).

### ۰.۴ قاعدهٔ هاورها (مهم)
- کنترل‌های **Transform (Move/Scale/Rotate/Skew) با دو حالت Normal/Hover** و **Transition (Duration/Timing)** در نسخه‌های جدید در `Style Tab → Effects` هستند و روی **ویجت و کانتینر** کار می‌کنند. در نسخه‌های قدیمی‌تر فقط `Advanced → Transform` و **فقط روی ویجت** وجود دارد — در آن حالت، ترنسفورم را به ویجتِ داخلی بسپارید نه کانتینر.
- **هاورِ «والد» (هاور روی کل کارت ← واکنش فرزند)** به‌صورت بومی فقط داخل ویجت **Call to Action** وجود دارد (Hover Animation تصویر/محتوا + Sequenced Animation + Transition Duration). کارت‌های ۲ و ۴ از همین ویجت به‌عنوان شاسی استفاده می‌کنند؛ بقیهٔ کارت‌ها هاورِ «خود عنصر» دارند که بدون کد کافی و درست است.
- Elementor **نمایش شرطی ویجت ندارد** (مثلاً «برچسب تخفیف فقط اگر حراج بود»). راه‌حل ویجتی هر جا لازم شد در بخش همان کارت آمده است (قاعدهٔ ۰.۵).

### ۰.۵ قاعدهٔ برچسب تخفیف بدون کد (برای همهٔ کارت‌ها)
1. **سیگنال اصلی تخفیف = قیمت خط‌خوردهٔ خودکار:** تگ داینامیک **Product Price** در حالت حراج، خودِ ووکامرس قیمت قبلی را با `<del>` خط‌خورده چاپ می‌کند — هیچ شرطی لازم نیست.
2. **برچسب گوشهٔ کارت = دسته‌بندی (همیشه پُر):** کانتینر + Heading با تگ **Product Terms** — چون همیشه محتوا دارد، مشکل «قرصِ خالی» ندارد.
3. **متن «حراج» قرمز کنار قیمت:** یک Heading با تگ **Product Sale** و **بدون پس‌زمینه/پدینگ روی خود ویجت** (استایل pill ممنوع) — وقتی محصول حراج نباشد، تگ خالی برمی‌گرداند و عنصرِ بدونِ پس‌زمینه **نامرئی** می‌شود؛ وقتی حراج باشد، متن قرمز کنار قیمت ظاهر می‌شود. یعنی: pill همیشه‌نما = دسته؛ سیگنال تخفیف = خط‌خورده + متن حراج.
4. درصد تخفیف عددی بدون کد قابل محاسبه نیست؛ اگر روزی کد مجاز شد، اولین ارتقا همین درصد خواهد بود.

### ۰.۶ قاعدهٔ موجودی بدون کد
- خط موجودی = Icon (نقطه) + Heading با تگ **Product Stock** و پیشوند «موجودی: » (از تنظیمات Before/After خودِ تگ داینامیک). برای محصولاتِ بدون مدیریت انبار، این خط را در قالب حذف کنید (چون نمایش شرطی بومی نیست) و به رفتار استاندارد ووکامرس در صفحهٔ محصول تکیه کنید.
- دکمهٔ **Add to Cart** به‌صورت خودکار: محصول ساده ← افزودن AJAX؛ متغیر ← «انتخاب گزینه‌ها» و لینک به صفحهٔ محصول؛ ناموجود ← حالت استاندارد ووکامرس. هیچ شرطی لازم نیست.

---

## ۱) کارت ۱ — مینیمالِ ادیتوریال (`loop-card-1-minimal`)

**نوع قالب:** Loop Item · **محل استفاده:** Loop Grid در Product Archive (۳ ستون) و Loop Carousel صفحه اصلی.

### درخت ساختار
```
Container «card1» (Column · نام: card1-root)
├─ Container «card1-media» (Column · پوزیشن Relative · Overflow Hidden)
│  ├─ Container «card1-badges» (Row · پوزیشن Absolute بالا-چپ/راست)
│  │  ├─ Container+Heading «badge-cat»  ← Dynamic: Product Terms
│  │  └─ Icon «wish-icon» (آیکن قلب)
│  └─ Image «card1-img» ← Dynamic: Product Image (تگ رسانهٔ Woo)
├─ Container «card1-body» (Column · Gap 8)
│  ├─ Container «card1-meta» (Row · Space Between)
│  │  ├─ Heading «card1-cat-text» (اختیاری، متن دسته)
│  │  └─ Heading «card1-rate» ← Dynamic: Product Rating
│  ├─ Heading «card1-title» ← Dynamic: Product Title
│  ├─ Container «card1-price-row» (Row · Align Baseline · Gap 8)
│  │  ├─ Heading «card1-price» ← Dynamic: Product Price
│  │  └─ Heading «card1-sale-text» ← Dynamic: Product Sale (بدون bg)
│  ├─ Container «card1-stock» (Row · Gap 6)
│  │  ├─ Icon «stock-dot»
│  │  └─ Heading «stock-text» ← Dynamic: Product Stock (Before: «موجودی: »)
│  └─ Button «card1-add» ← متن «افزودن به سبد خرید» + آیکن سبد
```

### تنظیمات کلیدی
- **card1-root:** Layout Column · Align Items Stretch · Background = Global Surface · Border 1px Global Border · Radius `16` · Padding `0` · Overflow Hidden · Transition: `box-shadow,border-color,transform 0.3s ease-out`.
  - Hover (Style→Effects یا هاورِ Background/Border/Shadow در Style): Box Shadow Hover = `0 4px 12px rgba(17,24,39,.08)` · Border Color Hover = `#D1D5DB` · Transform Hover: Move Y `-4px` · Transition Duration `300ms`.
- **card1-media:** Background `#F8FAFC` · Padding `12` · Border Bottom 1px Global Border.
- **card1-img (ویجت Image با تگ داینامیک Product Image):**
  - Content ← Image ← Dynamic Tags ← **Product Image** · Link ← Dynamic: **Product URL** (کلیک روی عکس → محصول).
  - Style: Image Ratio/Size = `woocommerce_single` یا Large · Width 100% · Object Fit `Cover` · Radius `10`.
  - Effects: Transform Hover = Scale `1.04` · Transition `400ms ease-out`.
- **badge-cat:** کانتینر Row با Background `#DBEFE...` — دقیق‌تر: Background `#DBEAFE` · Radius `8` · Padding `4px 10px`؛ Heading داخلی: Global Meta + رنگ `#1D4ED8` · تگ **Product Terms** (Separator: «، »).
- **wish-icon:** ویجت Icon (قلب) · Size `20` · Color `#475569` · Hover Color = `#DC2626` · Width/Height در Advanced: `44×44` (با Padding `10`) برای تاچ‌تارگت.
- **card1-rate:** Global Meta · قبل از متن آیکن ستاره با ویجت Icon (رنگ Global Accent، اندازه ۱۴) در همان Row.
- **card1-title:** Global Card Title · Color Global Text · **Hover Color = Global Primary** (تب Hover در Style Heading). شفاف: line-clamp متن بدون کد در المنتور نیست؛ راه ویجتی = ارتفاع ثابت کارت با **Equal Height** در Loop Grid + Min-Height روی root تا کارت‌ها تراز بمانند و عنوان دومحوره جا شود.
- **card1-price:** Global Card Price · Color Global Primary.
- **card1-sale-text:** Global Meta · Color `#DC2626` · **بدون Background/Padding** (قاعدهٔ ۰.۵).
- **stock-dot:** Icon دایرهٔ کوچک ۸px رنگ Global Success. **stock-text:** Global Meta · رنگ `#047857`.
- **card1-add:** Button · Background `#F8FAFC` · Border 1px Global Border · Radius `12` · Typography Global Card Body weight 700 · Padding `12px 16px` · Icon سبد قبل از متن (در RTL خودکار سمت راست).
  - Hover: Background `#EFF6FF` · Border Color Global Primary · Text Color `#1D4ED8` · Effects Transform Hover: Move X `-3px` روی خود دکمه حس «جلو رفتن» می‌دهد · Transition `200ms`.
- **Advanced روی root:** برای هم‌قد بودن کارت‌ها در گرید: `Layout ← Equal Height`? در Loop Grid خود ویجت گزینهٔ **Equal Height / Stretch** دارد (Content ← Layout ← Equal height items = Yes) — فعالش کنید.

### ریسپانسیو
- دسکتاپ: عنوان 18 · قیمت 20 · padding بدن 16.
- تبلت: عنوان 17 · قیمت 19 · gap گرید 16 (از Loop Grid).
- موبایل: عنوان 16 · قیمت 18 · padding بدن `12` · padding مدیا `10` · دکمه تمام‌عرض (Width 100%).

### انیمیشن‌ها
- Entrance (اختیاری برای بلوک صفحه اصلی): روی card1-root ← Advanced ← Entrance Animation = `Fade In Up` · Duration `400ms`. در آرشیو خاموش (با Load More پرش می‌سازد).
- ترتیب هاور: سایه/لیفت (۰ms) ← زوم عکس (~۶۰ms با Transition جدا ۴۰ms) ← رنگ عنوان ← دکمه. (هر عنصر Transition خودش را دارد؛ توالی با Delay در Transition حاصل می‌شود: Delay عنوان `120ms`، دکمه `180ms`.)

### چک‌لیست ووکامرس
- متغیر: دکمه خودکار «انتخاب گزینه‌ها» ✓ · تخفیف‌دار: خط‌خوردهٔ خودکار + متن حراج ✓ · ناموجود: عدد موجودی ۰ + رفتار استاندارد دکمه ✓ · عنوان بلند: wrap دومحوره با ارتفاع ثابت کارت (Equal Height) ✓ · نسبت‌های مختلف تصویر: Object Fit Cover + Aspect Ratio ثابت در مدیا ✓.

---

## ۲) کارت ۲ — ویترینِ شیشه‌ای (`loop-card-2-glass`)

**شاسی: ویجت Call to Action (Pro)** — چون هاورِ والد (زوم عکس + توالی محتوا با هاور روی هر نقطهٔ کارت) فقط اینجا بومی است.
**نوع قالب:** Loop Item · **محل استفاده:** Loop Grid دو ستونه (بخش «پیشنهاد ویژه») و Loop Carousel.

### درخت ساختار
```
Container «card2-root» (Column · Radius 20 · Overflow Hidden)
├─ Call to Action «card2-cta»   ← شاسی کامل کارت
├─ Container «card2-badges» (Row · Absolute بالا)
│  ├─ Container+Heading «badge-sale-or-cat» (Product Terms / Product Sale متن ساده)
│  └─ Container «card2-icons» ← Icon قلب + Icon چشم (همیشه نمایان)
```
> پنل شیشه‌ای = بخش Content خودِ CTA (روی تصویر + Overlay). بلور واقعی (backdrop-filter) بدون کد در هستهٔ المنتور نیست؛ جایگزین ویجتی: **Overlay تیرهٔ نیمه‌شفاف + حاشیهٔ روشن** که ۹۰٪ حس شیشه را می‌دهد.

### تنظیمات Call to Action
- **Content:** Image ← Dynamic **Product Image** · Title ← Dynamic **Product Title** · Description ← ویرایشگر متن: خط ۱ = Dynamic **Product Rating** + « · » + Dynamic **Product Terms**؛ خط ۲ = Dynamic **Product Price** (بولد) — همه از آیکن داینامیک داخل همان فیلد. · Button Text = «افزودن به سبد» · Button Link ← Dynamic **Product URL** (برای محصول متغیر کاربر به صفحهٔ محصول می‌رود و آنجا انتخاب می‌کند — رفتار درست UX).
- **Content ← Layout:** Content Position = Bottom · Horizontal = Start (در RTL = راست) · Skin = «Cover».
- **Style ← Image:** Height/Aspect: با `Advanced` ارتفاع ویجت را دسکتاپ `480px` / موبایل `420px` (نسبت ۴:۵ تقریبی با عرض ستون) · Image Object Fit = Cover · **Hover Animation = Zoom In** · Transition Duration (Hover) = `600ms`.
- **Style ← Overlay:** Normal = گرادیان نیست (CTA اورلی تک‌رنگ دارد) → رنگ `rgba(11,17,32,0.25)` · Hover = `rgba(11,17,32,0.45)` — تیره‌شدن تدریجی زیر پنل، نقش گرادیان موکاپ را بازی می‌کند.
- **Style ← Content:** Title: سفید · Global Card Title +2px (دسکتاپ 20) · Description: `rgba(255,255,255,.85)` · 13px · Button: Background `rgba(255,255,255,.16)` · Border 1px `rgba(255,255,255,.4)` · Radius `12` · Text سفید · Height `44` · **Hover Animation محتوا = Fade In / Move Up** + **Sequenced Animation = Yes** (تیتر ← توضیح ← دکمه پلکانی) · Animation Duration `300ms` · Button Hover: Background `#FFFFFF` · Text `#111827`.
- **حس شیشه روی پنل محتوا:** CTA کنترل Background جدا برای باکس محتوا ندارد → راه ویجتی: **Overlay Color هاور** + Title/Description روی همان اورلی؛ اگر پنل مجزا می‌خواهید، Skin «Boxed» را تست کنید (محتوا داخل باکس رنگی می‌نشیند؛ رنگ باکس = `rgba(11,17,32,.45)` + Radius 16).
- **card2-badges:** کانتینر Absolute (Advanced ← Positioning Absolute · Top 12 · Inset Inline Start 12) · z-index 5. آیکن‌ها: `44×44` · Background `rgba(11,17,32,.35)` · Border `rgba(255,255,255,.25)` · Color سفید · Hover Background `rgba(11,17,32,.55)`. **همیشه نمایان** (نه فقط هاور) — هم برای موبایل، هم برای فوکوس کیبورد.

### ریسپانسیو
- دسکتاپ: ارتفاع 480 · عنوان 20 · دکمه 44.
- تبلت: ارتفاع 440 · عنوان 18.
- موبایل: ارتفاع 400 · عنوان 16 · قیمت/توضیح 12 · پدینگ باکس محتوا 12.

### انیمیشن‌ها
- Entrance: خاموش در آرشیو؛ `Fade In` 500ms فقط در کاروسل صفحه اصلی.
- هاور (همهٔ والد-تریگر، بومی CTA): زوم تصویر 600ms · اورلی 300ms · توالی محتوا 0/60/120ms · دکمه 250ms.

### چک‌لیست ووکامرس
متغیر ← دکمه به صفحهٔ محصول ✓ · تخفیف ← خط‌خورده داخل Description (بولدِ قیمت جدید + del خودکار) ✓ · ناموجود ← متن حراج/موجودی در Description با تگ Product Stock ✓ · تصویر عمودی/افقی ← Object Fit Cover ✓.

---

## ۳) کارت ۳ — نئونِ دارک (`loop-card-3-neon`)

**نوع قالب:** Loop Item · **محل استفاده:** Loop Grid در آرشیو فروشگاه دیجیتال (پس‌زمینهٔ سکشن آرشیو = Global Dark).

### درخت ساختار
```
Container «card3-outer» (Column · Padding 1px · Background گرادیان 135°: #22D3EE→#6366F1 · Radius 20)
└─ Container «card3» (Column · Background Global Dark · Radius 19 · Padding 16 · Gap 12)
   ├─ Container «card3-top» (Row · Space Between)
   │  ├─ Container+Icon+Heading «badge-hot» ← استاتیک «پرفروش» (یا Dynamic Product Terms)
   │  └─ Container «card3-icons» ← Icon قلب + Icon مقایسه
   ├─ Container «card3-media» (Column · Relative · Overflow Hidden · Radius 14)
   │  ├─ Container «card3-glow» (Absolute · گرادیان شعاعی rgba(34,211,238,.35) · CSS Filters Blur)
   │  └─ Image «card3-img» ← Dynamic Product Image
   ├─ Heading «card3-title» ← Product Title
   ├─ Container «card3-chips» (Row · Gap 8) ← ۳× (Icon+Heading استاتیک یا Dynamic Product Terms/SKU)
   ├─ Container «card3-stock» (Column · Gap 6)
   │  ├─ Container (Row) ← Icon نقطه + Heading «فقط X عدد» ← Dynamic Product Stock
   │  └─ Progress Bar «stock-bar» (ویجت بومی Progress Bar)
   ├─ Container «card3-price-row» (Row · Gap 10)
   │  └─ Heading «card3-price» ← Product Price  + Heading «card3-sale» ← Product Sale (متن ساده)
   └─ Button «card3-add» ← «افزودن سریع به سبد» + آیکن برق
```

### تنظیمات کلیدی
- **ترفند حاشیهٔ گرادیانی بدون کد:** outer با Background **Classic → Gradient** (135°, دو stop: Neon و `#6366F1`) + Padding `1px`؛ داخلی با Background Dark و Radius `19` (یکی کمتر از outer).
- **card3:** Transition `transform,box-shadow 300ms` · Hover: Transform Move Y `-5px` · Box Shadow Hover = `0 0 0 1px rgba(34,211,238,.45), 0 12px 36px rgba(34,211,238,.20)`.
- **card3-glow:** کانتینر Absolute با Inset `-18px` · Background کلاسیک Radial (Neon 35% → شفاف) · **Style ← Effects ← CSS Filters ← Blur = 6px** (بومی) · Pointer Events: خاموش نیست (کانتینر رویداد ندارد، مشکلی نیست) · z-index 0؛ تصویر z-index 1.
- **card3-img:** Aspect Ratio `4:3` · Object Fit Cover · Effects Hover: Scale `1.06` + CSS Filters Hover: Brightness `1.12` · Transition `400ms`.
- **badge-hot:** Background Global Accent · Text Global Dark (کنتراست ۸.۴:۱) · Radius 8 · Padding 4/10 · Icon شعله 14.
- **icon‌ها:** 44×44 · Color `#A5F3FC` · Background `rgba(34,211,238,.08)` · Border `rgba(34,211,238,.25)` · Hover: Background `rgba(34,211,238,.20)`.
- **chips:** هر چیپ = کانتینر Row (Icon 14 + Heading 12px/600 `#A5F3FC`) · Background `rgba(34,211,238,.10)` · Border `rgba(34,211,238,.30)` · Radius 8 · Padding `4px 10px` · Hover: Border Neon + Background `.20` · Transition 200ms.
- **stock-bar:** ویجت **Progress Bar**: Percentage = `30` (یا عدد دلخواه ثابت؛ درصد واقعی بدون کد داینامیک نیست — شفاف!) · Bar Color = Gradient Neon→Indigo نیست (Progress Bar تک‌رنگ است) → `#22D3EE` · Background Color `#1F2A44` · Height `6` · Radius 99 · Title/Number: خاموش (متن بالا را Heading جدا می‌گوید).
- **card3-price:** Global Card Price +4 (دسکتاپ 24) · Color Neon · sale-text: رنگ `#34D399` بدون bg.
- **card3-add:** Background Neon · Text `#06202A` · Weight 800 · Height `52` · Radius 12 · Hover: Background `#67E8F9` · Transform Scale `1.02` · Box Shadow `0 0 20px rgba(34,211,238,.5)` · Transition 200ms.

### ریسپانسیو
دسکتاپ: قیمت 24 · تصویر 4:3 · تبلت: قیمت 21 · موبایل: Padding داخلی `12` · قیمت 19 · چیپ‌ها wrap · Glow با Opacity کمتر (از کنترل Opacity ریسپانسیو = `0.6`).

### انیمیشن‌ها
Entrance (کاروسل): `Zoom In` 450ms. هاور: سایه/لیفت اول (300ms) ← تصویر 400ms ← چیپ‌ها 200ms ← دکمه 200ms.

### چک‌لیست ووکامرس
متغیر ✓ (رفتار استاندارد دکمه) · تخفیف ✓ خط‌خورده + متن حراج · ناموجود ← نوار موجودی را Percentage `0` دومین قالب جایگزین نساخته‌ایم؛ راه ویجتی: نوار همیشه با مقدار ثابت «کم» فقط برای بخش شگفت‌انگیز استفاده شود و در آرشیو کلی، خط متنی Product Stock واقعیت را بگوید · عنوان بلند ✓ wrap · تصاویر ✓ Cover.

---

## ۴) کارت ۴ — پنلِ اسلایدی (`loop-card-4-fashion`)

**شاسی بالا: ویجت Call to Action** (اسلاید محتوای اکشن با هاور والد) + **بدنهٔ پایین: کانتینر همیشه‌نما** (سایزها/موجودی — چون در موبایل هاور نداریم).
**نوع قالب:** Loop Item · **محل استفاده:** Loop Grid دو ستونهٔ بخش پوشاک.

### درخت ساختار
```
Container «card4-root» (Column · Radius 16 · Overflow Hidden · Border 1px Global Border · Bg Surface)
├─ Call to Action «card4-cta» (بخش تصویر + کشوی اکشن)
├─ Container «card4-icons» (Row · Absolute بالا-چپ · همیشه نمایان) ← قلب + مقایسه
└─ Container «card4-body» (Column · Padding 16 · Gap 8)
   ├─ Heading «card4-title» ← Product Title
   ├─ Container «card4-price-row» ← Heading price ← Product Price + Heading sale ← Product Sale
   ├─ Container «card4-sizes» (Row · Gap 8)
   │  ├─ Heading «sizes-label» ← «سایز:»
   │  └─ ۴× Button «size-chip» (استاتیک ۴۰/۴۱/۴۲/۴۳ — نمایشی؛ سایز واقعی در صفحهٔ محصول انتخاب می‌شود)
   └─ Container «card4-stock» ← Icon نقطه + Heading ← Product Stock
```

### تنظیمات Call to Action (کشو)
- Content: Image ← Product Image · Title ← Product Title (تکرار عمدی: داخل کشو به‌همراه دکمه‌ها اسلاید می‌شود؛ Title اصلی پایین همیشه هست) · Description ← Product Price · Button ← «افزودن سریع» + Link ← Product URL.
- Skin = Cover · Content Position = Bottom.
- **Style ← Content ← Hover Animation = Slide Up** (یا Move Up) · **Sequenced Animation = Yes** · Animation Duration `250ms` · Transition Duration تصویر `500ms` · Image Hover Animation = Zoom In.
- حالت عادی: محتوا Opacity کم نیست؛ CTA محتوا را همیشه نشان می‌دهد و در هاور «دوباره با اسلاید» می‌آورد — برای رسیدن به حس «کشوی مخفی»، **Content Position = Bottom** + در حالت Normal رنگ Overlay روشن‌تر و در Hover تیره‌تر تا اکشن‌ها برجسته شوند. (شفاف: اسلایدِ «از صفر» بدون کد دقیقاً مثل موکاپ نیست؛ Sequenced Slide-Up نزدیک‌ترین رفتار بومی است.)
- Button استایل: `card1-add` مشابه ولی Solid آبی؛ Hover = Primary Dark.

### بدنهٔ پایین
- **size-chip:** Button با Text استاتیک · Min Width `40` · Height `40` · Radius `10` · Bg `#F3F4F6` · Border Global Border · Typography 13/700 · Hover: Bg `#EFF6FF` + Border Primary + Transform Scale `1.06` · Transition 200ms. (این چیپ‌ها در Loop Item واقعی می‌توانند حذف شوند یا به لینک صفحهٔ محصول بدل شوند — انتخاب سایز متغیر بدون کد در کارت ممکن نیست؛ رفتار درست Woo همین است.)
- **card4-icons:** Absolute بالا · Inset Inline End 12 · Top 12 · z-index 5 · همیشه نمایان (دسترس‌پذیری + موبایل).

### ریسپانسیو
دسکتاپ: CTA ارتفاع `420` · تبلت `380` · موبایل `340` + body padding `12` + عنوان 16. در موبایل هاور وجود ندارد؛ Sequenced Animation بی‌اثر است و محتوا همیشه دیده می‌شود — دقیقاً همان «جایگزین هاور» مطلوب.

### انیمیشن‌ها
Entrance: `Fade In Up` 400ms (فقط صفحه اصلی). هاور: زوم 500ms ← اسلاید محتوا 250ms با تأخیر ~80ms ← دکمه‌ها پلکانی 0/60ms.

### چک‌لیست ووکامرس
متغیر ✓ (دکمهٔ کشو به صفحهٔ محصول؛ چیپ سایز نمایشی/حذف‌شدنی) · تخفیف ✓ · ناموجود ✓ متن · عنوان ✓ · تصویر ۴:۵ ✓ Cover.

---

## ۵) کارت ۵ — اسپلیتِ افقی (`loop-card-5-split`)

**نوع قالب:** Loop Item · **محل استفاده:** Loop Grid **تک‌ستونه** در آرشیو (حالت لیست) + سکشن «نتایج جستجو/مرتبط‌ها».

### درخت ساختار
```
Container «card5-root» (Row · Equal Height · Bg Surface · Border · Radius 16 · Overflow Hidden)
├─ Container «card5-media» (Column · Width 40% · Bg #F8FAFC · Padding 12 · Border Inline End 1px)
│  ├─ badge (Product Terms)
│  └─ Image ← Product Image (Link = Product URL)
└─ Container «card5-body» (Column · Width 60% · Padding 16 · Gap 8)
   ├─ Container «card5-meta» (Row) ← دسته (متن) + Rating ← Product Rating
   ├─ Heading «card5-title» ← Product Title
   ├─ Container «card5-specs» (Row · Gap 16 · Border Top/Bottom Dashed) ← ۳× Icon+Heading (استاتیک یا ACF در آینده)
   ├─ Container «card5-foot» (Row · Space Between)
   │  ├─ Heading price ← Product Price (+sale متن)
   │  └─ Container icons ← قلب + مقایسه (40×40)
   ├─ Container stock ← نقطه + Product Stock
   └─ Button «card5-add» تمام‌عرض ← Add to Cart? نه: Button با Link محصول یا ویجت Add to Cart
```
> برای دکمه: اگر افزودن AJAX ساده می‌خواهید ویجت **Add to Cart** (Woo) را بگذارید (استایل Button کامل دارد)؛ برای متغیر خودکار «انتخاب گزینه‌ها» می‌شود ✓.

### تنظیمات کلیدی
- **root:** Row · **RTL: آیتم اول (مدیا) خودکار سمت راست می‌نشیند — Row Reverse لازم نیست.** (اگر سایت شما LTR است و فقط محتوا فارسی است، Direction = Row Reverse بزنید.)
- Hover root: Transform Move Y `-3px` · Shadow `0 16px 40px rgba(17,24,39,.16)` · Border `#BFDBFE` · Transition 300ms.
- **card5-media:** Width دسکتاپ `40%` · تبلت `40%` · **موبایل `100%`** (از کنترل Width ریسپانسیو) · Root در موبایل: Direction = **Column** (ریسپانسیو) · Border Inline End در موبایل → Border Bottom.
- **img:** Aspect 1:1 دسکتاپ · موبایل 16:9 · Object Fit Cover · Hover Scale `1.06` 500ms.
- **specs:** Typography Card Body · Color `#374151` · آیکن‌ها 15 Primary · Hover روی کانتینر specs: Transform Move X `-4px` · Transition 250ms (هاور خود عنصر).
- **title:** 19px · Hover Color Primary.
- **add:** ویجت Add to Cart · Bg Primary · Hover Primary Dark + Scale 1.01 · Height 48 · تمام‌عرض.

### ریسپانسیو
دسکتاپ: Row 40/60 · عنوان 19 · تبلت: عنوان 17 · موبایل: Column، تصویر بالا 16:9، specs دو آیتم (آیتم سوم با `Responsive ← Hide on Mobile`? این کنترل برای ویجت هست: Advanced ← Responsive ← Hide on Mobile ✓ بومی)، padding 12.

### انیمیشن‌ها
Entrance: خاموش (لیست باید سریع اسکن شود). هاور: لیفت/سایه 300ms ← تصویر 500ms ← مشخصات 250ms ← دکمه 200ms.

### چک‌لیست ووکامرس
متغیر ✓ دکمهٔ Woo · تخفیف ✓ · ناموجود ✓ · عنوان بلند ← در حالت لیست `nowrap` ممنوع؛ wrap دوخطه + Equal Height ✓ · تصاویر ✓.

---

## ۶) تنظیمات سریع برای شخصی‌سازی (Global)

اگر روزی برند عوض شد، فقط همین‌ها را در **Site Settings** لمس کنید و هر ۵ کارت هم‌زمان به‌روز می‌شوند:
1. **Global Colors:** Primary/Accent/Success/Text/Surface/Border/Dark/Neon (جدول ۰.۱).
2. **Global Fonts:** چهار استایل وزیرمتن (جدول ۰.۱) — تعویض خانواده به IRANSansX فقط از همین‌جا.
3. **Widgets Space (Layout):** 16 → تغییر شبکهٔ فاصله داخلی کارت‌ها.
4. شعاع‌ها: چون Radiusها عددی ست شده‌اند، برای تغییر سراسری، در هر قالب یک‌بار Find/Replace عدد نکنید؛ از ابتدا Radius کانتینرهای root را یکسان (۱۶/۲۰) نگه داشته‌ایم — تغییر دو کانتینر root هر قالب کافی است.
5. اگر بعداً **Custom CSS مجاز شد** (فعلاً ممنوع)، به‌ترتیب اولویت: (۱) backdrop-filter برای کارت ۲، (۲) درصد تخفیف عددی برای برچسب‌ها، (۳) line-clamp عنوان‌ها.

---

## ۷) یادداشت شفافیت (تفاوت موکاپ و نسخهٔ ویجتی)

| افکت موکاپ | وضعیت ویجتی |
|---|---|
| backdrop-filter شیشه | ❌ بومی نیست → اورلی نیمه‌شفاف تیره + حاشیهٔ روشن (کارت ۲) |
| هاور والد در کارت ۱/۳/۵ | هاور خودِ عنصر (تصویر/دکمه/کانتینر) — بدون کد کافی و استاندارد |
| اسلاید «از صفر» کشوی کارت ۴ | Sequenced Slide-Up بومی CTA (نزدیک‌ترین رفتار) |
| نمایش شرطی برچسب تخفیف | ❌ بومی نیست → قاعدهٔ ۰.۵ (قیمت خط‌خورده + متن حراج بدون bg + برچسب همیشه‌نما = دسته) |
| درصد تخفیف/درصد نوار موجودی عددی | ❌ بدون کد → مقدار طراحی ثابت + متن داینامیک موجودی |
| Stagger ورود آیتم‌های گرید | ❌ بدون کد → ورود یکنواخت یا خاموش در آرشیو |
