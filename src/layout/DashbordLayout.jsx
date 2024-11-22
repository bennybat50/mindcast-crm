import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import dashboard from "../assets/dashboard.png";
import user from "../assets/user.png";
import content from "../assets/content.png";
import analysis from "../assets/analysis.png";
import setting from "../assets/setting.png";
import global from "../assets/global.png";
import notification from "../assets/notification-bing.png";
import { Menu as HeadlessMenu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const { Sider, Content, Header } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("Dashboard", "/dashboard", <img src={dashboard} alt="Dashboard" className="w-4" />),
  getItem("Users", "/user-management", <img src={user} alt="Users" className="w-4" />),
  getItem("Coupons", "/coupons", <img src={content} alt="Coupons" className="w-4" />),
  getItem("Profile", "/profile", <img src={analysis} alt="Profile" className="w-4" />),
  getItem("Change Password", "/change-password", <img src={setting} alt="Change Password" className="w-4" />),
];

const DashboardLayout = () => {
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

  const [adminUsername, setAdminUsername] = useState("");

  useEffect(() => {
   const adminData = JSON.parse(localStorage.getItem("admin"));

    if (adminData && adminData.adminemail) {
      setAdminUsername(adminData.adminemail);
    }else{
      window.location.href ="/layout"
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/";
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
        <Header
          className="bg-white fixed top-0 left-0 right-0 flex items-center w-full"
          style={{ zIndex: 900, paddingLeft: collapsed ? 80 : 250 }}
        >
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
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>
              <MenuItems
                className="absolute z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`block px-4 py-2 text-left text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                      onClick={handleLogout}>
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
