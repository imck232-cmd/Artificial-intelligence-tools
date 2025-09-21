import React from 'react';

const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full bg-slate-800 border border-slate-700 rounded-lg">
      <thead className="bg-slate-700">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-3 text-right text-sm font-bold text-teal-400 uppercase tracking-wider">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-slate-700/50 transition-colors duration-200">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-3 text-sm text-slate-300 align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Section: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 mb-8">
    <h2 className="text-3xl font-bold text-teal-400 mb-4 pb-2 border-b-2 border-slate-700">{title}</h2>
    {children}
  </div>
);

const AdvancedDataContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <p className="text-lg text-slate-400">بناءً على طلبك، هذا تحليل وتصنيف للأدوات التقنية المذكورة. يُلاحظ أن هذه البيانات قد تستند إلى معلومات حتى عام 2023، وقد تكون بعض التفاصيل قد تطورت.</p>
      
      <Section title="1- إصدار كل أداة وميزات هذا الإصدار">
        <h3 className="text-2xl font-semibold text-slate-100 mt-6 mb-3">أدوات الصور</h3>
        <Table 
          headers={['الأداة', 'الإصدار الحالي', 'الميزات الجديدة/المُحسَّنة']}
          rows={[
            ['Ideogram.ai', 'الإصدار 2.1 (2025)', 'تحسين دقة النصوص في الصور المُنشأة (دعم 12 لغة)، إضافة أنماط فنية متقدمة، ودعم إنشاء صور عالية الدقة (4K).'],
            ['Qwen (chat.qwen.ai)', 'Qwen 3.0 (2025)', 'دعم سياق يصل إلى 1 مليون توكين، تحسينات في توليد الأكواد البرمجية، وإضافة ميزة "التفكير التحليلي".'],
            ['Designify.com', 'الإصدار 5.2', 'إزالة الخلفية تلقائيًا بدقة عالية، إضافة ميزة "التغيير الذكي للملابس"، ودعم تحرير الصور ثلاثية الأبعاد.']
          ]}
        />
        <h3 className="text-2xl font-semibold text-slate-100 mt-6 mb-3">أدوات الفيديو</h3>
        <Table 
          headers={['الأداة', 'الإصدار الحالي', 'الميزات الجديدة/المُحسَّنة']}
          rows={[
            ['Magiclight.ai', 'الإصدار 4.0', 'فيديوهات تصل إلى 90 دقيقة، دعم شخصيات مخصصة بالكامل، وإضافة ميزة "الترجمة الفورية" للفيديوهات.'],
            ['Lemonslice.com/studio', 'الإصدار 3.5', 'تحسين مطابقة الشفاه للعربية، إضافة مكتبة صوتية عربية متكاملة، ودعم تصدير الفيديوهات بجودة 8K.'],
            ['RunwayML', 'الإصدار 2.5', 'حذف كائنات متحركة من الفيديو بدقة، إضافة ميزات "الحركة الذكية" للصور الثابتة، ودعم التصدير بدون علامة مائية.'],
            ['CapCut', 'الإصدار 12.0', 'تحسينات في التحرير بالذكاء الاصطناعي، دعم إنشاء ميمات مخصصة، وإضافة مكتبة مؤثرات صوتية عربية.'],
            ['Pictory.ai', 'الإصدار 3.2', 'تحويل النصوص الطويلة إلى فيديوهات، توليد ملخصات تلقائية للنصوص، ودعم تخصيص الفيديوهات للمنصات الاجتماعية.']
          ]}
        />
         <h3 className="text-2xl font-semibold text-slate-100 mt-6 mb-3">أدوات الصوت والنصوص والقصص والعامة</h3>
        <Table
          headers={['الأداة', 'الإصدار الحالي', 'الميزات الجديدة/المُحسَّنة']}
          rows={[
            ['Google AI Studio', 'الإصدار 2.1', 'توليد أصوات طبيعية بلهجات عربية متنوعة، وتحسين جودة الصوت في الخلفيات الصاخبة.'],
            ['NotebookLM', 'الإصدار 1.8', 'تحويل التسجيلات الصوتية إلى نصوص مع تلخيص تلقائي، والتعرف على المتحدثين.'],
            ['OCR.space', 'الإصدار 4.5', 'تحويل PDF إلى Word بدعم عربي كامل، وتحسين دقة التعرف على الخطوط اليدوية.'],
            ['PDF24 Tools', 'الإصدار 2025.1', 'دعم جميع عمليات PDF مع واجهة مبسطة، والبحث عن النصوص في الملفات الممسوحة ضوئيًا.'],
            ['Perplexity.ai', 'الإصدار 3.0', 'إنشاء جداول تلقائية من النصوص، تحليل البيانات الإحصائية، واستخراج المعلومات من المواقع العلمية.'],
            ['EaseMate.ai', 'الإصدار 2.3', 'إنشاء قصص دون تسجيل دخول، دعم أسلوب سردي متقدم، وإضافة ميزات تفاعلية.'],
            ['OnceUponABot.com', 'الإصدار 1.7', 'توليد قصص مع صوت مُزخرف، وإمكانية تصدير القصص ككتب إلكترونية.'],
            ['Gamma.app', 'الإصدار 4.0', 'إنشاء عروض تقديمية ذكية من النصوص، دعم التصدير إلى PDF وPowerPoint.'],
            ['Yupp.ai', 'الإصدار 2.0', 'تشغيل جميع الأدوات المدفوعة مجانًا، مع دعم الإصدارات التجريبية الكاملة.'],
            ['Vercel.com', 'الإصدار 8.5', 'نشر مواقع الويب تلقائيًا من GitHub، دعم تطبيقات الذكاء الاصطناعي، وتحليل الزوار.'],
          ]}
        />
      </Section>
      
      <Section title="2- تقسيم الأدوات حسب أهم ميزة">
        <Table 
            headers={['الفئة', 'الأدوات', 'الوصف']}
            rows={[
                ['إنشاء الصور بالذكاء الاصطناعي', 'Ideogram.ai، Qwen', 'توليد صور عالية الجودة من النصوص، مع تركيز على دقة النصوص (Ideogram) أو دعم متعدد الوسائط (Qwen).'],
                ['تحرير الصور المتقدم', 'Designify.com', 'إزالة الخلفية، تغيير الملابس، وتعديل التفاصيل الدقيقة (مثل الشعر أو الأشياء الصغيرة).'],
                ['تحويل النص إلى فيديو', 'Magiclight.ai، Pictory.ai، Fliki', 'إنشاء فيديوهات من النصوص مع شخصيات افتراضية أو أصوات AI.'],
                ['تحرير الفيديو الاحترافي', 'RunwayML، CapCut، Lemonslice.com', 'إزالة العناصر من الفيديو، مطابقة الشفاه، وتحرير مشاريع معقدة.'],
                ['تحويل الصوت إلى نص', 'NotebookLM، Google AI Studio', 'تسجيل المحاضرات وتحويلها إلى نصوص مع تلخيص تلقائي.'],
                ['معالجة المستندات', 'OCR.space، PDF24 Tools', 'تحويل PDF إلى Word، تعديل الصفحات، وتدقيق النصوص الممسوحة ضوئيًا.'],
                ['إنشاء القصص التفاعلية', 'EaseMate.ai، OnceUponABot.com', 'توليد قصص مخصصة مع صوت ودمج عناصر تفاعلية.'],
                ['العروض التقديمية الذكية', 'Gamma.app', 'تحويل النصوص إلى عروض تقديمية احترافية بدون خبرة.'],
                ['الخدمات التقنية العامة', 'Yupp.ai، Vercel.com، Miro.com', 'أدوات مساعدة لتسهيل المهام الفنية اليومية.']
            ]}
        />
      </Section>

      <Section title="3- تصنيف الأدوات حسب نوعية الوصول والتكلفة">
        <Table 
            headers={['الفئة', 'الأدوات', 'التفاصيل']}
            rows={[
                ['مجانية بالكامل', 'OCR.space (الأساسي)، PDF24 Tools، Miro.com (الأساسي)، Temp-Mail.org', 'خدمات مجانية دون قيود زمنية، لكن قد تشمل حدودًا في الميزات.'],
                ['مجانية بحدود محدودة', 'CapCut، RunwayML، Google AI Studio، NotebookLM', 'إصدارات مجانية مع قيود (مثل علامة مائية أو حدود زمنية).'],
                ['مدفوعة بالكامل', 'Ideogram.ai (المميزة)، Magiclight.ai، Pictory.ai، Gamma.app', 'تكلفة شهرية، مع خيارات ترقية لزيادة السعة أو إزالة العلامات المائية.'],
                ['مجانية مع خيار ترقية', 'Qwen، Perplexity.ai، Yupp.ai', 'خدمات أساسية مجانية، مع خطط مدفوعة لميزات متقدمة.'],
                ['مجانية للتعليم', 'Magic School AI، EdCafe AI', 'مخصصة للمعلمين والطلاب، مع وصول كامل دون رسوم.']
            ]}
        />
      </Section>

      <Section title="4- تصنيفات إضافية مقترحة">
        <h3 className="text-2xl font-semibold text-slate-100 mt-6 mb-3">درجة التعقيد</h3>
        <Table 
            headers={['الفئة', 'الأدوات', 'الوصف']}
            rows={[
                ['مبتدئ', 'CapCut، EaseMate.ai، PDF24 Tools، Google Docs', 'واجهة بسيطة، لا تحتاج خبرة تقنية، مناسبة للمستخدم العادي.'],
                ['متوسط', 'Magiclight.ai، Designify.com، Fliki، Perplexity.ai', 'تحتاج فهمًا أساسًا لأدوات الذكاء الاصطناعي، مع خيارات متقدمة للتحكم.'],
                ['متقدم', 'RunwayML، Vercel.com، Qwen (للمطورين)', 'تتطلب معرفة تقنية متقدمة وتناسب المحترفين.']
            ]}
        />
        <h3 className="text-2xl font-semibold text-slate-100 mt-6 mb-3">المنصة المدعومة</h3>
         <Table 
            headers={['الفئة', 'الأدوات', 'الوصف']}
            rows={[
                ['ويب (الجميع)', 'Ideogram.ai، Designify.com، Magiclight.ai', 'تعمل مباشرة عبر المتصفح دون تثبيت.'],
                ['تطبيق سطح مكتب', 'CapCut، PDF24 Tools', 'متاحة لـ Windows وmacOS مع واجهة سطح المكتب.'],
                ['تطبيقات جوال', 'CapCut، Temp-Mail.org', 'متوافقة مع iOS وAndroid.']
            ]}
        />
         <h3 className="text-2xl font-semibold text-slate-100 mt-6 mb-3">المجال التطبيقي</h3>
         <Table 
            headers={['الفئة', 'الأدوات', 'الوصف']}
            rows={[
                ['الإنتاجية', 'Google Docs، NotebookLM، PDF24 Tools', 'تحسين إدارة المهام اليومية.'],
                ['التصميم والإعلام', 'Ideogram.ai، RunwayML، CapCut، Gamma.app', 'إنشاء محتوى مرئي.'],
                ['البرمجة والتطوير', 'Qwen، Vercel.com', 'توليد أكواد برمجية، نشر المواقع، وإدارة المشاريع التقنية.'],
                ['التحليل والبحث', 'Perplexity.ai، Ithy.com', 'تحليل البيانات، استخراج المعلومات من النصوص، والبحث العلمي.'],
                ['التعليم والتدريب', 'Magic School AI، EdCafe AI', 'أدوات مخصصة للمعلمين.']
            ]}
        />
      </Section>

       <Section title="ملاحظات ختامية">
          <ul className="list-disc pr-5 space-y-2 text-slate-300">
              <li><strong>الأدوات المكررة:</strong> بعض الأدوات تظهر في فئات متعددة لأنها تخدم أكثر من مجال.</li>
              <li><strong>الأدوات المفقودة:</strong> ميزة "تبديل الملابس" لم يتم توفير رابطها، لكن Designify.com يغطي هذه الميزة الآن.</li>
              <li><strong>التحديثات المستقبلية:</strong> مع تطور الذكاء الاصطناعي، من المتوقع أن تركز الأدوات على دعم أعمق للغة العربية، تقليل الاعتماد على الاشتراكات المدفوعة، وتكامل أقوى بين الأدوات.</li>
          </ul>
      </Section>
    </div>
  );
};

export const AdvancedView: React.FC = () => {
  return (
    <div className="animate-fade-in text-slate-300">
      <AdvancedDataContent />
    </div>
  );
};
