import React from "react";

interface FilterBoxProps {
  title: string;
  filters: string[];
  selectedFilter: string;
  onSelect: (filter: string) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({
  title,
  filters,
  selectedFilter,
  onSelect,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 mb-4">
      <h2 className="text-md font-semibold mb-2 dark:text-white">{title}</h2>
      <div className="flex gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-md ${
              selectedFilter === filter
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => onSelect(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
