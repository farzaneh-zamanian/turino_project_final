import React from 'react';

function AboutUsPage() {
  // Reusable Section Component
  const Section = ({ content, isList }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-12 transition-transform transform hover:scale-105">
        {isList ? (
          <ul className="list-disc list-inside text-gray-700">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">{content}</p>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">درباره ما</h1>
      
      <Section 
        title="ماموریت ما" 
        content="ماموریت ما ارائه بهترین خدمات گردشگری و ایجاد تجربیات فراموش‌نشدنی برای مسافران است. ما به دنبال ارتقاء فرهنگ سفر و آشنایی با جاذبه‌های محلی هستیم." 
      />
      
      <Section 
        title="چشم‌انداز ما" 
        content="چشم‌انداز ما تبدیل شدن به یکی از پیشروترین شرکت‌های گردشگری در کشور و ارائه خدمات با کیفیت بالا به مشتریان است. ما به دنبال ایجاد یک جامعه گردشگری پایدار و مسئولانه هستیم." 
      />
      
      <Section 
        title="ارزش‌های ما" 
        content={[
          "احترام به فرهنگ‌ها و سنت‌های محلی",
          "تعهد به کیفیت و خدمات مشتری",
          "پایداری و حفاظت از محیط زیست",
          "نوآوری و خلاقیت در خدمات"
        ]} 
        isList={true} 
      />
      
      <Section 
        title="تاریخچه ما" 
        content="ما از سال 1390 فعالیت خود را آغاز کرده‌ایم و در طول این سال‌ها با ارائه خدمات متنوع و با کیفیت، توانسته‌ایم اعتماد مشتریان خود را جلب کنیم. تیم ما متشکل از کارشناسان با تجربه و علاقه‌مند به صنعت گردشگری است که همواره در تلاش برای بهبود خدمات خود هستند." 
      />
    </div>
  );
}

export default AboutUsPage;