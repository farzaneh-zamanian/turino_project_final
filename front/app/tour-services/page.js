import React from 'react';

// ServiceCard Component
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

function TourServicesPage() {
  // Array of services
  const services = [
    {
      title: "تورهای راهنما",
      description: "به همراه راهنمایان ما برای یک تجربه فراموش‌نشدنی بپیوندید."
    },
    {
      title: "بسته‌های سفر",
      description: "بسته‌های سفر انحصاری ما را که برای شما طراحی شده‌اند، کشف کنید."
    },
    {
      title: "اقامتگاه",
      description: "مکان مناسب برای اقامت در طول سفرهای خود را پیدا کنید."
    },
    {
      title: "تورهای ماجراجویی",
      description: "ماجراجویی‌های هیجان‌انگیز را در دل طبیعت تجربه کنید."
    },
    {
      title: "تورهای فرهنگی",
      description: "با فرهنگ و تاریخ محلی آشنا شوید و تجربیات جدیدی کسب کنید."
    },
    {
      title: "تورهای غذایی",
      description: "با طعم‌های محلی آشنا شوید و غذاهای خوشمزه را امتحان کنید."
    }
  ];

  return (
    <section id="services" className="py-12">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourServicesPage;