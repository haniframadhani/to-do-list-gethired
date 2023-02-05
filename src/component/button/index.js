import { PlusIcon } from '@heroicons/react/24/outline'
export default function Button({ dataCy, purpose }) {
  return (
    <button data-cy={dataCy} className={`capitalize ${purpose === "add" ? "bg-out-of-blue-900" : "bg-waterlemonade-900"} text-white rounded-full text-lg py-3.5 px-7 font-semibold flex flex-row gap-1.5 justify-between items-center`}>{purpose === "add" ? <PlusIcon className='w-6 h-6'></PlusIcon> : ""}{purpose === "add" ? "tambah" : "hapus"}</button>
  )
}