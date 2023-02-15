import { TrashIcon } from "@heroicons/react/24/outline";

export default function Card({ title, setOpen }) {
  return (
    <a href={`/${title}`}>
      <div data-cy="activity-card" className="aspect-square bg-white pt-5 pb-6 px-7 rounded-xl shadow-md hover:shadow-xl flex flex-col justify-between">
        <h2 className="font-bold text-lg">test {title}</h2>
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm text-slate-500">5 oktober 2022</p>
          <div className="hover:cursor-pointer" onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setOpen(true)
          }}>
            <TrashIcon className='w-6 h-6'></TrashIcon>
          </div>
        </div>
      </div>
    </a>
  )
}