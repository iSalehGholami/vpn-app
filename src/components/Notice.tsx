import React from "react";

const Notice: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white px-12 py-8 rounded-xl fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] max-md:w-[80%]">
      <h1 className="text-2xl font-bold mb-4">
        ⚠️ لطفاً از تلگرام استفاده کنید
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        این برنامه فقط در مرورگر داخلی تلگرام اجرا می‌شود.
        <br /> لطفاً اپلیکیشن را از داخل تلگرام باز کنید.
      </p>
    </div>
  );
};

export default Notice;
