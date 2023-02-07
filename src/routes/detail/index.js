import { ChevronLeftIcon, PencilIcon } from "@heroicons/react/24/outline"
import { Input } from "postcss"
import { useState } from "react"
import { Helmet } from "react-helmet"
import Button from "../../component/button"
import EmptyState from "../../component/emptyState"
export default function Detail() {
  const [title, setTitle] = useState("judul")
  const [isFocus, setIsFocus] = useState(false)

  const editTitle = e => {
    setTitle(e.target.value)
  }
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
            {!isFocus ? <h1 data-cy="activity-title" className="text-4xl font-bold w-60 md:w-full break-words">{title}</h1> : <input type="text" maxLength="20" name="title" id="title" value={title} onChange={editTitle} className="form-input bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#a4a4a4] font-bold text-4xl p-0 w-60 md:w-full" />}
            <div>
              <PencilIcon onClick={() => setIsFocus(!isFocus)} className="w-6 h-6 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-title-edit-button"></PencilIcon>
            </div>
          </div>
          <Button dataCy="activity-add-button" purpose="add"></Button>
        </div>
        <EmptyState dataCy="todo-empty-state"></EmptyState>
      </div>
    </>
  )
}