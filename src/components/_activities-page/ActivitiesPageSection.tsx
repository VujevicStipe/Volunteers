import { useEffect, useState } from "react";
import styles from "./ActivitiesPageSection.module.css";
import BannerComponent from "../banner/BannerComponent";
import apiUrl from "../../util/config";
import axios from "axios";
import ActivityCard from "../cards/activityCard/ActivityCard";
import FilterComponent from "../filter/FilterComponent";
import ButtonComponent from "../button/ButtonComponent";
import ModalComponent from "../modal/ModalComponent";
import useWindowSize from "../../util/useWindowSize";
import AccordionComponent from "../accordion/AccordionComponent";

const ActivitiesPageSection: React.FC = () => {
  const deviceType = useWindowSize();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${apiUrl}/activities`)
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [filters, setFilters] = useState({
    date: "",
    location: "",
    jobType: "",
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  const [numOfActivities, setNumOfActivities] = useState<number>(0);
  useEffect(() => {
    setNumOfActivities(activities.length);
  }, [activities.length]);

  const title = "Explore Volonteer Activities";
  return (
    <div className={`${styles.activitiesPageSection} ${styles[deviceType]}`}>
      <BannerComponent pic="activities" title={title} />
      <div className={styles.activitiesFilter}>
        <div className={styles.filterHeading}>
          <h3>Activities</h3>
          <h4>({numOfActivities})</h4>
        </div>
        <ButtonComponent
          onClick={() => setShowModal(!showModal)}
          type="primaryBtn"
        >
          add new activity
        </ButtonComponent>
        {deviceType !== "mobile" ? (
          <FilterComponent
            items={activities}
            filters={filters}
            onFilterChange={handleFilterChange}
            setFilteredItems={setFilteredActivities}
          />
        ) : (
          <AccordionComponent>
            <FilterComponent
              items={activities}
              filters={filters}
              onFilterChange={handleFilterChange}
              setFilteredItems={setFilteredActivities}
            />
          </AccordionComponent>
        )}
      </div>
      <div className={styles.activitiesList}>
        {filteredActivities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      <ModalComponent
        variant="newActivity"
        showModal={showModal}
        setShowModal={setShowModal}
        update={setActivities}
        itemId=""
      />
    </div>
  );
};

export default ActivitiesPageSection;
