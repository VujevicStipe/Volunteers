import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./routes/HomePage";
import ActivtiesPage from "./routes/ActivtiesPage";
import VolunteersPage from "./routes/VolunteersPage";
import OrganisationsPage from "./routes/OrganisationsPage";
import ActivityDetailsPage from "./routes/ActivityDetailsPage";
import VolunteerDetailsPage from "./routes/VolunteerDetailsPage";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivtiesPage />}>
          <Route path=":id" element={<ActivityDetailsPage />} />
        </Route>
        <Route path="/volunteers" element={<VolunteersPage />}>
          <Route path=":id" element={<VolunteerDetailsPage />} />
        </Route>
        <Route path="/organisations" element={<OrganisationsPage />} />
      </Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
