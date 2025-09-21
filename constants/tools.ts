import React from 'react';
import type { Category } from '../types';
import { PhotoIcon, VideoIcon, AudioIcon, TextIcon, StoryIcon, AppIcon, AnalysisIcon, PresentationIcon, KeyIcon, GeneralIcon } from '../components/icons';

export const CATEGORIES: Category[] = [
  {
    id: 'images',
    name: 'الصور',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(PhotoIcon),
    tools: [
      { name: 'Ideogram', description: 'إنشاء صور احترافية قوية', link: 'https://ideogram.ai/' },
      { name: 'Qwen Chat', description: 'برنامج كوين لإنشاء الصور والمحادثة', link: 'https://chat.qwen.ai/' },
      { name: 'Designify', description: 'موقع لبراويز الصورة مع تفريغ الخلفية', link: 'https://www.designify.com/' },
    ],
  },
  {
    id: 'video',
    name: 'الفيديو',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(VideoIcon),
    tools: [
      { name: 'Magic Light', description: 'تحويل نص إلى فيديو يصل إلى 50 دقيقة', link: 'https://magiclight.ai/' },
      { name: 'Renderforest', description: 'برنامج عمل فيديو ممتاز', link: 'https://www.renderforest.com/' },
      { name: 'Google Labs Flow', description: 'أداة إنشاء الفيديو مع حركة وصوت', link: 'https://labs.google/fx/ar/tools/flow/project/03c18fa5-ffb5-4deb-beba-54d63916db98' },
      { name: 'Lemonslice', description: 'تحريك صورة وفيديو ومطابقة الشفاة', link: 'https://lemonslice.com/studio' },
      { name: 'CapCut', description: 'أداة صنع الفيديو الشهيرة', link: 'https://www.capcut.com/' },
      { name: 'Fliki', description: 'مولد فيديوهات جميل بالنص والصوت', link: 'https://fliki.ai/' },
      { name: 'Pictory', description: 'مولد فيديوهات جميل جداً', link: 'https://app.pictory.ai/home' },
      { name: 'Colossyan', description: 'إنشاء شخصية لقراءة النص وعمل فيديو شرح', link: 'https://www.colossyan.com/' },
      { name: '123apps', description: 'حذف العلامة المائية من الفيديوهات', link: 'https://123apps.com/' },
      { name: 'Dreamface Tools', description: 'مطابقة الفيديو للشفاه حسب نص', link: 'https://tools.dreamfaceapp.com/' },
      { name: 'RunwayML', description: 'حذف أي شخصية من الفيديو', link: 'https://app.runwayml.com/signup' },
    ],
  },
  {
    id: 'audio',
    name: 'الصوت',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(AudioIcon),
    tools: [
      { name: 'Google AI Studio', description: 'تحويل الكلام إلى صوت', link: 'https://aistudio.google.com/prompts/new_chat' },
      { name: 'NotebookLM', description: 'تحويل تسجيل صوتي إلى نص وفيديو وتلخيص', link: 'https://notebooklm.google.com/' },
    ],
  },
  {
    id: 'text',
    name: 'النصوص',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(TextIcon),
    tools: [
      { name: 'OCR.space', description: 'موقع لتحويل البي دي اف إلى وورد عربي', link: 'https://ocr.space/' },
      { name: 'Perplexity AI', description: 'عمل جداول لنصوص معينة وتنزيله', link: 'https://www.perplexity.ai/' },
      { name: 'PDF24 Tools', description: 'أداة للتعامل مع ملفات PDF', link: 'https://tools.pdf24.org/ar/remove-pdf-pages' },
      { name: 'Google Docs', description: 'تسجيل المحاضرات وتفريغها كتابة', link: 'https://docs.google.com/document/u/0/' },
    ],
  },
  {
    id: 'stories',
    name: 'قصص',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(StoryIcon),
    tools: [
      { name: 'Easemate', description: 'مولد قصص ولا يحتاج تسجيل دخول', link: 'https://www.easemate.ai/ai-story-generator' },
      { name: 'Toolsaday', description: 'موقع لمراجعة وإنشاء القصص', link: 'https://toolsaday.com/writing/story-generator' },
      { name: 'Once Upon A Bot', description: 'توليد قصص مع الصوت', link: 'https://onceuponabot.com/' },
    ],
  },
  {
    id: 'applications',
    name: 'التطبيقات',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(AppIcon),
    tools: [
      { name: 'AppsGeyser', description: 'تحويل أي صفحة نت إلى تطبيق في الهاتف', link: 'https://appsgeyser.com/?pn=com.wAlnahdah_19100590' },
    ],
  },
  {
    id: 'analysis',
    name: 'تحليل النتائج',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(AnalysisIcon),
    tools: [
      { name: 'Manus.im', description: 'رابط تحليل النتائج ومشاركة الملفات', link: 'https://manus.im/share/file/a643258b-af10-4ef7-9a53-13e433317d26' },
      { name: 'Ithy', description: 'تحليل البيانات المتقدم', link: 'https://ithy.com/' },
    ],
  },
  {
    id: 'presentations',
    name: 'العروض التقديمية',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(PresentationIcon),
    tools: [
      { name: 'Gamma.app', description: 'رابط لإنشاء عروض تقديمية احترافية', link: 'https://gamma.app/' },
    ],
  },
  {
    id: 'ai-key',
    name: 'مفتاح الذكاء الاصطناعي',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(KeyIcon),
    tools: [
      { name: 'OpenAI Login', description: 'موقع لمفتاح ذكاء اصطناعي', link: 'https://auth.openai.com/log-in' },
    ],
  },
  {
    id: 'general',
    name: 'عام',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(GeneralIcon),
    tools: [
      { name: 'MagicSchool AI', description: 'ابط برنامج أدوات المعلمين', link: 'https://app.magicschool.ai/tools' },
      { name: 'Free VPN Planet', description: 'رابط الفي بي إن', link: 'https://play.google.com/store/apps/details?id=com.freevpnplanet' },
      { name: 'EdCafe AI', description: 'الوستا لتعلم الذكاء الاصطناعي', link: 'https://app.edcafe.ai/chatbots/68b18cbe568e6c826514462c' },
      { name: 'Miro', description: 'موقع للمعلم كالسبورة الذكية وخرائط ذهنية', link: 'https://miro.com/ar/' },
      { name: 'Dia Browser', description: 'متصفح يعمل بالذكاء الاصطناعي بديل لجوجل كروم', link: 'https://www.diabrowser.com/' },
      { name: 'Yupp.ai', description: 'برنامج قوي يشغل جميع الأدوات المدفوعة مجانا', link: 'https://yupp.ai/' },
      { name: 'generateprompt.ai', description: 'كتابة وتحسين الأوامر عن طريق الذكاء الاصطناعي', link: 'https://www.generateprompt.ai/' },
      { name: 'Temp Mail', description: 'إنشاء إيميل وهمي ومؤقت', link: 'https://temp-mail.org/en/' },
      { name: 'Vercel', description: 'رابط الاستضافة التي تحول إلى صفحة ويب', link: 'https://vercel.com/' },
      { name: 'Enhancer for YouTube™', description: 'إضافة لقوقل كروم تعمل على التحكم باليوتيوب', link: 'https://chromewebstore.google.com/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle' },
    ],
  },
];