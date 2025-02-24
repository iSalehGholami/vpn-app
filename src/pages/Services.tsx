import React from "react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      name: "سرویس یک ماهه",
      traffic: "1 گیگابایت",
      price: "50,000 تومان",
    },
    { id: 2, name: "سرویس دوماهه", traffic: "نامحدود", price: "100,000 تومان" },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">سرویس های من</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service.id}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg flex justify-between"
          >
            <span>{service.name}</span>
            <span>{service.traffic}</span>
            <span>{service.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
