import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import useOnClickOutside from "../../function/outsideClick";
import Button from "../button";
export default function ModalDelete({ open, setOpen }) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, () => setOpen(false))
  return (
    <div className={`z-10 fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center ${open ? "block" : "hidden"}`}>
      <div ref={modalRef} className="bg-white rounded-xl p-10 grid grid-rows-3 justify-items-center items-center w-full md:w-fit md:max-w-[80%]">
        <div data-cy="modal-delete-icon" className="w-20 h-20">
          <ExclamationTriangleIcon className="w-20 h-20 text-[#ED4C5C]"></ExclamationTriangleIcon>
        </div>
        <h2 data-cy="modal-delete-title" className="text-center break-words hyphens-manual">Apakah anda yakin menghapus activity<br /><span className="font-bold">"makan malam bareng pak bos"</span>?</h2>
        <div className="flex flex-row gap-5">
          <Button purpose="batal" onClick={() => setOpen(!open)}></Button>
          <Button purpose="hapus" onClick={() => setOpen(!open)}></Button>
        </div>
      </div>
    </div>
  )
}