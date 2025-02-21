import React from "react";

const WorkHero = () => {
  var images = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-800.webp",
      top: "44%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-800.webp",
      top: "49%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1-p-800.webp",
      top: "55%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b1608a4f57abd6f4bb1b06_cover-home-p-800.webp",
      top: "51%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/669d6f1f10e02f2cb6320ad9_669ad38beb29c99f7dfe1353_mockup-v3%402x%202-p-1600-p-800.webp",
      top: "57%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696679f0461a7a4ea3f2f06_20231005_Webflow_Conf_177-p-800.webp",
      top: "62%",
      left: "49%",
      isActive: false,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto text-center relative">
      <h1 className="text-[30vw] font-medium  select-none">Work</h1>
      <div className="imgs w-full h-full absolute top-0 ">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img key={index}
                className="w-66 absolute -translate-x-1/2 -translate-y-1/2"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default WorkHero;
