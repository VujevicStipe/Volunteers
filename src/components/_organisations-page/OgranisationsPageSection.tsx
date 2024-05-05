import { useContext, useEffect, useState } from "react";
import styles from "./OgranisationsPageSection.module.css";
import BannerComponent from "../banner/BannerComponent";
import ButtonComponent from "../button/ButtonComponent";
import axios from "axios";
import apiUrl from "../../util/config";
import useWindowSize from "../../util/useWindowSize";
import { RoleManagerContext } from "../../util/RoleManagerContext";
import FilterComponent from "../filter/FilterComponent";
import AccordionComponent from "../accordion/AccordionComponent";
import ModalComponent from "../modal/ModalComponent";
import OrganisationCard from "../cards/organisationCard/OrganisationCard";
import AcceptOrganisation from "./components/AcceptOrganisation";
import DeleteOrganisation from "./components/DeleteOrganisation";

const OgranisationsPageSection: React.FC = () => {
  const deviceType = useWindowSize();
  const roleContext = useContext(RoleManagerContext);

  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [pendingOrganisations, setPendingOrganisations] = useState<
    Organisation[]
  >([]);
  const [filteredOrganisations, setFilteredOrganisations] = useState<
    Organisation[]
  >([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${apiUrl}/organisations`)
      .then((res) => {
        setOrganisations(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/pendingOrganisations`)
      .then((res) => {
        setPendingOrganisations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("dodana nova")
  }, [pendingOrganisations.length])

  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
  });
  const handleFilterChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  const [numOfOrganisations, setNumOfOrganisations] = useState<number>(0);
  useEffect(() => {
    setNumOfOrganisations(organisations.length);
  }, [organisations.length]);

  const title = "Connect with Other Organizations";
  return (
    <div className={`${styles.organisationsPageSection} ${styles[deviceType]}`}>
      <BannerComponent pic="organisations" title={title} />
      <div className={styles.organisationsFilter}>
        <div className={styles.filterHeading}>
          <h3>Organisations</h3>
          <h4>{numOfOrganisations}</h4>
        </div>
        {roleContext && roleContext.role === "user" && (
          <ButtonComponent
            type="primaryBtn"
            onClick={() => setShowModal(!showModal)}
          >
            add new organisation
          </ButtonComponent>
        )}
        {deviceType !== "mobile" ? (
          <FilterComponent
            items={organisations}
            filters={filters}
            onFilterChange={handleFilterChange}
            setFilteredItems={setFilteredOrganisations}
          />
        ) : (
          <AccordionComponent>
            <FilterComponent
              items={organisations}
              filters={filters}
              onFilterChange={handleFilterChange}
              setFilteredItems={setFilteredOrganisations}
            />
          </AccordionComponent>
        )}
      </div>
      <div className={styles.organisationsList}>
        <div className={styles.wrapper}>
          {" "}
          {roleContext &&
          roleContext.role === "admin" &&
          organisations.length > 0
            ? filteredOrganisations.map((organisation) => (
                <OrganisationCard key={organisation.id} data={organisation}>
                  <DeleteOrganisation itemId={organisation.id} update={setOrganisations} />
                </OrganisationCard>
              ))
            : filteredOrganisations.map((organisation) => (
                <OrganisationCard key={organisation.id} data={organisation} />
              ))}
        </div>
        <div className={styles.wrapper}>
          {roleContext && roleContext.role === "admin" && (
            <>
              <h2>Pending organisations</h2>
              {pendingOrganisations.map((organisation) => (
                <OrganisationCard key={organisation.id} data={organisation}>
                  <AcceptOrganisation
                    key={organisation.id}
                    data={organisation}
                    updatePending={setPendingOrganisations}
                    update={setOrganisations}
                  />
                </OrganisationCard>
              ))}
            </>
          )}
        </div>
      </div>
      <ModalComponent
        variant="newOrganisation"
        showModal={showModal}
        setShowModal={setShowModal}
        update={setPendingOrganisations}
        itemId=""
      />
    </div>
  );
};

export default OgranisationsPageSection;
