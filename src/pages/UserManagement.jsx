import { Button, Input, Modal } from "antd";
import search from "../assets/search-normal.png";
import { useEffect, useState } from "react";
import axios from "axios";

const UserManagement = () => {
  const base_url = import.meta.env.VITE_API_URL;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCoupon, setActiveCoupon] = useState([]);
  const [error, setError] = useState("");
  const [emailForDashData, setEmailForDashData] = useState({
    email: "samsonade50@gmail.com",
  });

  // Fetch Active Coupons
  const getActiveCoupon = async () => {
    try {
      const res = await axios.post(
        `${base_url}/user/company-coupons-active`,
        emailForDashData
      );
      if (Array.isArray(res.data.data)) {
        const sanitizedCoupons = res.data.data.map((coupon) => ({
          ...coupon,
          userID: coupon.userID || {}, // Ensure userID is an object
        }));
        setActiveCoupon(sanitizedCoupons);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete Coupon Function
  const handleDelete = async (userId) => {
    if (!userId) {
      setError("Invalid user ID provided for deletion.");
      return;
    }
    try {
      const payload = { user_id: userId };
      const res = await axios.post(`${base_url}/user/cancel-coupon`, payload);
      if (res.data.status) {
        alert("Coupon deleted successfully.");
        getActiveCoupon();
      } else {
        setError(res.data.message || "Failed to delete coupon");
      }
    } catch (err) {
      setError(
        `Failed to delete: ${err.response?.data?.message || err.message}`
      );
    }
  };

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
        <h1 className="text-lg font-semibold">All Users</h1>
        <div className="flex gap-5">
          <div className="bg-[#F6F6F6] flex items-center rounded-full w-72 px-3">
            <img src={search} className="w-4 h-4 cursor-pointer" />
            <Input
              placeholder="Search user....."
              className="ml-2 bg-transparent border-none"
            />
          </div>
          <Button
            className="text-white bg-black rounded-full"
            onClick={showModal}
          >
            Add users +
          </Button>
          <Modal
            title="Add users"
            open={isModalOpen}
            footer={null}
            onCancel={handleCancel}
          >
            <Input
              type="text"
              placeholder="example@gamil.com"
              className="bg-[#F6F6F6] p-3 border-none"
            />
            <Input
              type="text"
              placeholder="io****"
              className="bg-[#F6F6F6] p-3 border-none mt-4"
            />
            <Button className="text-white bg-[#0a0e16] mt-4 rounded-full">
              Submit
            </Button>
          </Modal>
        </div>
      </div>

      <div className="mt-8 overflow-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2 text-left">Username</th>
              <th className="border border-gray-300 p-2 text-left">Email</th>
              <th className="border border-gray-300 p-2 text-left">Status</th>
              <th className="border border-gray-300 p-2 text-left">
                Coupon Code
              </th>
              <th className="border border-gray-300 p-2 text-left">
                Code Expiration
              </th>
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeCoupon.map((coupon) => (
              <tr key={coupon._id}>
                <td className="border border-gray-300 p-2">
                  {coupon.userID?.username || "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  {coupon.userID?.email || "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  {coupon.status || "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  {coupon.coupon || "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  {coupon.exp_date
                    ? new Date(coupon.exp_date * 1000).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => {
                      const userId = coupon.userID?._id;
                      if (userId) {
                        handleDelete(userId);
                      } 
                    }}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default UserManagement;
