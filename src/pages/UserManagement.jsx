import { Button, Input, Modal, Table } from "antd";
import search from "../assets/search-normal.png";
import user from "../assets/user_img.png";
import { useEffect, useState } from "react";
import axios from "axios";

const { TextArea } = Input;

const UserManagement = () => {
  const base_url = import.meta.env.VITE_API_URL;
  const user_domain = import.meta.env.VITE_USER_DOMAIN;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCoupon, setActiveCoupon] = useState([]);
  const [error, setError] = useState("");
  const [emailForDashData, setEmailForDashData] = useState({
    email: "samsonade50@gmail.com",
  });


  const getActiveCoupon = async () => {
    try {
      const res = await axios.post(
        `${base_url}/user/company-coupons-active`,
        emailForDashData
      );
      if (Array.isArray(res.data.data)) {
        setActiveCoupon(res.data.data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const userColumns = [
    {
      title: "Username",
      dataIndex: ["userID", "username"],
      key: "username",
      render: (username) => username || "N/A",
    },
    {
      title: "Email",
      dataIndex: ["userID", "email"],
      key: "email",
      render: (email) => email || "N/A",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => status || "N/A",
    },
    {
      title: "Coupon Code",
      dataIndex: "coupon",
      key: "coupon_code",
      render: (code) => code || "N/A",
    },
    {
      title: "Code Expiration",
      dataIndex: "exp_date",
      key: "code_expiration",
      render: (exp) =>
        exp ? new Date(exp * 1000).toLocaleDateString() : "N/A",
    },
  ];

  const inputClass = "bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!bg-[#F6F6F6] border-none p-3";
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getActiveCoupon();
  }, []);

  return (
    <div className="bg-white rounded-md p-3">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold">All Users</h1>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#F6F6F6] flex items-center rounded-full w-72 px-3">
            <img src={search} className="w-4 h-4 cursor-pointer" />
            <Input
              placeholder="Search user....."
              className="ml-2 bg-transparent border-none outline-none focus:!outline-none focus:bg-transparent hover:!bg-transparent focus:border-transparent"
            />
          </div>
          <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none flex items-center h-9" onClick={showModal}>
            Add users +
          </Button>
          <Modal title="Add users" open={isModalOpen} footer={null} onCancel={handleCancel}>
            <p className="text-sm font-semibold mt-4">Email</p>
            <Input type="text"
              placeholder="example@gamil.com"
              className={inputClass}
            />
            <p className="text-sm font-semibold mt-4">Coupon-code</p>
            <Input type="text"
              placeholder="io****"
              className={inputClass}
            />

            <div className="flex justify-end mt-4">
              <Button className="text-white bg-[#0a0e16] rounded-full hover:!bg-black px-7 py-5 outline-none">
                Submit
              </Button>
            </div>
          </Modal>
        </div>
      </div>

      <div className="mt-8">
        <Table
          dataSource={activeCoupon}
          columns={userColumns}
          size="small"
          pagination={{
            pageSize: 10,
            position: ["bottomCenter"],
            className: "custom-pagination",
          }}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default UserManagement;
