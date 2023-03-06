import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import useLockBodyScroll from "../../function/lockScroll";
import useOnClickOutside from "../../function/outsideClick";

export default function AlertSuccess({ open, setOpen, handleGetAllActivityList }) {
  const alertRef = useRef(null);

  useOnClickOutside(alertRef, () => {
    setOpen(false)
    handleGetAllActivityList();
  })
  useLockBodyScroll()

  if (open) {
    setTimeout(() => {
      setOpen(false)
      handleGetAllActivityList();
    }, 3000)
  }

  return (
    <div className={`z-20 fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center ${open ? "block" : "hidden"}`}>
      <div data-cy="modal-information" ref={alertRef} className="bg-white flex flex-row items-center gap-2.5 px-7 py-4 rounded-xl w-11/12 md:w-8/12 lg:w-5/12">
        <div data-cy="modal-information-icon" className="w-6 h-6 text-[#00A790]">
          <ExclamationCircleIcon className="w-6 h-6"></ExclamationCircleIcon>
        </div>
        <h3 data-cy="modal-information-title" className="font-medium text-sm leading-none">Activity telah dihapus</h3>
      </div>
    </div>
  )
}