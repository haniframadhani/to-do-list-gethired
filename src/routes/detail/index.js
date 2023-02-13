import { ArrowsUpDownIcon, ChevronLeftIcon, PencilIcon } from "@heroicons/react/24/outline"
import { Input } from "postcss"
import { useState, useRef, useEffect } from "react"
import { Helmet } from "react-helmet"
import Button from "../../component/button"
import DropDown from "../../component/dropdown"
import EmptyState from "../../component/emptyState"
import ListItem from "../../component/list-item"
import Modal from "../../component/modal"
import ReactDOM from "react-dom/client";
export default function Detail() {
  const [title, setTitle] = useState("judul")
  const [isFocus, setIsFocus] = useState(false)
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dropdownIconRef = useRef(null);
  const inputRef = useRef(null);

  const editTitle = e => {
    setTitle(e.target.value)
  }

  const openDropDown = () => {
    setOpen(!open)
  }

  useOnClickOutside(dropdownIconRef, () => setOpen(false))
  useOnClickOutside(inputRef, () => setIsFocus(false))

  let b = [1, 2, 3, 4, 5]
  return (
    <>
      <Helmet>
        <title>Detail | To Do List</title>
      </Helmet>
      <div className="px-8 sm:px-16 md:px-20 lg:px-30 2xl:px-56 my-11 text-black">
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center max-w-screen-sm md:max-w-none">
          <div className="flex flex-row items-center gap-5">
            <a href="/">
              <ChevronLeftIcon className="w-6 h-6" data-cy="todo-back-button"></ChevronLeftIcon>
            </a>
            {!isFocus ?
              <h1 data-cy="activity-title" className="text-4xl font-bold w-60 md:w-full break-words text-center md:text-left">{title}</h1>
              :
              <form onSubmit={() => setIsFocus(false)}>
                <input ref={inputRef} type="text" maxLength="20" name="title" id="title" value={title} onChange={editTitle} className="form-input bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#a4a4a4] font-bold text-4xl p-0 w-60 md:w-full" autoFocus="true" />
              </form>}
            <div>
              <PencilIcon onClick={() => setIsFocus(!isFocus)} className="w-6 h-6 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-title-edit-button"></PencilIcon>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div ref={dropdownIconRef} className="border-2 rounded-full border-neutral-200 p-3.5 hover:cursor-pointer z-10" onClick={openDropDown}>
              <ArrowsUpDownIcon className='w-6 h-6 text-[#888]'></ArrowsUpDownIcon>
            </div>
            <Button purpose="tambah" setOpenModal={setOpenModal} openModal={openModal}></Button>
            <DropDown purpose="sort" open={open}></DropDown>
          </div>
        </div>
        {b.length > 0 ? <div className="flex flex-col gap-2.5 mt-12">
          {b.map((bb, index) => {
            return <ListItem key={index} activity={bb}></ListItem>
          })}
        </div> : <EmptyState dataCy="todo-empty-state"></EmptyState>}
      </div>
      <Modal open={openModal} setOpen={setOpenModal}></Modal>
    </>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]
  );
}