import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./routes/HomePage";
import ActivitiesPage from "./routes/ActivitiesPage";
import VolunteersPage from "./routes/VolunteersPage";
import OrganisationsPage from "./routes/OrganisationsPage";
import ActivityDetailsPage from "./routes/ActivityDetailsPage";
import VolunteerDetailsPage from "./routes/VolunteerDetailsPage";
import ScrollToTop from "./util/scrollToTop";

function Root() {
  return (
    <>
      <Routes>
        <ScrollToTop />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route
            path="/activities/details/:id"
            element={<ActivityDetailsPage />}
          />
          <Route path="/volunteers" element={<VolunteersPage />} />
          <Route
            path="/volunteers/details/:id"
            element={<VolunteerDetailsPage />}
          />
          <Route path="/organisations" element={<OrganisationsPage />} />
        </Route>
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
