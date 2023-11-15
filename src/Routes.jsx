import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const EventsDetails = React.lazy(() => import("pages/EventsDetails"));
const Media = React.lazy(() => import("pages/Media"));
const Hospitality = React.lazy(() => import("pages/Hospitality"));
const Department = React.lazy(() => import("pages/Department"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/department" element={<Department />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/media" element={<Media />} />
          <Route path="/eventsdetails" element={<EventsDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
