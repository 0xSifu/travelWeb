import React from "react";
import Link from "next/link";
export const Bundle = () => {
  const dataImage = [
    {
      image_url:
        "https://i.ibb.co/d0Nzq5C/girl-bunaken2.png",
      price: "1,600,000",
      place: "Bunaken Siladen Lihaga",
      days: "3 hari 2 malam",
    },
    {
      image_url:
        "https://i.ibb.co/DGRv1zp/yesus.jpg",
      price: "1,700,000",
      place: "Snorkling Bunaken Siladen",
      days: "2 hari 2 malam",
    },
    {
      image_url:
        "https://i.ibb.co/PgdXpv3/siladen.jpg",
      price: "3,000,000",
      place: "Siladen Nain Lihaga Island",
      days: "3 hari 3 malam",
    },
    {
      image_url:
        "https://i.ibb.co/bmGRMdw/lahendong.jpg",
      price: "1,400,000",
      place: "Keliling Sulut",
      days: "3 hari 2 malam",
    },
    // {
    //   image_url:
    //     "https://i.ibb.co/P5Y9nDT/snorkling.jpg",
    //   rate: "5.0",
    //   place: "Bunaken Snorkling",
    //   times: "50",
    // },
    // {
    //   image_url:
    //     "https://i.ibb.co/KKgqkGM/nain.jpg",
    //   rate: "4.6",
    //   place: "Nain Island",
    //   times: "21",
    // },
    // {
    //   image_url:
    //     "https://i.ibb.co/Fz5JVTb/lihaga.jpg",
    //   rate: "5.0",
    //   place: "Pulau Lihaga",
    //   times: "29",
    // },
    // {
    //   image_url:
    //     "https://i.ibb.co/9HwKBqV/linow.jpg",
    //   rate: "4.9",
    //   place: "Danau Linow",
    //   times: "29",
    // },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20" >
      {dataImage.map((item, key) => (
        <div className="" key={key}>
          <Link href="/">
            <a>
              <img
                src={item.image_url}
                className="object-cover rounded-md hover:opacity-75"
                alt=""
              />

              <div className="py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-red-500 fill-current"
                  >
                    {/* <g data-name="Layer 2">
                      <g data-name="star">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(90 12 12)"
                          opacity="0"
                        />
                        <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
                      </g>
                    </g> */}
                  </svg>
                  {/* <h4 className="font-semibold mt-1" style={{color: "#FFFFFF"}}>{item.place}</h4> */}
                  
                  
                </div>
                <div className="">
                  <h4 className="font-semibold mt-1" style={{color: "#FFFFFF"}}>{item.place}</h4>
                  <label htmlFor={item.days} className="text-gray-500">
                    {item.days}
                  </label>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
