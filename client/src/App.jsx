import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import SignIn from "./pages/SignIn-SignUp/SignIn.jsx";
import ParkingCard from "./components/ParkingCard.jsx";
import ManagerProfile from "./pages/Profile/ManagerProfile.jsx";
import OwnerProfile from "./pages/Profile/OwnerProfile.jsx";
import UserProfile from "./pages/Profile/UserProfile.jsx";
import AdminProfile from "./pages/Profile/AdminProfile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import CreateListing from "./pages/CreateListing.jsx";
import UpdateListing from "./pages/UpdateListing.jsx";
import UpdateManagers from "./pages/UpdateManagers.jsx";
import { useState } from "react";
import { useEffect } from "react";
import ViewListing from "./pages/ViewListing.jsx";

export default function App() {
  const [isOverlay, setOverlay] = useState(true);
  // useEffect(() => {
  //   console.log(isOverlay);
  // },[isOverlay]);
  return (
    <BrowserRouter>
      {isOverlay && <Header />}
      <Routes>
        <Route
          path="/"
          element={<Home isOverlay={isOverlay} setOverlay={setOverlay} />}
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about" element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route path="/owner-profile" element={<OwnerProfile />} />
          <Route path="/manager-profile" element={<ManagerProfile />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
          <Route
            path="/update-managers/:listingId"
            element={<UpdateManagers />}
          />

          <Route path="/view-listing/:listingId" element={<ViewListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
