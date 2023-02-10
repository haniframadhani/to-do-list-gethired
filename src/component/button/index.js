import { PlusIcon } from '@heroicons/react/24/outline'
export default function Button({ purpose }) {
  const tambah = {
    text: "tambah",
    color: "bg-out-of-blue-900",
    datacy: "activity-add-button"
  }
  const hapus = {
    text: "hapus",
    color: "bg-waterlemonade-900",
    datacy: "modal-delete-confirm-button"
  }
  const batal = {
    text: "batal",
    color: "bg-zinc-100",
    datacy: "modal-delete-cancel-button"
  }
  const simpan = {
    text: "simpan",
    color: "bg-out-of-blue-900",
    datacy: "modal-add-save-button"
  }
  function state(tujuan) {
    if (tujuan === "tambah") {
      return tambah;
    }
    if (tujuan === "hapus") {
      return hapus;
    }
    if (tujuan === "simpan") {
      return simpan;
    }
    if (tujuan === "batal") {
      return batal;
    }
  }
  const btn = state(purpose)
  return (
    <button data-cy={btn.datacy} className={`capitalize z-10 ${btn.color} ${btn.color === "bg-zinc-100" ? "text-[#4A4A4A]" : ""} text-white rounded-full text-lg py-3.5 px-7 font-semibold flex flex-row gap-1.5 justify-between items-center`}>{purpose === "tambah" ? <PlusIcon className='w-6 h-6'></PlusIcon> : ""}{btn.text}</button>
  )
}