import { Segmented, Button } from "antd";

import verify from "../assets/verify.png";
import user_img_dark from "../assets/user_img_dark.png";
import dot from "../assets/dot.png";

const FeaturedPost = () => {
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
      like: "50k Likes",
      comment: "3k Comments",
      share: "1.3k Shares",
      impression: "300k Total Impressions",
    },
    {
      id: 2,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
      like: "50k Likes",
      comment: "3k Comments",
      share: "1.3k Shares",
      impression: "300k Total Impressions",
    },
    {
      id: 3,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
      like: "50k Likes",
      comment: "3k Comments",
      share: "1.3k Shares",
      impression: "300k Total Impressions",
    },
    {
      id: 4,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
      like: "50k Likes",
      comment: "3k Comments",
      share: "1.3k Shares",
      impression: "300k Total Impressions",
    },
    {
      id: 5,
      img: user_img_dark,
      owner: "Ramsey Gary",
      activity: "Submitted a post | Making Tech Ecosystem A Safe Space",
      post: "View Post",
      content: truncatedText,
      date: "12:56 PM | 01-09-2024 ",
      like: "50k Likes",
      comment: "3k Comments",
      share: "1.3k Shares",
      impression: "300k Total Impressions",
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-md p-3 mt-5 relative">
        <h1 className="text-lg font-semibold absolute top-5">
          Featured Posts Management
        </h1>

        <div className="flex justify-end mt-2">
          <Segmented
            defaultValue="Most Engaged"
            className="mb-4"
            options={["Most Engaged", "Top-rated"]}
            onChange={(value) => setSelectedSegment(value)}
          />
        </div>

        <div className="mt-4 pb-4">
          {data.map((e) => {
            return (
              <>
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
                      <p className="text-gray-400 text-xs">{e.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button className="text-black bg-[#F3F3F4] rounded-full hover:!bg-[#F3F3F4] hover:!text-[black] outline-none border-none">
                      View Post
                    </Button>
                    <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none">
                      Highlight Post
                    </Button>
                  </div>
                </div>
                <p className="ml-14 -mt-5 font-semibold mb-2">{e.activity}</p>
                <div className="text-ellipsis overflow-hidden whitespace-nowrap ml-14 text-gray-400 text-xs mb-3">
                  {e.content}...
                </div>

                <div className="flex gap-2 items-center ml-14 mb-3">
                  <p className="text-xs text-gray-400">{e.like}</p>
                  <img src={dot} alt="" />
                  <p className="text-xs text-gray-400">{e.comment}</p>
                  <img src={dot} alt="" />
                  <p className="text-xs text-gray-400">{e.share}</p>
                  <img src={dot} alt="" />
                  <p className="text-xs text-gray-400">{e.impression}</p>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
