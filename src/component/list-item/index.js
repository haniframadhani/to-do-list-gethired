import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
export default function ListItem({ activity }) {
  const [done, setDone] = useState(false);
  return (
    <div className="w-full bg-white rounded-xl px-7 py-8 font-medium shadow-sm flex flex-row items-center gap-4">
      <input type="checkbox" className="form-checkbox border-[#C7C7C7] bg-white text-[#16ABF8] focus:ring-0" defaultChecked={done ? true : false} onClick={() => setDone(!done)} />
      <div className="rounded-full w-2.5 h-2.5 md:w-2 md:h-2 grow-0 shrink-0 bg-red-400"></div>
      <h2 className={`text-lg leading-none ${done ? 'text-[#888] line-through' : 'text-black'}`}>Lorem ipsum dolor sit amet. {activity}</h2>
      <div className="flex-auto">
        <PencilIcon className="w-5 h-5 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-item-edit-button"></PencilIcon>
      </div>
      <div>
        <TrashIcon className="w-5 h-5 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-item-delete-button"></TrashIcon>
      </div>
    </div>
  )
}