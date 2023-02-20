import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useEffect } from "react";
import { getOneActivity } from "../../function/apiRequest";
import useLockBodyScroll from "../../function/lockScroll";
import useOnClickOutside from "../../function/outsideClick";
import Button from "../button";
export default function ModalDelete({ open, setOpen, setPeringatan, selectedId }) {
  const [data, setData] = useState({})
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, () => setOpen(false))
  useLockBodyScroll()
  const handleGetOneActivity = async () => {
    const res = await getOneActivity(selectedId);
    setData(res?.data);
  }
  useEffect(() => {
    handleGetOneActivity();
  }, [])
  return (
    <div className={`z-20 fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center ${open ? "block" : "hidden"}`}>
      <div ref={modalRef} className="bg-white rounded-xl p-10 grid grid-rows-3 justify-items-center items-center w-full md:w-fit md:max-w-[80%]">
        <div data-cy="modal-delete-icon" className="w-20 h-20">
          <ExclamationTriangleIcon className="w-20 h-20 text-[#ED4C5C]"></ExclamationTriangleIcon>
        </div>
        <h2 data-cy="modal-delete-title" className="text-center break-words hyphens-manual">Apakah anda yakin menghapus activity<br /><span className="font-bold">"{data.title}"</span>?</h2>
        <div className="flex flex-row gap-5">
          <Button purpose="batal" setOpenModal={setOpen} openModal={open}></Button>
          <Button purpose="hapus" setOpenModal={setOpen} openModal={open} setPemberitahuan={setPeringatan} deleteId={data.id}></Button>
        </div>
      </div>
    </div>
  )
}