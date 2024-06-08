import { useContext, useEffect, useState } from "react";
import styles from "./VolunteersPageSection.module.css";
import BannerComponent from "../banner/BannerComponent";
import axios from "axios";
import apiUrl from "../../util/config";
import ButtonComponent from "../button/ButtonComponent";
import VolunteerCard from "../cards/volunteerCard/VolunteerCard";
import FilterComponent from "../filter/FilterComponent";
import ModalComponent from "../modal/ModalComponent";
import useWindowSize from "../../util/useWindowSize";
import AccordionComponent from "../accordion/AccordionComponent";
import { RoleManagerContext } from "../../util/RoleManagerContext";
import DeleteVolunteer from "./components/DeleteVolunteer";

const VolunteersPageSection: React.FC = () => {
  const deviceType = useWindowSize();
  const roleContext = useContext(RoleManagerContext);

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

  const [numOfVolunteers, setNumOfVolunteers] = useState<number>(0);
  useEffect(() => {
    setNumOfVolunteers(volunteers.length);
    console.log(numOfVolunteers);
  }, [volunteers.length]);

  const title = "Meet Other Volunteers";

  return (
    <div className={`${styles.volunteersPageSection} ${styles[deviceType]}`}>
      <BannerComponent pic="volunteers" title={title} />
      <div className={styles.volunteersFilter}>
        <div className={styles.filterHeading}>
          <h3>Volunteers</h3>
          <h4>({numOfVolunteers})</h4>
        </div>
        {roleContext && roleContext.role === "admin" && (
          <ButtonComponent
            type="primaryBtn"
            onClick={() => setShowModal(!showModal)}
          >
            add new volunteer
          </ButtonComponent>
        )}

        {deviceType !== "mobile" ? (
          <FilterComponent
            items={volunteers}
            filters={filters}
            onFilterChange={handleFilterChange}
            setFilteredItems={setFilteredVolunteers}
          />
        ) : (
          <AccordionComponent>
            <FilterComponent
              items={volunteers}
              filters={filters}
              onFilterChange={handleFilterChange}
              setFilteredItems={setFilteredVolunteers}
            />
          </AccordionComponent>
        )}
      </div>
      <div className={styles.volunteersList}>
        {roleContext && roleContext.role === "admin"
          ? filteredVolunteers.map((volunteer) => (
              <VolunteerCard key={volunteer.id} volunteer={volunteer} variant="volunteer">
                <DeleteVolunteer itemId={volunteer.id} update={setVolunteers} />
              </VolunteerCard>
            ))
          : filteredVolunteers.map((volunteer) => (
              <VolunteerCard
                key={volunteer.id}
                volunteer={volunteer}
                variant="volunteer"
              />
            ))}
      </div>
      <ModalComponent
        variant="newVolunteer"
        showModal={showModal}
        setShowModal={setShowModal}
        update={setVolunteers}
        itemId=""
      />
    </div>
  );
};

export default VolunteersPageSection;
