import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  onClick: (id: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <Card
      hoverable
      onClick={() => onClick(service.id)}
      className="w-[300px] mx-auto"
    >
      <Title level={5}>{service.name}</Title>
      <Text type="secondary">{service.description}</Text>
      <div className="mt-2">
        <Text strong>قیمت:</Text> {`${service.price.toLocaleString()} تومان`}
      </div>
    </Card>
  );
};

export default ServiceCard;
