// تولیدکنندهٔ فایل‌های JSON قالب Loop Item برای Import در Elementor Pro
// خروجی: 5 فایل loop-card-*.json — ساختار مطابق docs/elementor-product-cards-build-guide.md
// توجه: تگ‌های داینامیک Woo بعد از ایمپورت طبق جدول README-IMPORT.md وصل می‌شوند.
import { writeFileSync, mkdirSync } from 'node:fs';

let n = 0x1000000;
const hid = () => (n += 977).toString(16).slice(1, 8);

const dim = (t, r, b, l, linked = false) => ({ unit: 'px', top: String(t), right: String(r), bottom: String(b), left: String(l), isLinked: linked });
const typo = (size, weight, color) => ({ typography_typography: 'custom', font_family: 'Vazirmatn', font_size: { unit: 'px', size, sizes: [] }, font_weight: String(weight), title_color: color });

const C = (title, settings = {}, elements = []) => ({ id: hid(), elType: 'container', isInner: false, settings: { _title: title, ...settings }, elements });
const W = (widgetType, title, settings = {}) => ({ id: hid(), elType: 'widget', widgetType, isInner: false, settings: { _title: title, ...settings }, elements: [] });

const P = { primary: '#2563EB', primaryDark: '#1D4ED8', accent: '#F59E0B', success: '#10B981', successText: '#047857', text: '#111827', muted: '#6B7280', surface: '#FFFFFF', border: '#E5E7EB', soft: '#F8FAFC', dark: '#0B1120', dark2: '#111A2E', darkBorder: '#1F2A44', neon: '#22D3EE', indigo: '#6366F1', red: '#DC2626' };

const col = (t, extra = {}, elements = []) => C(t, { flex_direction: 'column', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true }, ...extra }, elements);
const row = (t, extra = {}, elements = []) => C(t, { flex_direction: 'row', justify_content: 'space-between', align_items: 'center', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true }, ...extra }, elements);

const icon = (title, fa, color, extra = {}) => W('icon', title, { selected_icon: { value: fa, library: 'fa-solid' }, primary_color: color, size: { unit: 'px', size: 18, sizes: [] }, ...extra });
const btn = (title, text, fa, bg, fg, extra = {}) => W('button', title, { text, selected_icon: { value: fa, library: 'fa-solid' }, icon_align: 'start', background_color: bg, button_text_color: fg, border_radius: dim(12, 12, 12, 12, true), padding: dim(12, 16, 12, 16), typography_typography: 'custom', font_family: 'Vazirmatn', font_size: { unit: 'px', size: 15, sizes: [] }, font_weight: '700', ...extra });
const hd = (title, text, size, weight, color, tag = 'h3', extra = {}) => W('heading', title, { title: text, header_size: tag, align: 'right', ...typo(size, weight, color), ...extra });
const imgW = (title, extra = {}) => W('image', title, { image: { url: '', id: '' }, image_size: 'woocommerce_single', link_to: 'none', object_fit: 'cover', width: { unit: '%', size: 100, sizes: [] }, border_radius: dim(10, 10, 10, 10, true), ...extra });

/* ─────────── کارت ۱ — مینیمال ادیتوریال ─────────── */
const card1 = col('card1-root', {
  background_background: 'classic', background_color: P.surface,
  border_border: 'solid', border_width: dim(1, 1, 1, 1, true), border_color: P.border,
  border_radius: dim(16, 16, 16, 16, true), overflow: 'hidden',
  box_shadow_box_shadow_type: 'yes', box_shadow_box_shadow: { horizontal: 0, vertical: 1, blur: 3, spread: 0, color: 'rgba(17,24,39,0.10)' },
}, [
  col('card1-media', { background_background: 'classic', background_color: P.soft, padding: dim(12, 12, 12, 12, true), border_border: 'solid', border_width: dim(0, 0, 1, 0), border_color: P.border }, [
    row('card1-badges', {}, [
      C('badge-cat', { background_background: 'classic', background_color: '#DBEAFE', border_radius: dim(8, 8, 8, 8, true), padding: dim(4, 10, 4, 10) }, [
        hd('dyn→Product Terms', 'صوتی و تصویری', 12, 600, '#1D4ED8', 'span'),
      ]),
      icon('wish-icon', 'fas fa-heart', '#475569'),
    ]),
    imgW('dyn→Product Image'),
  ]),
  col('card1-body', { padding: dim(16, 16, 16, 16, true) }, [
    row('card1-meta', {}, [
      hd('card1-cat-text', 'صوتی و تصویری', 12, 500, P.muted, 'span'),
      hd('dyn→Product Rating', '★ ۴٫۷ (۱۲۸)', 12, 700, P.text, 'span'),
    ]),
    hd('dyn→Product Title', 'هدفون بی‌سیم نویزکنسلینگ مدل X۲۰', 18, 700, P.text),
    row('card1-price-row', { justify_content: 'flex-start' }, [
      hd('dyn→Product Price', '۲٬۴۵۰٬۰۰۰ تومان', 20, 800, P.primary, 'h4'),
      hd('card1-old-price', '۳۰۶۰۰۰۰', 13, 400, '#9CA3AF', 'span'),
      hd('dyn→Product Sale', 'حراج', 12, 700, P.red, 'span'),
    ]),
    row('card1-stock', { justify_content: 'flex-start', gap: { unit: 'px', top: '6', right: '6', bottom: '6', left: '6', isLinked: true } }, [
      icon('stock-dot', 'fas fa-circle', P.success, { size: { unit: 'px', size: 8, sizes: [] } }),
      hd('dyn→Product Stock', 'موجود — ارسال امروز', 12, 600, P.successText, 'span'),
    ]),
    btn('card1-add', 'افزودن به سبد خرید', 'fas fa-shopping-cart', P.soft, P.text, { border_border: 'solid', border_width: dim(1, 1, 1, 1, true), border_color: P.border }),
  ]),
]);

/* ─────────── کارت ۲ — ویترین شیشه‌ای ─────────── */
const card2 = col('card2-root', { border_radius: dim(20, 20, 20, 20, true), overflow: 'hidden' }, [
  W('call-to-action', 'card2-cta (dyn→Image/Title/Price/Rating)', {
    title: 'ادوپرفیوم مردانهٔ آمبر رویال ۱۰۰ml',
    description: '★ ۴٫۸ (۲۴۰ نظر) · عطر و ادکلن\n۱٬۸۰٬۰۰ تومان',
    button_text: 'افزودن',
    image: { url: '', id: '' },
    skin: 'cover',
  }),
  row('card2-badges', { position: 'absolute', _position: 'absolute' }, [
    C('badge-cat-glass', { background_background: 'classic', background_color: 'rgba(255,255,255,0.16)', border_border: 'solid', border_width: dim(1, 1, 1, 1, true), border_color: 'rgba(255,255,255,0.4)', border_radius: dim(8, 8, 8, 8, true), padding: dim(5, 12, 5, 12) }, [
      hd('dyn→Product Terms', 'عطر و ادکلن', 13, 700, '#FFFFFF', 'span'),
    ]),
    row('card2-icons', { justify_content: 'flex-start', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [
      icon('wish-icon', 'fas fa-heart', '#FFFFFF', { background_background: 'classic', background_color: 'rgba(11,17,32,0.35)', border_radius: dim(12, 12, 12, 12, true) }),
      icon('quick-view', 'fas fa-eye', '#FFFFFF', { background_background: 'classic', background_color: 'rgba(11,17,32,0.35)', border_radius: dim(12, 12, 12, 12, true) }),
    ]),
  ]),
]);

/* ─────────── کارت ۳ — نئون دارک ─────────── */
const chip = (t) => C('chip', { background_background: 'classic', background_color: 'rgba(34,211,238,0.10)', border_border: 'solid', border_width: dim(1, 1, 1, 1, true), border_color: 'rgba(34,211,238,0.30)', border_radius: dim(8, 8, 8, 8, true), padding: dim(4, 10, 4, 10) }, [hd('chip-text', t, 12, 600, '#A5F3FC', 'span')]);
const card3 = col('card3-outer', {
  padding: dim(1, 1, 1, 1, true), border_radius: dim(20, 20, 20, 20, true),
  background_background: 'gradient', background_color: P.neon, background_color_b: P.indigo, background_gradient_type: 'linear', background_gradient_angle: 135,
}, [
  col('card3', { background_background: 'classic', background_color: P.dark, border_radius: dim(19, 19, 19, 19, true), padding: dim(16, 16, 16, 16, true), gap: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true } }, [
    row('card3-top', {}, [
      C('badge-hot', { background_background: 'classic', background_color: P.accent, border_radius: dim(8, 8, 8, 8, true), padding: dim(5, 12, 5, 12) }, [
        icon('fire', 'fas fa-fire', P.text, { size: { unit: 'px', size: 14, sizes: [] } }),
        hd('badge-hot-text', 'پرفروش', 13, 700, P.text, 'span'),
      ]),
      row('card3-icons', { justify_content: 'flex-start', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [
        icon('wish-icon', 'fas fa-heart', '#A5F3FC', { background_background: 'classic', background_color: 'rgba(34,211,238,0.08)', border_radius: dim(12, 12, 12, 12, true) }),
        icon('compare', 'fas fa-balance-scale', '#A5F3FC', { background_background: 'classic', background_color: 'rgba(34,211,238,0.08)', border_radius: dim(12, 12, 12, 12, true) }),
      ]),
    ]),
    col('card3-media', { border_radius: dim(14, 14, 14, 14, true), overflow: 'hidden', background_background: 'classic', background_color: '#0E1626' }, [
      C('card3-glow', { position: 'absolute', _position: 'absolute', background_background: 'classic', background_color: 'rgba(34,211,238,0.35)', border_radius: dim(999, 999, 999, 999, true) }, []),
      imgW('dyn→Product Image', { border_radius: dim(14, 14, 14, 14, true) }),
    ]),
    hd('dyn→Product Title', 'کارت گرافیک RTX 4070 Super سه‌فن', 17, 700, '#F8FAFC'),
    row('card3-chips', { justify_content: 'flex-start', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [chip('۱۲GB'), chip('GDDR6X'), chip('PCIe 4.0')]),
    col('card3-stock', { gap: { unit: 'px', top: '6', right: '6', bottom: '6', left: '6', isLinked: true } }, [
      row('stock-line', { justify_content: 'flex-start', gap: { unit: 'px', top: '6', right: '6', bottom: '6', left: '6', isLinked: true } }, [
        icon('dot', 'fas fa-circle', P.neon, { size: { unit: 'px', size: 8, sizes: [] } }),
        hd('dyn→Product Stock', 'فقط ۱۲ عدد باقی مانده', 12, 600, '#67E8F9', 'span'),
      ]),
      W('progress', 'stock-bar', { title: '', percent: '30', bar_color: P.neon, bg_color: P.darkBorder }),
    ]),
    row('card3-price-row', { justify_content: 'flex-start', gap: { unit: 'px', top: '10', right: '10', bottom: '10', left: '10', isLinked: true } }, [
      hd('dyn→Product Price', '۳۲۹۰۰۰۰۰ تومان', 24, 800, P.neon, 'h4'),
      hd('card3-old-price', '۳۵٬۵۰٬۰۰', 13, 400, '#64748B', 'span'),
      hd('dyn→Product Sale', '−۷٪', 12, 800, '#34D399', 'span'),
    ]),
    btn('card3-add', 'افزودن سریع به سبد', 'fas fa-bolt', P.neon, '#06202A', { font_size: { unit: 'px', size: 16, sizes: [] }, font_weight: '800', padding: dim(16, 16, 16, 16, true) }),
  ]),
]);

/* ─────────── کارت ۴ — پنل اسلایدی ─────────── */
const sizeChip = (t, sel = false) => btn('size-' + t, t, '', sel ? '#EFF6FF' : '#F3F4F6', sel ? P.primaryDark : P.text, { border_border: 'solid', border_width: dim(1, 1, 1, 1, true), border_color: sel ? P.primary : P.border, border_radius: dim(10, 10, 10, 10, true), padding: dim(10, 12, 10, 12), font_size: { unit: 'px', size: 13, sizes: [] } });
const card4 = col('card4-root', {
  background_background: 'classic', background_color: P.surface,
  border_border: 'solid', border_width: dim(1, 1, 1, 1, true), border_color: P.border,
  border_radius: dim(16, 16, 16, 16, true), overflow: 'hidden',
}, [
  W('call-to-action', 'card4-cta (dyn→Image/Title/Price)', {
    title: 'کفش رانینگ ایرمکس پرو',
    description: '۳٬۹۰٬۰۰ تومان',
    button_text: 'افزودن سریع',
    image: { url: '', id: '' },
    skin: 'cover',
  }),
  col('card4-icons', { position: 'absolute', _position: 'absolute', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [
    icon('wish-icon', 'fas fa-heart', '#475569'),
    icon('compare', 'fas fa-balance-scale', '#475569'),
  ]),
  col('card4-body', { padding: dim(16, 16, 16, 16, true) }, [
    hd('dyn→Product Title', 'کفش رانینگ ایرمکس پرو', 17, 700, P.text),
    row('card4-price-row', { justify_content: 'flex-start', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [
      hd('dyn→Product Price', '۳۲۹۰۰۰۰ تومان', 19, 800, P.primary, 'h4'),
      hd('card4-old-price', '۴٬۷۰٬۰۰', 13, 400, '#9CA3AF', 'span'),
      hd('dyn→Product Sale', 'حراج', 12, 700, P.red, 'span'),
    ]),
    row('card4-sizes', { justify_content: 'flex-start', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [
      hd('sizes-label', 'سایز:', 12, 600, P.muted, 'span'),
      sizeChip('۴۰'), sizeChip('۴۱', true), sizeChip('۴۲'), sizeChip('۴۳'),
    ]),
    row('card4-stock', { justify_content: 'flex-start', gap: { unit: 'px', top: '6', right: '6', bottom: '6', left: '6', isLinked: true } }, [
      icon('stock-dot', 'fas fa-circle', P.success, { size: { unit: 'px', size: 8, sizes: [] } }),
      hd('dyn→Product Stock', 'موجود', 12, 600, P.successText, 'span'),
    ]),
  ]),
]);

/* ─────────── کارت ۵ — اسپلیت افقی ─────────── */
const spec = (fa, t) => C('spec', { gap: { unit: 'px', top: '6', right: '6', bottom: '6', left: '6', isLinked: true } }, [icon('spec-icon', fa, P.primary, { size: { unit: 'px', size: 15, sizes: [] } }), hd('spec-text', t, 13, 500, '#374151', 'span')]);
const card5 = row('card5-root', {
  background_background: 'classic', background_color: P.surface,
  border_border: 'solid', border_width: dim(1, 1, 1, 1, true), border_color: P.border,
  border_radius: dim(16, 16, 16, 16, true), overflow: 'hidden', align_items: 'stretch',
}, [
  col('card5-media', { background_background: 'classic', background_color: P.soft, padding: dim(12, 12, 12, 12, true), border_border: 'solid', border_width: dim(0, 0, 0, 1), border_color: P.border, width: { unit: '%', size: 40, sizes: [] } }, [
    C('badge-cat', { background_background: 'classic', background_color: '#DBEAFE', border_radius: dim(8, 8, 8, 8, true), padding: dim(4, 10, 4, 10) }, [
      hd('dyn→Product Terms', 'لوازم خانگی', 12, 600, '#1D4ED8', 'span'),
    ]),
    imgW('dyn→Product Image'),
  ]),
  col('card5-body', { padding: dim(16, 16, 16, 16, true), width: { unit: '%', size: 60, sizes: [] } }, [
    row('card5-meta', {}, [
      hd('card5-cat', 'لوازم خانگی', 12, 500, P.muted, 'span'),
      hd('dyn→Product Rating', '★ ۴٫۶ (۹۴)', 12, 700, P.text, 'span'),
    ]),
    hd('dyn→Product Title', 'جاروبرقی بدون کیسهٔ مدل V۸ پرو', 19, 700, P.text),
    row('card5-specs', { justify_content: 'flex-start', gap: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true }, padding: dim(8, 0, 8, 0), border_border: 'dashed', border_width: dim(1, 0, 1, 0), border_color: P.border }, [
      spec('fas fa-wind', 'مکش ۲۲۰W'), spec('fas fa-sparkles', 'فیلتر HEPA'), spec('fas fa-shield-alt', 'گارانتی ۱۸ ماهه'),
    ]),
    row('card5-foot', {}, [
      row('card5-price-row', { justify_content: 'flex-start', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [
        hd('dyn→Product Price', '۵۴۵۰۰۰۰ تومان', 22, 800, P.primary, 'h4'),
        hd('card5-old-price', '۶٬۴۰٬۰۰', 13, 400, '#9CA3AF', 'span'),
      ]),
      row('card5-actions', { justify_content: 'flex-start', gap: { unit: 'px', top: '8', right: '8', bottom: '8', left: '8', isLinked: true } }, [
        icon('wish-icon', 'fas fa-heart', '#475569'),
        icon('compare', 'fas fa-balance-scale', '#475569'),
      ]),
    ]),
    row('card5-stock', { justify_content: 'flex-start', gap: { unit: 'px', top: '6', right: '6', bottom: '6', left: '6', isLinked: true } }, [
      icon('stock-dot', 'fas fa-circle', P.success, { size: { unit: 'px', size: 8, sizes: [] } }),
      hd('dyn→Product Stock', 'موجود در انبار — ارسال فردا', 12, 600, P.successText, 'span'),
    ]),
    btn('card5-add', 'افزودن به سبد خرید', 'fas fa-shopping-cart', P.primary, '#FFFFFF'),
  ]),
]);

const templates = [
  ['loop-card-1-minimal', 'Loop Card 1 — Minimal Editorial', card1],
  ['loop-card-2-glass', 'Loop Card 2 — Glass Immersive', card2],
  ['loop-card-3-neon', 'Loop Card 3 — Neon Dark', card3],
  ['loop-card-4-fashion', 'Loop Card 4 — Slide-Up Fashion', card4],
  ['loop-card-5-split', 'Loop Card 5 — Horizontal Split', card5],
];

mkdirSync(new URL('.', import.meta.url), { recursive: true });
for (const [file, title, root] of templates) {
  const json = { title, type: 'loop-item', version: '0.4', page_settings: [], content: [root] };
  writeFileSync(new URL(`./${file}.json`, import.meta.url), JSON.stringify(json, null, 1));
  console.log('written', file + '.json');
}
