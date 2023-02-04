import { PlusIcon } from '@heroicons/react/24/outline'
export default function Button() {
  return (
    <button datacy="activity-add-button" className="capitalize bg-out-of-blue-900 text-white rounded-full text-lg py-3.5 px-7 font-semibold flex flex-row gap-1.5 justify-between items-center"><PlusIcon className='w-6 h-6'></PlusIcon>tambah</button>
  )
}