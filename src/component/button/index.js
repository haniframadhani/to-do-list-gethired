import { PlusIcon } from '@heroicons/react/24/outline'
import { createNewActivity, createNewTodoList, deleteActivity, deleteTodoItem } from '../../function/apiRequest'
export default function Button({ purpose, setOpenModal, openModal, allowSave, setPemberitahuan, handleGetAllActivityList, deleteId, handleGetAllTodoItems, createTodo, deleteTodo }) {
  const tambah = {
    text: "Tambah",
    color: "bg-out-of-blue-900",
    datacy: "activity-add-button"
  }
  const tambahTodo = {
    text: "Tambah",
    color: "bg-out-of-blue-900",
    datacy: "todo-add-button"
  }
  const hapus = {
    text: "Hapus",
    color: "bg-waterlemonade-900",
    datacy: "modal-delete-confirm-button"
  }
  const batal = {
    text: "Batal",
    color: "bg-zinc-100 !text-[#4A4A4A]",
    datacy: "modal-delete-cancel-button"
  }
  const simpan = {
    text: "Simpan",
    color: "bg-out-of-blue-900",
    datacy: "modal-add-save-button"
  }
  function state(tujuan) {
    if (tujuan === "tambah") {
      return tambah;
    }
    if (tujuan === "hapus") {
      return hapus;
    }
    if (tujuan === "simpan") {
      return simpan;
    }
    if (tujuan === "batal") {
      return batal;
    }
    if (tujuan === "tambah-todo") {
      return tambahTodo
    }
  }
  const btn = state(purpose)
  let klik = async () => {
    if (purpose === 'hapus' && setOpenModal != null && setPemberitahuan != null && deleteTodo === false) {
      setOpenModal(!openModal);
      await deleteActivity(deleteId);
      setPemberitahuan(true);
    }
    if (purpose === 'hapus' && setOpenModal != null && deleteTodo === true) {
      setOpenModal(!openModal);
      await deleteTodoItem(deleteId);
      setPemberitahuan(true);
      // handleGetAllTodoItems();
    }
    if (purpose === 'tambah' && handleGetAllActivityList != null) {
      await createNewActivity({
        title: 'new activity',
        email: `${process.env.REACT_APP_EMAIL}`
      })
      handleGetAllActivityList();
    }
    if (purpose === 'simpan' && handleGetAllTodoItems != null && createTodo != null) {
      await createNewTodoList(createTodo)
      handleGetAllTodoItems();
    }
    if (setOpenModal != null) {
      return setOpenModal(!openModal)
    }
    return null
  };

  return (
    <button onClick={klik} data-cy={btn.datacy} className={`capitalize ${purpose === "tambah" ? "z-10" : "Z-0"} ${btn.color} ${allowSave == null ? null : allowSave ? "" : "!bg-[#D0EEFE]"} text-white rounded-full text-lg py-3.5 px-7 font-semibold flex flex-row gap-1.5 justify-between items-center`} disabled={allowSave == null ? null : allowSave ? false : true}>{purpose === "tambah" || purpose === "tambah-todo" ? <PlusIcon className='w-6 h-6'></PlusIcon> : ""}{btn.text}</button>
  )
}