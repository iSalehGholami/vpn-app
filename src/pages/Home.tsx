import React, { useState } from "react";
import BalanceBox from "../components/BalanceBox";
import TierBox from "../components/TierBox";
import FilterBox from "../components/FilterBox";
import CardList from "../components/CardList";
import ServiceDetailModal from "../components/ServiceDetailsModal";
import { ServiceProps } from "../types/type";

const HomePage: React.FC = () => {
  const [balance, setBalance] = useState<number>(200000);
  const [tier] = useState<number>(1);
  const [selectedDuration, setSelectedDuration] = useState<string>("یک ماهه");
  const [selectedTraffic, setSelectedTraffic] = useState<string>("حجمی");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const cards: ServiceProps[] = [
    { traffic: "۳۰ گیگابایت", duration: "یک ماهه", price: 88000 },
    { traffic: "۵۰ گیگابایت", duration: "دو ماهه", price: 120000 },
    { traffic: "۱۰۰ گیگابایت", duration: "سه ماهه", price: 180000 },
  ];

  const [selectedService, setSelectedService] = useState<null | number>(null);

  const handleCardClick = (id: number) => {
    // const service = cards.find((card) => card.id === id);
    setSelectedService(id);
  };

  return (
    <div>
      <BalanceBox
        balance={balance}
        currency="تومان"
        onAddBalance={() => setBalance(balance + 100000)}
      />
      <TierBox tier={tier} />
      <FilterBox
        title="مدت زمان"
        filters={["یک ماهه", "دوماهه"]}
        selectedFilter={selectedDuration}
        onSelect={setSelectedDuration}
      />
      <FilterBox
        title="ترافیک"
        filters={["حجمی", "نامحدود"]}
        selectedFilter={selectedTraffic}
        onSelect={setSelectedTraffic}
      />
      <FilterBox
        title="لوکیشن"
        filters={["سوییس", "آلمان", "انگلیس"]}
        selectedFilter={selectedLocation}
        onSelect={(filter) =>
          filter === selectedLocation
            ? setSelectedLocation("")
            : setSelectedLocation(filter)
        }
      />
      <CardList cards={cards} onCardClick={handleCardClick} />
      {selectedService != null && (
        <ServiceDetailModal
          service={cards[selectedService]}
          visible={selectedService != null}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default HomePage;
