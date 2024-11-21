import React, { useState } from "react";
import { Segmented, Button, Modal } from "antd";

import verify from "../assets/verify.png";
import user_img_dark from "../assets/user_img_dark.png";
import dot from "../assets/dot.png";
import info from "../assets/info-circle.png";
import bgImg from "../assets/bgImg.png";
import checked from "../assets/checked.png";
import share from "../assets/share.png";
import message from "../assets/message.png";

const AllModerations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState("Flagged Posts");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const text =
    "New Solar Panel Technology that Sell Sunlight at Night Increases Efficiency by 40% New Solar Panel Technology that Sell Sunlight at Night Increases Efficiency by 40%";
  const truncatedText = text.substring(0, text.indexOf("40%") + 3);

  const data = [
    {
      id: 1,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity:
        "Making The Tech Ecosystem A Safe Space To Grow, Learn and Connect",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 2,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 3,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 4,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 5,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
  ];

  const data2 = [
    {
      id: 1,
      img: user_img_dark,
      owner: "@Parkermann12 Commented on @williambull00’s Post",
      activity:
        "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 2,
      img: user_img_dark,
      owner: "@Parkermann12 Commented on @williambull00’s Post",
      activity:
        "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 3,
      img: user_img_dark,
      owner: "@Parkermann12 Commented on @williambull00’s Post",
      activity:
        "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 4,
      img: user_img_dark,
      owner: "@Parkermann12 Commented on @williambull00’s Post",
      activity:
        "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 5,
      img: user_img_dark,
      owner: "@Parkermann12 Commented on @williambull00’s Post",
      activity:
        "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
      post: "View Post",
      content: truncatedText,
      spam: "This user is currently flagged for spam",
      date: "12:56 PM | 01-09-2024 ",
    },
  ];

  return (
    <div className="bg-white rounded-md p-3 mt-5 relative">
      <h1 className="text-lg font-semibold absolute top-5">Moderations</h1>

      <div className="flex justify-end mt-2">
        <Segmented
          defaultValue="Flagged Posts"
          className="mb-4"
          options={["Flagged Posts", "Flagged Comments"]}
          onChange={(value) => setSelectedSegment(value)}
        />
      </div>

      {selectedSegment === "Flagged Posts" ? (
        <>
          {data.map((e) => {
            return (
              <div className="border-b border-gray-200">
                <div className="flex justify-between mt-4">
                  <div className="flex gap-2">
                    <img
                      src={e.img}
                      alt=""
                      className="rounded-full h-12 w-12"
                    />
                    <div className="flex gap-2 items-center -mt-6">
                      <p className="font-semibold">{e.owner}</p>
                      <img src={verify} alt="" className="w-4" />
                      <img src={dot} alt="" className="" />
                      <p className="text-gray-400 text-xs">{e.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-7">
                    <Button
                      className="text-black bg-[#F3F3F4] rounded-full hover:!bg-[#F3F3F4] hover:!text-[black] outline-none border-none"
                      onClick={showModal}
                    >
                      Review Post
                    </Button>
                    <Button className="text-black bg-[#F3F3F4] rounded-full hover:!bg-[#F3F3F4] hover:!text-[black] outline-none border-none">
                      Warn User
                    </Button>
                    <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
                      Delete Post
                    </Button>
                  </div>
                </div>
                <p className="ml-14 -mt-5 font-semibold mb-2">{e.activity}</p>
                <div className="text-ellipsis overflow-hidden whitespace-nowrap ml-14 text-gray-400 text-xs mb-3">
                  {e.content}...
                </div>
                <div className="ml-14 flex items-center gap-2 mb-3 bg-[#F3F3F4] rounded-full px-2 py-1 w-64">
                  <img src={info} alt="" className="w-4" />
                  <p className="text-xs">{e.spam}</p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {data2.map((e) => {
            return (
              <div className="border-b border-gray-200">
                <div className="flex justify-between mt-4">
                  <div className="flex gap-2">
                    <img
                      src={message}
                      alt=""
                      className="rounded-full h-12 w-12"
                    />
                    <div className="flex gap-2 items-center -mt-6">
                      <p className="font-semibold">{e.owner}</p>
                      <img src={dot} alt="" className="" />
                      <p className="text-gray-400 text-xs">{e.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-7">
                    <Button className="text-black bg-[#F3F3F4] rounded-full hover:!bg-[#F3F3F4] hover:!text-[black] outline-none border-none">
                      Warn User
                    </Button>
                    <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
                      Delete Post
                    </Button>
                  </div>
                </div>
                <div className="bg-[#F6F6F6] p-2 mb-3 rounded-md w-80 ml-14">
                  <p>{e.activity}</p>
                </div>
                <div className="ml-14 flex items-center gap-2 mb-3 bg-[#F3F3F4] rounded-full px-2 py-1 w-64">
                  <img src={info} alt="" className="w-4" />
                  <p className="text-xs">{e.spam}</p>
                </div>
              </div>
            );
          })}
        </>
      )}

      <Modal
        title="Post Details"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="rounded-md bg-[#F6F6F6] p-3">
          <div className="flex gap-2">
            <img src={user_img_dark} alt="" className="rounded-full w-10" />
            <div>
              <div className="flex items-center gap-1">
                <p className="text-xs font-semibold">Ramsey Gary</p>
                <img src={verify} alt="" className="w-4" />
                <p className="text-xs">@ramseygry12</p>
              </div>
              <p className="text-[.7rem] text-[#333333CC] mt-1">29-09-2024</p>
            </div>
          </div>

          <div className="mt-3">
            <img src={bgImg} alt="" />
          </div>

          <div className="mt-2">
            <p className="font-semibold mb-2 text-sm">
              New Solar Panel Technology that Sell Sunlight at Night Increases
              Efficiency by 40%
            </p>

            <p className="text-[#333333BF] text-[.6rem]">
              New Solar Panel Technology that Sell Sunlight at Night Increases
              Efficiency by 40% New Solar Panel Technology that Sell Sunlight at
              Night Increases Efficiency by 40%, New Solar Panel Technology that
              Sell Sunlight at Night Increases Efficiency by 40%, New Solar
              Panel Technology that Sell Sunlight at Night Increases Efficiency
              by 40% New Solar Panel Technology that Sell Sunlight at Night
              Increases Efficiency by 40% New Solar Panel Technology that Sell
              Sunlight at Night Increases Efficiency by 40%....
            </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <img src={checked} alt="" className="w-3" />
                <p className="text-[#333333BF] text-[.6rem]">50k Likes</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={message} alt="" className="w-4" />
                <p className="text-[#333333BF] text-[.6rem]">3k Comments</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={share} alt="" className="w-3" />
                <p className="text-[#333333BF] text-[.6rem]">9.6k Share</p>
              </div>
            </div>
            <div>
              <p className="text-[#333333BF] text-[.6rem]">
                1M Total Impressions
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <Button className="text-black bg-[#F3F3F4] rounded-full hover:!bg-[#F3F3F4] hover:!text-[black] outline-none border-none">
            Warn Post
          </Button>
          <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
            Delete Post
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AllModerations;
