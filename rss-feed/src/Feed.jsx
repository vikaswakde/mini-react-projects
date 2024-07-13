import React from "react";

const Feed = ({ title, link, date }) => {
  let formatted = { day: "numeric", month: "long", year: "numeric" };

  let articleDate = new Date(date).toLocaleDateString("en-IN", formatted);

  return (
    <div className="flex mx-2 my-2 rounded-2xl h-[15rem] shadow-lg px-2 border-dotted hover:border-red-400 border-red-200 border-2 ">
      <div className="w-[45%] h-[13rem] mr-1 rounded-xl mt-4 flex items-center justify-center bg-gray-white px-1 shadow-sm  hover:shadow-lg">
        <img
          src="https://cdn-images-1.medium.com/v2/1*TGH72Nnw24QL3iV9IOm4VA.png"
          alt="img"
        />
      </div>
      <div className="w-[65%] h-[13rem] flex  my-7 flex-wrap">
        <div className="text-sm pl-3 flex flex-col gap-y-1 ">
          <div className="mt-2 shadow-teal-500 shadow-sm rounded-lg py-2 px-3 flex flex-col gap-y-2  m-4 md:m-0 h-[8.3rem] mb-1">
            <p>{articleDate}</p>
            <p className="font-bold">{title}</p>
          </div>
          <button className="bg-gradient-to-tr from-red-500 to-red-600 rounded-xl py-1 w-[44%] border border-gray-400 hover:bg-red-200 text-white mt-2 ml-4 shadow-red-500 shadow-lg">
            <a href={link} target="_blank">
              Read Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
