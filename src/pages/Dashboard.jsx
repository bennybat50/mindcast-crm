import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link, useNavigate } from "react-router-dom";

import followers from "../assets/followers.png";
import following from "../assets/following.png";
import community from "../assets/community.png";
import arrowRight from "../assets/arrow-right.png";
import axios from "axios";
import { useUserContext } from "../context/UserContext.jsx";

const Dashboard = () => {
  const base_url = import.meta.env.VITE_API_URL;
  const { state } = useUserContext();
  const [collectedDashBoardData, setCollectedDashBoardData] = useState([]);
  const [activeCoupon, setActiveCoupon] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");

  useEffect(() => {
    // If no user, navigate to login
    if (!storedUser) {
      navigate("/login");
    } else {
      // Fetch data only if user exists
      const fetchData = async () => {
        try {
          const emailPayload = { email:"samsonade50@gmail.com"};
          const res = await axios.post(
            `${base_url}/user/company-coupons`,
            emailPayload
          );
          setCollectedDashBoardData(res.data.data || []);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchData();
    }
  }, [storedUser, navigate]);

  useEffect(() => {
    if (storedUser) {
      const getActiveCoupon = async () => {
        try {
          const res = await axios.post(
            `${base_url}/user/company-coupons-active`,
            { email: "samsonade50@gmail.com" }
          );
          if (Array.isArray(res.data.data)) {
            setActiveCoupon(res.data.data);
          }
        } catch (err) {
          setError(err.message);
        }
      };
      getActiveCoupon();
    }
  }, [storedUser]);

  // Define data for the grid
  const data = [
    {
      key: 1,
      small_title: "Users",
      content: "125.3K Users",
      img: followers,
      from: "+20 from yesterday",
    },
    {
      key: 2,
      small_title: "Coupon Used",
      content: "125.3K Used",
      img: following,
      from: "+5 from yesterday",
    },
    {
      key: 3,
      small_title: "Coupon Expired",
      content: "10 Expired",
      img: community,
      from: "+2 from yesterday",
    },
    {
      key: 4,
      small_title: "Coupon Purchased",
      content: "125.3K Purchased",
      img: followers,
      from: "+20 from yesterday",
    },
  ];

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

  const couponColumns = [
    {
      title: "Coupon",
      dataIndex: "coupon",
      key: "coupon",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (duration, record) =>
        `${duration || "N/A"} ${record.duration_type || "N/A"}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => status || "N/A",
    },
  ];

  return (
    <div>
      <div className="mt-2 grid grid-cols-4 items-center justify-between flex-wrap">
        {data.map((e, index) => (
          <div className="bg-white mt-3 p-4 w-64 rounded-md" key={index}>
            <p className="mb-2">{e.small_title}</p>
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <img src={e.img} className="w-7" alt="icon" />
                <p className="font-semibold text-lg">{e.content}</p>
              </div>
              <div>
                <img
                  src={arrowRight}
                  alt="arrow-right"
                  className="w-[6px] mt-1"
                />
              </div>
            </div>
            <div className="bg-[#EDFEF6] mt-3 w-28 rounded flex items-center justify-center">
              <p className="text-[#55E8AD] text-xs">{e.from}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6 gap-5">
        <div className="bg-white w-full rounded-md p-2">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-semibold">Users</h1>
            <Link to="/user-management">See All</Link>
          </div>
          <Table
            columns={userColumns}
            dataSource={activeCoupon}
            size="small"
            scroll={{ x: "max-content" }}
            pagination={false}
            className="mt-3"
          />
        </div>
        <div className="bg-white w-full rounded-md p-2">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-semibold">Coupon Purchased</h1>
            <Link to="/coupons">See All</Link>
          </div>
          <Table
            columns={couponColumns}
            dataSource={collectedDashBoardData}
            size="small"
            scroll={{ x: "max-content" }}
            pagination={false}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
