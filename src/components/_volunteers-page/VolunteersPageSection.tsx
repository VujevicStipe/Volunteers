import { useEffect, useState } from "react";
import BannerComponent from "../banner/BannerComponent";
import styles from "./VolunteersPageSection.module.css";
import axios from "axios";
import apiUrl from "../../util/config";
import ButtonComponent from "../button/ButtonComponent";
import VolunteerCard from "../cards/volunteerCard/VolunteerCard";
import FilterComponent from "../filter/FilterComponent";
import ModalComponent from "../modal/ModalComponent";

const VolunteersPageSection: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState<Volunteer[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${apiUrl}/volunteers`)
      .then((res) => {
        setVolunteers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    workExp: "",
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    console.log(filteredVolunteers)
  }, [filteredVolunteers])

  const [numOfVolunteers, setNumOfVolunteers] = useState<number>(0);
  useEffect(() => {
    setNumOfVolunteers(volunteers.length);
    console.log(numOfVolunteers);
  }, [volunteers.length]);

  const title = "Meet Other Volunteers";

  return (
    <div className={styles.volunteersPageSection}>
      <BannerComponent pic="volunteers" title={title} />
      <div className={styles.volunteersFilter}>
        <div className={styles.filterHeading}>
          <h3>Volunteers</h3>
          <h4>({numOfVolunteers})</h4>
        </div>
        <ButtonComponent
          type="primaryBtn"
          onClick={() => setShowModal(!showModal)}
        >
          add new volunteer
        </ButtonComponent>
        <FilterComponent
          items={volunteers}
          filters={filters}
          onFilterChange={handleFilterChange}
          setFilteredItems={setFilteredVolunteers}
        />
      </div>
      <div className={styles.volunteersList}>
        {filteredVolunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} variant="volunteer" />
        ))}
      </div>
      <ModalComponent
        variant="newVolunteer"
        showModal={showModal}
        setShowModal={setShowModal}
        update={setVolunteers}
      />
    </div>
  );
};

export default VolunteersPageSection;
