import React from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";

import followers from "../assets/followers.png";
import following from "../assets/following.png";
import community from "../assets/community.png";
import arrowRight from "../assets/arrow-right.png";
import user from "../assets/user_img.png";

const Dashboard = () => {
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
      key: 1,
      small_title: "Coupon Purchased",
      content: "125.3K Purchased",
      img: followers,
      from: "+20 from yesterday",
    },  
  ];

  const columns = [
    {
      title: "Username",
      dataIndex: "user",
      key: "user",
      render: (text, record) => (
        <div className="flex items-center">
          <img
            src={user}
            // alt={record.username}
            className="w-8 h-8 rounded-full mr-2"
          />
          {record.user}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Coupon-Code",
      dataIndex: "coupon_code",
      key: "coupon_code",
    },
    {
      title: "Code Expiration",
      dataIndex: "code_expiration",
      key: "code-expiration",
    }
  ];

  const users = [
    {
      "key": 1,
      "user": "Dannye",
      "email": "dkamiyama0@people.com",
      "status": "active",
      "coupon_code": 431536,
      "code_expiration": "8/8/2010"
    }, {
      "key": 2,
      "user": "Fredericka",
      "email": "ftavner1@mtv.com",
      "status": "active",
      "coupon_code": 310058,
      "code_expiration": "25/8/2003"
    }, {
      "key": 3,
      "user": "Esme",
      "email": "emckeowon2@bing.com",
      "status": "pending",
      "coupon_code": 413038,
      "code_expiration": "18/12/2001"
    }, {
      "key": 4,
      "user": "Alfy",
      "email": "ablethin3@oracle.com",
      "status": "pending",
      "coupon_code": 517288,
      "code_expiration": "7/4/2022"
    }, {
      "key": 5,
      "user": "Dallon",
      "email": "dfelipe4@smugmug.com",
      "status": "pending",
      "coupon_code": 517288,
      "code_expiration": "7/6/2021"
    }, {
      "key": 6,
      "user": "Xenia",
      "email": "xguiton5@gmpg.org",
      "status": "pending",
      "coupon_code": 513887,
      "code_expiration": "13/3/2008"
    }, {
      "key": 7,
      "user": "Korella",
      "email": "klabet6@google.ru",
      "status": "active",
      "coupon_code": 522039,
      "code_expiration": "11/1/2012"
    }, {
      "key": 8,
      "user": "Lanie",
      "email": "ldinsell7@mozilla.com",
      "status": "inactive",
      "coupon_code": 200999,
      "code_expiration": "8/7/2017"
    }, {
      "key": 9,
      "user": "Aida",
      "email": "adall8@wisc.edu",
      "status": "inactive",
      "coupon_code": 458739,
      "code_expiration": "24/5/2009"
    }, {
      "key": 10,
      "user": "Borden",
      "email": "bfluin9@fastcompany.com",
      "status": "active",
      "coupon_code": 178328,
      "code_expiration": "30/3/2000"
    }
  ];
  const couponTable = [
    {
      title: "Coupon",
      dataIndex: "coupon",
      key: "coupon",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Assigned Name",
      dataIndex: "assigned_name",
      key: "assigned_name",
    },
    // {
    //   title: "",
    //   render: (record) => (
    //     // <Link to={`/user-details/${record.key}`} state={{ record }}>
    //     <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
    //       Details
    //     </Button>
    //     // </Link>
    //   ),
    // },
  ]
const coupon = [
  {
    "key": 1,
    "coupon": 531753,
    duration: "3 month",
    "assigned_name": "swoller0"
  }, {
    "key": 2,
    "coupon": 307567,
    "duration": "4 month",
    "assigned_name": "pgottschalk1"
  }, {
    "key": 3,
    "coupon": 567141,
    "duration": "11 month",
    "assigned_name": "ggiamo2"
  }, {
    "key": 4,
    "coupon": 15867,
    "duration": "5 month",
    "assigned_name": "rfotherby3"
  }, {
    "key": 5,
    "coupon": 405179,
    "duration": "9 month",
    "assigned_name": "tescala4"
  }, {
    "key": 6,
    "coupon": 491992,
    "duration": "1 month",
    "assigned_name": "ufranckton5"
  }, {
    "key": 7,
    "coupon": 550315,
    "duration": "4 month",
    "assigned_name": "troeby6"
  }, {
    "key": 8,
    "coupon": 57166,
    "duration": "2 month",
    "assigned_name": "dcowburn7"
  }, {
    "key": 9,
    "coupon": 440519,
    "duration": "2 years",
    "assigned_name": "nstuttman8"
  }, {
    "key": 10,
    "coupon": 134649,
    "duration": "3 weeks",
    "assigned_name": "klorentzen9"
  }
]
  return (
    <div>
      <div className="mt-2 grid grid-cols-4 items-center justify-between flex-wrap">
        {data.map((e, index) => (
          <div className="bg-white mt-3 p-4 w-64 rounded-md" key={index}>
            <p className="mb-2">{e.small_title}</p>
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <img src={e.img} className="w-7" />
                <p className="font-semibold text-lg">{e.content}</p>
              </div>
              <div>
                <img src={arrowRight} alt="" className="w-[6px] mt-1" />
              </div>
            </div>
            <div className="bg-[#EDFEF6] mt-3 w-28 rounded flex items-center justify-center">
              <p className=" text-[#55E8AD] text-xs ">{e.from}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6 gap-5">
        <div className="bg-white w-full rounded-md p-2">
          <div className=" justify-between flex items-center">
            <h1 className="text-sm font-semibold">Users</h1>
            <Link to="/user-management">See All</Link>
          </div>
            <Table
            columns={columns}
            dataSource={users}
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
            columns={couponTable}
            dataSource={coupon}
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
