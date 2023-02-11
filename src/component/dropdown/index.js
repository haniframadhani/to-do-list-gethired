import { CheckIcon } from "@heroicons/react/24/outline";
import { forwardRef, useRef } from 'react';

export default function DropDown({ purpose, open }) {
  const sort = [
    {
      text: "terbaru",
      icon: "<svg xmlns='http://www.w3.org/2000/svg'fill='none'stroke='currentColor'strokeWidth='1.5'class='w-6 h-6 text-[#16ABF8]'viewBox='0 0 24 24'><path strokeLinecap='round'strokeLinejoin='round'd='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25'></path></svg>",
      datacy: "sort-latest"
    },
    {
      text: "terlama",
      icon: "<svg xmlns='http://www.w3.org/2000/svg'fill='none'stroke='currentColor'strokeWidth='1.5'class='w-6 h-6 text-[#16ABF8]'viewBox='0 0 24 24'><path strokeLinecap='round'strokeLinejoin='round'd='M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12'></path></svg>",
      datacy: "sort-oldest"
    },
    {
      text: "a-z",
      icon: "<svg xmlns='http://www.w3.org/2000/svg'fill='none'stroke='currentColor'strokeWidth='1.5'class='w-6 h-6 text-[#16ABF8]'viewBox='0 0 24 24'><path strokeLinecap='round'strokeLinejoin='round'd='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'></path></svg>",
      datacy: "sort-az"
    },
    {
      text: "z-a",
      icon: "<svg xmlns='http://www.w3.org/2000/svg'fill='none'stroke='currentColor'strokeWidth='1.5'class='w-6 h-6 text-[#16ABF8]'viewBox='0 0 24 24'><path strokeLinecap='round'strokeLinejoin='round'd='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'></path></svg>",
      datacy: "sort-za"
    },
    {
      text: "belum selesai",
      icon: "<svg xmlns='http://www.w3.org/2000/svg'fill='none'stroke='currentColor'strokeWidth='1.5'class='w-6 h-6 text-[#16ABF8]'viewBox='0 0 24 24' ><path strokeLinecap='round'strokeLinejoin='round'd='M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5' ></path></svg>",
      datacy: "sort-unfinished"
    },
  ];
  const priority = [
    {
      text: "very high",
      color: "bg-[#ED4C5C]",
      datacy: "modal-add-priority-very-high"
    },
    {
      text: "high",
      color: "bg-[#F8A541]",
      datacy: "modal-add-priority-high"
    },
    {
      text: "medium",
      color: "bg-[#00A790]",
      datacy: "modal-add-priority-medium"
    },
    {
      text: "low",
      color: "bg-[#428BC1]",
      datacy: "modal-add-priority-low"
    },
    {
      text: "very low",
      color: "bg-[#8942C1]",
      datacy: "modal-add-priority-very-low"
    }
  ];
  let items = purpose === "sort" ? [...sort] : [...priority];
  return (
    <div className={`z-0 min-w-max w-60 absolute text-base capitalize bg-white rounded-md shadow-md divide-y divide-neutral-200 transition-all duration-300 opacity-0 -top-40 ${open ? "opacity-100 !top-60 md:!top-52 lg:!top-48" : ""}`}>
      {items.map((item, index) => {
        return <a key={index} data-cy={item.datacy} className="py-3.5 px-5 hover:bg-zinc-200 active:bg-zinc-500 hover:cursor-pointer flex flex-row items-center gap-4">
          <div className={`w-4 h-4 ${purpose === "priority" ? `${item.color} rounded-full` : ""}`} dangerouslySetInnerHTML={{ __html: item.icon }}></div>
          <div className="flex-auto">{item.text}</div>
          <div className={`w-6 h-6 text-black`}>
            <CheckIcon></CheckIcon>
          </div>
        </a>
      })}
    </div >
  )
}