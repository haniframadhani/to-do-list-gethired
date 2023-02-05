import { ChevronLeftIcon, PencilIcon } from "@heroicons/react/24/outline"
import { Helmet } from "react-helmet"
import Button from "../../component/button"
import EmptyState from "../../component/emptyState"
export default function Detail() {
  return (
    <>
      <Helmet>
        <title>Detail | To Do List</title>
      </Helmet>
      <div className="px-8 sm:px-16 md:px-20 lg:px-30 2xl:px-56 my-11 text-black">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-5">
            <a href="/">
              <ChevronLeftIcon className="w-6 h-6" data-cy="todo-back-button"></ChevronLeftIcon>
            </a>
            <h1 data-cy="activity-title" className="text-4xl font-bold capitalize">activity</h1>
            <PencilIcon className="w-6 h-6 text-[#a4a4a4] hover:cursor-pointer" data-cy="todo-title-edit-button"></PencilIcon>
          </div>
          <Button dataCy="activity-add-button" purpose="add"></Button>
        </div>
        <EmptyState dataCy="todo-empty-state"></EmptyState>
      </div>
    </>
  )
}