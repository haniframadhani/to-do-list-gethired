import { TrashIcon } from "@heroicons/react/24/outline";
import { DateTime } from "luxon";

export default function Card({ id, title, date, setOpen, setSelectedId }) {
  const time = DateTime.fromISO(date);
  const waktu = time.setLocale('id').toLocaleString(DateTime.DATE_FULL);
  return (
    <a href={`/${id}`}>
      <div data-cy="activity-item" className="aspect-square bg-white pt-5 pb-6 px-7 rounded-xl shadow-md hover:shadow-xl flex flex-col justify-between">
        <h2 data-cy="activity-item-title" className="font-bold text-lg">{title}</h2>
        <div className="flex flex-row items-center justify-between">
          <p data-cy="activity-item-date" className="text-sm text-slate-500">{waktu}</p>
          <div data-cy="activity-item-delete-button" className="hover:cursor-pointer" onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setOpen(true)
            setSelectedId(id)
          }}>
            <TrashIcon className='w-6 h-6'></TrashIcon>
          </div>
        </div>
      </div>
    </a>
  )
}