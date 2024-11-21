import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DashbordLayout from "./layout/DashbordLayout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import SiteSettings from "./pages/SiteSettings";
import Monetization from "./pages/Monetization";
import Seo from "./pages/Seo";
import Security from "./pages/Security";
import Customizations from "./pages/Customizations";
import System from "./pages/System";
import SingleUser from "./components/SingleUser";
import ActivityLog from "./components/ActivityLog";
import MoreUsers from "./components/MoreUsers";
import Coupons from "./pages/Coupons";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin/>}/>
      <Route path="" element={<DashbordLayout />}>
        <Route path="/layout" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/user-details/:userId" element={<SingleUser />} />
        <Route path="/activity-logs" element={<ActivityLog />} />
        <Route path="/user-details/:userId" element={<SingleUser />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/site-settings-&-config" element={<SiteSettings />} />
        <Route path="/monetization-&-adverts" element={<Monetization />} />
        <Route path="/seo-&-content-discovery" element={<Seo />} />
        <Route path="/security-&-logs" element={<Security />} />
        <Route path="/customizations" element={<Customizations />} />
        <Route path="/system-configuration" element={<System />} />
        <Route path="/dashboard/more-users" element={<MoreUsers />} />
      </Route>
    </Routes>
  );
}

export default App;
