import { Button, Input, Table } from "antd";

import arrowDown from "../assets/arrow-down.png";
import search from "../assets/search-normal.png";
import user from "../assets/user_img.png";
import verify from "../assets/verify.png";
import { Link } from "react-router-dom";
import Adduser from "../components/Adduser";
import { useState } from "react";

const UserManagement = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
          <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none flex items-center h-9" onClick={openModal}>
            Add users +
          </Button>
          <Adduser isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>

      <div className="mt-8">
        <Table
          dataSource={users}
          columns={columns}
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
