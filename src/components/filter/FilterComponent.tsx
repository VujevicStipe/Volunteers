import React, { useEffect } from "react";
import styles from "./FilterStyles.module.css";
import LocationInput from "../inputComponents/LocationInput";
import CategoryInput from "../inputComponents/CategoryInput";
import WorkExpInput from "../inputComponents/WorkExpInput";
import DateInput from "../inputComponents/DateInput";

interface Filters {
  date?: string;
  location?: string;
  jobType?: string;
  workExp?: string;
}

interface FilterComponentProps<T> {
  items: T[];
  filters: Filters;
  onFilterChange: (name: string, value: string) => void;
  setFilteredItems: React.Dispatch<React.SetStateAction<T[]>>;
}

const FilterComponent = <T,>({
  items,
  filters,
  onFilterChange,
  setFilteredItems,
}: FilterComponentProps<T>) => {
  useEffect(() => {
    const filtered = items.filter((item) => filterFunction(item, filters));
    setFilteredItems(filtered);
  }, [filters, items]);

  const filterFunction = (item: T, filters: Filters) => {
    return Object.keys(filters).every((key) => {
      const value = filters[key as keyof Filters];
      return !value || (item as any)[key] === value;
    });
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <div className={styles.filterComponent}>
      <div>
        {filters.jobType != null && (
          <CategoryInput variant="filter" onChange={onFilterChange} />
        )}
      </div>
      <div>
        {filters.location != null && (
          <LocationInput onChange={onFilterChange} />
        )}
      </div>
      <div>
        {filters.date != null && <DateInput onChange={onFilterChange} />}
      </div>
      <div>
        {filters.workExp != null && <WorkExpInput onChange={onFilterChange} />}
      </div>
    </div>
  );
};

export default FilterComponent;
