import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import React, { useState, useRef, useEffect } from "react"
import Button from "../button"
import DropDown from "../dropdown"
export default function Modal({ open, setOpen }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const priorityRef = useRef(null);
  const modalRef = useRef(null)

  const openDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  useOnClickOutside(priorityRef, () => setIsDropDownOpen(false))
  useOnClickOutside(modalRef, () => setOpen(false))
  return (
    <div className={`z-10 fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center ${open ? "block" : "hidden"}`}>
      <div ref={modalRef} className="bg-white rounded-xl font-semibold divide-y divide-neutral-200 px-8 w-full md:w-4/6">
        <div className="flex flex-row py-6 items-center justify-between">
          <h3 data-cy="modal-add-title" className="text-lg leading-none">tambah list item</h3>
          <div data-cy="modal-add-close-button" className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6"></XMarkIcon>
          </div>
        </div>
        <div className="py-9 flex flex-col gap-6 !z-[1000]">
          <div className="flex flex-col gap-2.5">
            <h4 data-cy="modal-add-name-title" className="text-xs leading-none">nama list item</h4>
            <input data-cy="modal-add-name-input" type="text" name="" id="" placeholder="tambahkan nama list item" className="form-input rounded-md border-neutral-200 text-base placeholder:text-[#a4a4a4] placeholder:font-normal font-normal focus:ring-0" />
          </div>
          <div className="flex flex-col gap-2.5">
            <DropDown purpose="priority" open={isDropDownOpen}></DropDown>
            <h4 data-cy="modal-add-priority-title" className="text-xs leading-none">priority</h4>
            <div data-cy="modal-add-priority-dropdown" ref={priorityRef} className="py-3.5 px-4 border border-neutral-200 rounded-md flex flex-row items-center gap-5 cursor-pointer w-full md:w-60" onClick={openDropDown}>
              <div className="bg-[#ED4C5C] w-3 h-3 rounded-full"></div>
              <p className="text-base font-normal leading-none flex-1">very high</p>
              <div className="w-6 h-6 text-black">
                <ChevronDownIcon className="w-6 h-6 text-black"></ChevronDownIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-row-reverse">
          <Button purpose="simpan" setOpenModal={setOpen} openModal={open}></Button>
        </div>
      </div>
    </div>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]
  );
}