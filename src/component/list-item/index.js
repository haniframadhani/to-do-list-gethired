import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { updateTodoItem } from "../../function/apiRequest";
export default function ListItem({ activity, setOpenModal, setOpenAlertDelete, priority, is_active, id, setDeleteIdTodo, handleGetAllTodoItems }) {
  const [done, setDone] = useState(false);
  const [data, setData] = useState({});
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
  const handleUpdateTodo = async () => {
    updateTodoItem(id, data);
    handleGetAllTodoItems();
  }
  useEffect(() => {
    handleUpdateTodo()
  }, [data])
  useEffect(() => {
    if (is_active === 0) {
      setDone(true)
    }
  }, [is_active])
  return (
    <div className="w-full bg-white rounded-xl px-7 py-8 font-medium shadow-sm flex flex-row items-center gap-4">
      <input type="checkbox" data-cy="todo-item-checkbox" className="form-checkbox border-[#C7C7C7] bg-white text-[#16ABF8] focus:ring-0" defaultChecked={is_active ? false : true} onClick={() => {
        setDone(!done)
        setData({ "is_active": done })
        handleGetAllTodoItems();
      }} />
      <div className={`rounded-full w-2.5 h-2.5 md:w-2 md:h-2 grow-0 shrink-0 ${color}`}></div>
      <h2 className={`text-lg leading-none ${done ? 'text-[#888] line-through' : 'text-black'}`}>{activity}</h2>
      <div className="flex-auto">
        <PencilIcon onClick={() => setOpenModal(true)} className="w-5 h-5 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-item-edit-button"></PencilIcon>
      </div>
      <div onClick={() => {
        setOpenAlertDelete(true)
        setDeleteIdTodo(id)
      }}>
        <TrashIcon className="w-5 h-5 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-item-delete-button"></TrashIcon>
      </div>
    </div>
  )
}