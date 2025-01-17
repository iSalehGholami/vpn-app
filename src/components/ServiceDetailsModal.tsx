import React from "react";
import { Modal } from "antd";
import { ServiceProps } from "../types/type";
import { MainButton } from "@twa-dev/sdk/react";

interface ServiceDetailModalProps {
  visible: boolean;
  onClose: () => void;
  service: ServiceProps;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  visible,
  onClose,
  service,
}) => {
  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered>
      <h2 className="text-xl font-bold text-right text-gray-800 dark:text-gray-200">
        جزئیات سرویس انتخاب شده
      </h2>
      <p className="text-right text-gray-600 dark:text-gray-300 mt-2">
        حجم: {service.traffic}
      </p>
      <p className="text-right text-gray-600 dark:text-gray-300">
        مدت زمان: {service.duration} روز
      </p>
      <p className="text-right text-gray-600 dark:text-gray-300">
        قیمت: {service.price} تومان
      </p>

      <MainButton onClick={() => {}} text="خرید" />
    </Modal>
  );
};

export default ServiceDetailModal;
