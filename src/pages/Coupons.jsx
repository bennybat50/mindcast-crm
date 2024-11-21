import { Button, Input, Table } from "antd";

import arrowDown from "../assets/arrow-down.png";
import search from "../assets/search-normal.png";
import user from "../assets/user_img.png";
import verify from "../assets/verify.png";
import { Link } from "react-router-dom";

const Coupons = () => {
  const columns = [
    {
      title: "Coupon",
      dataIndex: "coupon",
      key: "coupon",
    },
    // {
    //   title: "Company-Email",
    //   dataIndex: "company_email",
    //   key: "company_email",
    // },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Assigned Name",
      dataIndex: "assigned_name",
      key: "assigned_name",
    },
    // {
    //   title: "UserID",
    //   dataIndex: "userID",
    //   key: "userID",
    // },
    {
      title: "Exp_date",
      dataIndex: "exp_date",
      key: "exp_date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Time_created",
      dataIndex: "timeCre",
      key: "timeCre",
    },
  ];

  const details = [
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    },
    {
      key: 1,
      coupon: 531753,
      company_email: "dkamiyama0@people.com",
      duration: "3 month",
      price: '$200',
      assigned_name: "Dannye",
      userID: 1,
      exp_date:'8/8/2010',
      status: 'active',
      timeCre:'25/8/2003'
    }
  ];

  return (
    <div className="bg-white rounded-md p-3">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold">Coupons</h1>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#F6F6F6] flex items-center rounded-full w-72 px-3">
            <img src={search} className="w-4 h-4 cursor-pointer" />
            <Input
              placeholder="Search user....."
              className="ml-2 bg-transparent border-none outline-none focus:!outline-none focus:bg-transparent hover:!bg-transparent focus:border-transparent"
            />
          </div>
          <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none flex items-center h-9">
            Buy Coupon
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <Table
          dataSource={details}
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

export default Coupons;