import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceProps } from "../types/type";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  service: ServiceProps;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  service,
}) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowModal(true); // Show the modal when visible is true
    }
  }, [visible]);

  const handleClose = () => {
    setShowModal(false); // Trigger closing animation
    setTimeout(() => {
      onClose(); // Fully close after animation
    }, 300); // Match animation duration
  };

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 w-full max-w-md mx-auto bg-white rounded-t-2xl p-6 shadow-lg"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Modal Header */}
            <div className="text-center font-bold text-lg text-gray-800">
              جزئیات سرویس انتخاب شده
            </div>

            {/* Modal Body */}
            <div className="mt-4 space-y-2 text-right">
              <p className="text-gray-600">حجم: {service.traffic}</p>
              <p className="text-gray-600">مدت زمان: {service.duration} روز</p>
              <p className="text-gray-600">قیمت: {service.price} تومان</p>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {}}
                className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                خرید سرویس
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
