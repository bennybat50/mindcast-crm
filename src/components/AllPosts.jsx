import React, { useState } from "react";
import { Segmented, Button } from "antd";

import user_img_dark from "../assets/user_img_dark.png";
import user_img_2 from "../assets/user_img_2.png";
import verify from "../assets/verify.png";
import dot from "../assets/dot.png";

const AllPosts = () => {
  const [selectedSegment, setSelectedSegment] = useState("Most Recent");

  const text =
    "New Solar Panel Technology that Sell Sunlight at Night Increases Efficiency by 40% New Solar Panel Technology that Sell Sunlight at Night Increases Efficiency by 40%";
  const truncatedText = text.substring(0, text.indexOf("40%") + 3);

  const activityLogs = {
    "Most Recent": [
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
    ],
    Flagged: [
      {
        id: 1,
        img: user_img_dark,
        img_2: user_img_2,
        activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
        post: "View Post",
        date: "12:56 PM | 01-09-2024 ",
      },
      {
        id: 2,
        img: user_img_dark,
        img_2: user_img_2,
        activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
        post: "View Post",
        date: "12:56 PM | 01-09-2024 ",
      },
      {
        id: 3,
        img: user_img_dark,
        img_2: user_img_2,
        activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
        post: "View Post",
        date: "12:56 PM | 01-09-2024 ",
      },
      {
        id: 4,
        img: user_img_dark,
        img_2: user_img_2,
        activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
        post: "View Post",
        date: "12:56 PM | 01-09-2024 ",
      },
      {
        id: 5,
        img: user_img_dark,
        img_2: user_img_2,
        activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
        post: "View Post",
        date: "12:56 PM | 01-09-2024 ",
      },
    ],
    Top_rated: [
      {
        id: 1,
        img: user_img_dark,
        title: "Comment on Mark Richmond’s Post",
        post: "View full details",
        activity:
          "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
        date: "2024-10-19",
      },
      {
        id: 2,
        img: user_img_dark,
        title: "Comment on Mark Richmond’s Post",
        post: "View full details",
        activity:
          "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
        date: "2024-10-19",
      },
      {
        id: 3,
        img: user_img_dark,
        title: "Comment on Mark Richmond’s Post",
        post: "View full details",
        activity:
          "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
        date: "2024-10-19",
      },
      {
        id: 4,
        img: user_img_dark,
        title: "Comment on Mark Richmond’s Post",
        post: "View full details",
        activity:
          "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
        date: "2024-10-19",
      },
      {
        id: 5,
        img: user_img_dark,
        title: "Comment on Mark Richmond’s Post",
        post: "View full details",
        activity:
          "This is really insightful and impressive, we keep learning everyday and keep up the great work. Thanks.",
        date: "2024-10-19",
      },
    ],
  };

  return (
    <div>
      <div className="bg-white rounded-md p-3 mt-5 relative">
        <h1 className="text-lg font-semibold absolute top-5">All Posts</h1>

        <div className="flex justify-end mt-2">
          <Segmented
            defaultValue="Most Recent"
            className="mb-4 w-[400px]"
            options={["Most Recent", "Flagged", "Top rated"]}
            onChange={(value) => setSelectedSegment(value)}
          />
        </div>

        <div className="mt-4">
          {/* Use fallback if selectedSegment is not a valid key */}
          {(activityLogs[selectedSegment] || []).map((log) => (
            <div
              key={log.id}
              className={`${
                selectedSegment === "Flagged"
                  ? "gap-0 p-2 pb-10 border-b border-gray-200 flex items-center"
                  : "p-2 pb-4 pt-3 border-b border-gray-200 flex gap-3 items-center"
              }`}
            >
              {log.img && (
                <img
                  src={log.img}
                  alt="User"
                  className={`${
                    selectedSegment === "Most Recent"
                      ? "w-10 h-10 rounded-full relative -top-5"
                      : "w-10 h-10 rounded-full"
                  }`}
                />
              )}
              {log.img_2 && (
                <img
                  src={log.img_2}
                  alt="User"
                  className={`${
                    selectedSegment === "Most Recent"
                      ? "w-10 h-10 rounded-full relative-top-2"
                      : "w-10 h-10 rounded-full relative right-4"
                  }`}
                />
              )}
              <div className="flex justify-between w-full">
                <div>
                  {selectedSegment === "Top_rated" ? (
                    <p className="font-semibold">{log.title}</p>
                  ) : (
                    <div>
                      <div className="flex items-center gap-2">
                        <p>{log.owner}</p>
                        <img src={verify} alt="" className="w-4" />
                        <img src={dot} alt="" />
                        {selectedSegment === "Most Recent" ? (
                          <span className="text-[.7rem] text-gray-500 ">
                            {log.date}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <p className="font-semibold">{log.activity}</p>
                    </div>
                  )}

                  {log.content && (
                    <p className="text-gray-400 text-xs mt-2">
                      {log.content}...
                    </p>
                  )}

                  {selectedSegment === "Top_rated" ? (
                    <div className="bg-[#F6F6F6] p-2 mt-2 rounded-md w-80">
                      <p>{log.activity}</p>
                    </div>
                  ) : null}

                  {selectedSegment === "Most Recent" ? (
                    ""
                  ) : (
                    <span className="text-[.7rem] text-gray-500 absolute left-3 mt-2">
                      {log.date}
                    </span>
                  )}
                </div>
                <div className="flex gap-5">
                  <Button className="text-black bg-[#F3F3F4] rounded-full hover:!bg-[#F3F3F4] hover:!text-[black] outline-none border-none">
                    {selectedSegment === "Top_rated"
                      ? "Flag Comment"
                      : "Edit Post"}
                  </Button>
                  <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
                    {selectedSegment === "Top_rated"
                      ? "Delete Comment"
                      : "Delete Post"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
