import React from "react";
import { Button } from "antd";

import verify from "../assets/verify.png";
import user_img_dark from "../assets/user_img_dark.png";

const ContentsApproval = () => {
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
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 2,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 3,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 4,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
    },
    {
      id: 5,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-md p-3 mt-5">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Contents Approval</h1>
          <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
            Approve All Except Bots Posts
          </Button>
        </div>

        {data.map((e) => {
          return (
            <>
            <div className="border-b border-gray-200">
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <img src={e.img} alt="" className="rounded-full h-12 w-12" />
                  <div className="flex gap-2 items-center -mt-6">
                    <p className="font-semibold">{e.owner}</p>
                    <img src={verify} alt="" className="w-4" />
                    <p className="text-gray-400 text-xs">{e.date}</p>
                  </div>
                </div>
                <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
                  Approve Posts
                </Button>
              </div>
              <p className="ml-14 -mt-5 font-semibold mb-2">{e.activity}</p>
              <div className="text-ellipsis overflow-hidden whitespace-nowrap ml-14 text-gray-400 text-xs mb-3">
                {e.content}...
              </div>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ContentsApproval;
