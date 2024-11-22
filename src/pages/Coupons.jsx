import { Button, Input, Table } from "antd";
import arrowDown from "../assets/arrow-down.png";
import search from "../assets/search-normal.png";
import user from "../assets/user_img.png";
import verify from "../assets/verify.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Coupons = () => {
  const columns = [
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
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Assigned Name",
      dataIndex: "assignedName",
      key: "assignedName",
    },
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
      dataIndex: "time_created",
      key: "time_created",
    },
  ];


  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://mindcastserver-a98c5305de98.herokuapp.com/api/v1/user/all-coupons");
        setData((prev) => (prev = resp.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


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
          dataSource={data}
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