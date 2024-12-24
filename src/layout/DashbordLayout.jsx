import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import global from "../assets/global.png";
import notification from "../assets/notification-bing.png";
import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useUserContext } from "../context/UserContext";
import { MdDashboardCustomize } from "react-icons/md";
import { CiSettings, CiUser } from "react-icons/ci";
import { HiMiniUsers } from "react-icons/hi2";
import { RiCouponLine } from "react-icons/ri";

const { Sider, Content, Header } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("Dashboard", "/dashboard", <MdDashboardCustomize className="w-4" />),
  getItem("Users", "/user-management", <HiMiniUsers className="w-4" />),
  getItem("Coupons", "/coupons", <RiCouponLine className="w-4" />),
  getItem("Profile", "/profile", <CiUser className="w-4" />),
  getItem(
    "Change Password",
    "/change-password",
    <CiSettings className="w-4" />
  ),
];

const DashboardLayout = () => {
  const { state, dispatch } = useUserContext();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleMenuClick = (e) => navigate(e.key);

  const handleResize = () => {
    setCollapsed(window.innerWidth < 1020);
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check for the user data in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "SET_USER", payload: JSON.parse(storedUser) }); // Assume you have a SET_USER action
    } else {
      navigate("/login");  // Redirect to login page if no user is found
    }
  }, [dispatch, navigate]);

  const adminUsername = state.user ? state.user.username : "";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user"); // Clear persisted data
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="bg-[#40176c] fixed left-0 top-0 bottom-0"
        width={250}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4 flex items-center text-xl font-bold">
          <span className="text-white text-2xl">Mindcast Portal</span>
        </div>
        <Menu
          theme="dark"
          className="bg-[#40176c]"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 250 }}>
        <Header className="bg-white fixed top-0 left-0 right-0 flex items-center w-full z-50 pl-[var(--sider-width)]">
          <div className="flex justify-end items-center w-full">
            <div></div>
            <div className="flex gap-3">
              <div className="icon-container">
                <img src={global} alt="Global" className="icon" />
              </div>
              <div className="icon-container">
                <img src={notification} alt="Notification" className="icon" />
              </div>
            </div>
            <HeadlessMenu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 ml-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <div>
                  {adminUsername ? (
                    <h3>Welcome, {adminUsername}!</h3>
                  ) : (
                    <h3>Welcome, Admin!</h3>
                  )}
                </div>
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
              <MenuItems className="absolute z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`block px-4 py-2 text-left text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                        onClick={handleLogout}
                        tabIndex={0}
                      >
                        Sign out
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </HeadlessMenu>
          </div>
        </Header>
        <Content className="p-3" style={{ marginTop: 64 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
