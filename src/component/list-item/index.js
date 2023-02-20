import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
export default function ListItem({ activity, setOpenModal, setOpenAlertDelete, priority, is_active }) {
  const [done, setDone] = useState(false);
  let color = ''
  if (priority === 'very-high') {
    color = 'bg-[#ED4C5C]'
  }
  if (priority === 'high') {
    color = 'bg-[#F8A541]'
  }
  if (priority === 'normal') {
    color = 'bg-[#00A790]'
  }
  if (priority === 'low') {
    color = 'bg-[#428BC1]'
  }
  if (priority === 'very-low') {
    color = 'bg-[#8942C1]'
  }
  if (is_active == 0) {
    setDone(true)
  }
  return (
    <div className="w-full bg-white rounded-xl px-7 py-8 font-medium shadow-sm flex flex-row items-center gap-4">
      <input type="checkbox" className="form-checkbox border-[#C7C7C7] bg-white text-[#16ABF8] focus:ring-0" defaultChecked={done ? true : false} onClick={() => setDone(!done)} />
      <div className={`rounded-full w-2.5 h-2.5 md:w-2 md:h-2 grow-0 shrink-0 ${color}`}></div>
      <h2 className={`text-lg leading-none ${done ? 'text-[#888] line-through' : 'text-black'}`}>{activity}</h2>
      <div className="flex-auto">
        <PencilIcon onClick={() => setOpenModal(true)} className="w-5 h-5 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-item-edit-button"></PencilIcon>
      </div>
      <div onClick={() => setOpenAlertDelete(true)}>
        <TrashIcon className="w-5 h-5 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-item-delete-button"></TrashIcon>
      </div>
    </div>
  )
}