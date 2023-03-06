import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import React, { useState, useRef, useEffect } from "react"
import Button from "../button"
import DropDown from "../dropdown"
import useOnClickOutside from "../../function/outsideClick"
import useLockBodyScroll from "../../function/lockScroll"
export default function Modal({ open, setOpen, id, handleGetAllTodoItems }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [itemName, setItemName] = useState('');
  const [allowSave, setAllowSafe] = useState(false);
  const [createTodo, setCreateTodo] = useState({});
  const [priority, setPriority] = useState({
    title: "very high",
    priority: "very-high",
    color: "bg-[#ED4C5C]"
  });
  const priorityRef = useRef(null);
  const modalRef = useRef(null);

  const openDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  const handleInput = e => {
    setItemName(e.target.value);
  }

  useEffect(() => {
    if (itemName.length > 0) {
      setAllowSafe(true);
    } else {
      setAllowSafe(false)
    }
  }, [itemName])

  useEffect(() => {
    setCreateTodo({
      "activity_group_id": id,
      "title": itemName,
      "priority": priority.priority
    })
  }, [itemName, priority])

  useOnClickOutside(priorityRef, () => setIsDropDownOpen(false))
  useOnClickOutside(modalRef, () => setOpen(false))

  useLockBodyScroll()

  return (
    <div className={`z-10 fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center ${open ? "block" : "hidden"}`}>
      <div ref={modalRef} data-cy="modal-add" className="bg-white rounded-xl font-semibold divide-y divide-neutral-200 px-8 w-full md:w-4/6">
        <div className="flex flex-row py-6 items-center justify-between">
          <h3 data-cy="modal-add-title" className="text-lg leading-none capitalize">tambah list item</h3>
          <div data-cy="modal-add-close-button" className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6"></XMarkIcon>
          </div>
        </div>
        <div className="py-9 flex flex-col gap-6 !z-[1000]">
          <div className="flex flex-col gap-2.5">
            <h4 data-cy="modal-add-name-title" className="text-xs leading-none uppercase">nama list item</h4>
            <input data-cy="modal-add-name-input" type="text" name="" id="" placeholder="tambahkan nama list item" className="form-input rounded-md border-neutral-200 text-base placeholder:text-[#a4a4a4] placeholder:font-normal font-normal focus:ring-0" value={itemName} onChange={handleInput} />
          </div>
          <div className="flex flex-col gap-2.5">
            <DropDown purpose="priority" open={isDropDownOpen} setPriorityCreate={setPriority}></DropDown>
            <h4 data-cy="modal-add-priority-title" className="text-xs leading-none uppercase">priority</h4>
            <div data-cy="modal-add-priority-dropdown" ref={priorityRef} className="py-3.5 px-4 border border-neutral-200 rounded-md flex flex-row items-center gap-5 cursor-pointer w-full md:w-60" onClick={openDropDown}>
              <div className={`${priority.color} w-3 h-3 rounded-full`}></div>
              <p className="text-base font-normal leading-none flex-1">{priority.title}</p>
              <div className="w-6 h-6 text-black">
                <ChevronDownIcon className="w-6 h-6 text-black"></ChevronDownIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-row-reverse">
          <Button purpose="simpan" setOpenModal={setOpen} openModal={open} allowSave={allowSave} createTodo={createTodo} handleGetAllTodoItems={handleGetAllTodoItems}></Button>
        </div>
      </div>
    </div>
  )
}