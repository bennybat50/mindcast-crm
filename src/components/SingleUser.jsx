import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";

import arrowLeft from "../assets/arrow-left.png";
import followers from "../assets/followers.png";
import following from "../assets/following.png";
import community from "../assets/community.png";
import arrowRight from "../assets/arrow-right.png";
import user from "../assets/user_img.png";
import info from "../assets/info-circle.png";
import personCheck1 from "../assets/person-check1.png";

const { TextArea } = Input;

const SingleUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suspend, setSuspend] = useState(false);
  const location = useLocation();
  const { userId } = useParams();
  const { state } = location;
  const record = state?.record;
  console.log(record);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const suspendAccount = () => {
    setSuspend(true);
    setIsModalOpen(false);
  };

  const retriveAccount = () => {
    setSuspend(false);
  };

  const onFinish = (value) => {
    console.log(value);
  };
  const confirm = () => {
    Modal.confirm({
      width: 390,
      icon: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={personCheck1} alt="Confirm" className="w-24" />
          <h2 className="font-semibold m-0 text-center text-lg">
            Are you sure you want to reactivate this account?
          </h2>
          <div className="text-[#333333CC] w-62 text-center">
            Reactivating this account will give the user access back to his/her
            account but will be on a close watch for a while.
          </div>
        </div>
      ),
      footer: (
        <div className="flex gap-5 justify-center mt-2">
          <Button
            className="text-black bg-[#F1F1F2] rounded-full hover:!bg-[#F1F1F2] hover:!text-black outline-none"
            onClick={() => Modal.destroyAll()} // Close modal on cancel
          >
            Cancel
          </Button>
          <Button
            className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none"
            onClick={() => {
              retriveAccount();
              Modal.destroyAll(); // Closes modal after reactivating
            }}
          >
            Reactivate Account
          </Button>
        </div>
      ),
      centered: true, // Centers the modal on the screen
    });
  };

  const data = [
    {
      key: 1,
      small_title: "Total Followers",
      content: "125.3K Following",
      img: followers,
      from: "+20 from yesterday",
    },
    {
      key: 2,
      small_title: "Total Following",
      content: "125.3K Following",
      img: following,
      from: "+5 from yesterday",
    },
    {
      key: 3,
      small_title: "Total Community Joined",
      content: "10 Communities",
      img: community,
      from: "+2 from yesterday",
    },
  ];

  return (
    <div>
      <Link
        to="/user-management"
        className="flex gap-2 w-20 hover:!text-black items-center"
      >
        <img src={arrowLeft} alt="" className="w-4" /> Back
      </Link>

      <div className="bg-white rounded-md p-3 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">User Details</h1>
          {suspend && (
            <div className="bg-[#F3F3F4] border-[#28303D0D] flex items-center gap-2 rounded-full px-2 py-1">
              <img src={info} alt="" />
              <p>This user is currently on suspension for hate speech</p>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          {data.map((e, index) => (
            <div className="bg-[#FCFCFD] p-5 w-64 rounded" key={index}>
              <p className="mb-2">{e.small_title}</p>
              <div className="flex gap-3 items-center justify-between">
                <div className="flex gap-3 items-center">
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

        <Modal
          title="Suspend This Account"
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
        >
          <p className="text-[#333333CC] text-sm">
            If you ban this user he/she won't able to access his/her account
            until you reactivate account
          </p>

          <TextArea
            rows={7}
            placeholder="Your reason...."
            maxLength={6}
            className="bg-[#F6F6F6] mt-4 hover:!bg-[#F6F6F6] focus:!bg-[#F6F6F6] border-none !resize-none"
          />
          <div className="flex justify-end mt-4">
            <Button
              className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none"
              onClick={suspendAccount}
            >
              Suspend Account
            </Button>
          </div>
        </Modal>

        <div className="mt-4 flex justify-between items-center">
          {suspend ? (
            <Button
              className="bg-black text-white hover:!bg-black border-none hover:!text-white p-5"
              onClick={confirm}
            >
              Retrieve Account
            </Button>
          ) : (
            <Button
              className="bg-black text-white hover:!bg-black border-none hover:!text-white p-5"
              onClick={showModal}
            >
              Suspend Account
            </Button>
          )}

          <Button className="bg-[#B475CC] text-white hover:!bg-[#B475CC] border-none hover:!text-white p-5">
            Notifications
          </Button>
          <Link to="/activity-logs">
            <Button className="bg-[#0085C9] text-white hover:!bg-[#0085C9] border-none hover:!text-white p-5">
              Activity Logs
            </Button>
          </Link>
          <Button className="bg-[#FF9064] text-white hover:!bg-[#FF9064] border-none hover:!text-white p-5">
            Ban Account
          </Button>
        </div>
      </div>

      <div className="p-3 mt-5 bg-white rounded">
        <p className="font-semibold">Account Information</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-3 items-center">
            <img src={user} alt="" className="w-12 rounded-full" />
            <div>
              <p className="text-xs">Profile Picture</p>
              <p className="text-[.6rem] text-[#333333B2]">
                PNG, JPEG under 10mb
              </p>
            </div>
          </div>
          <div>
            <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
              Delete Picture
            </Button>
          </div>
        </div>

        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <div className="flex items-center justify-between gap-10 mt-4">
            <div className="w-full">
              <Form.Item
                name="firstName"
                label="First Name"
                className="font-semibold text-2xl"
              >
                <Input className="bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!border-[#0A0E1614] hover:!border-[#0A0E1614] forced-colors:!bg-[#F6F6F6] border-[#0A0E1614]" />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                name="firstName"
                label="First Name"
                className="font-semibold text-2xl"
              >
                <Input className="bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!border-[#0A0E1614] hover:!border-[#0A0E1614] forced-colors:!bg-[#F6F6F6] border-[#0A0E1614]" />
              </Form.Item>
            </div>
          </div>
          <div className="flex items-center justify-between gap-10 -mt-5">
            <div className="w-full">
              <Form.Item
                name="firstName"
                label="First Name"
                className="font-semibold text-2xl"
              >
                <Input className="bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!border-[#0A0E1614] hover:!border-[#0A0E1614] forced-colors:!bg-[#F6F6F6] border-[#0A0E1614]" />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                name="firstName"
                label="First Name"
                className="font-semibold text-2xl"
              >
                <Input className="bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!border-[#0A0E1614] hover:!border-[#0A0E1614] forced-colors:!bg-[#F6F6F6] border-[#0A0E1614]" />
              </Form.Item>
            </div>
          </div>
          <div className="flex items-center justify-between gap-10 -mt-5">
            <div className="w-full">
              <Form.Item
                name="firstName"
                label="First Name"
                className="font-semibold text-2xl"
              >
                <Input className="bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!border-[#0A0E1614] hover:!border-[#0A0E1614] forced-colors:!bg-[#F6F6F6] border-[#0A0E1614]" />
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                name="firstName"
                label="First Name"
                className="font-semibold text-2xl"
              >
                <Input className="bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!border-[#0A0E1614] hover:!border-[#0A0E1614] forced-colors:!bg-[#F6F6F6] border-[#0A0E1614]" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SingleUser;
