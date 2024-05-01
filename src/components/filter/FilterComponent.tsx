import React from "react";
import styles from "./FilterStyles.module.css";
import LocationInput from "../inputComponents/LocationInput";
import CategoryInput from "../inputComponents/CategoryInput/CategoryInput";
import WorkExpInput from "../inputComponents/WorkExpInput";
import DateInput from "../inputComponents/DateInput";

interface Filters {
  date?: string;
  location?: string;
  jobType?: string;
  workExp?: string;
}

interface FilterComponentProps {
  filters: Filters;
  onFilterChange: (name: string, value: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className={styles.filterComponent}>
      <div>
        {filters.jobType != null && <CategoryInput variant="filter" onChange={onFilterChange} />}
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
