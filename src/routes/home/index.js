import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import AlertSuccess from "../../component/alert"
import Button from "../../component/button"
import Card from "../../component/card"
import EmptyState from "../../component/emptyState"
import ModalDelete from "../../component/modalDelete"
import { getAllActicity } from "../../function/apiRequest"
export default function Home() {
  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [openAlert, setOpenALert] = useState(false);
  const [activityList, setActivityList] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const handleGetAllActivityList = async () => {
    const res = await getAllActicity();
    setActivityList(res?.data?.data);
  }
  useEffect(() => {
    handleGetAllActivityList();
  }, [])
  return (
    <>
      <Helmet>
        <title>Dashboard | To Do List</title>
      </Helmet>
      <div className="px-8 sm:px-16 md:px-20 lg:px-30 2xl:px-56 my-11 text-black">
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
          <h1 data-cy="activity-title" className="text-4xl font-bold capitalize">Activity</h1>
          <Button purpose="tambah" handleGetAllActivityList={handleGetAllActivityList}></Button>
        </div>
        {activityList.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6 mt-12">
          {activityList.map(list => {
            return <Card key={list.id} id={list.id} title={list.title} date={list.created_at} setOpen={setOpenAlertDelete} setSelectedId={setSelectedId}></Card>
          })}
        </div> :
          <EmptyState dataCy={"activity-empty-state"}></EmptyState>}
      </div>
      {openAlertDelete && (<ModalDelete open={openAlertDelete} setOpen={setOpenAlertDelete} setPeringatan={setOpenALert} selectedId={selectedId}></ModalDelete>)}
      {openAlert && (<AlertSuccess open={openAlert} setOpen={setOpenALert} handleGetAllActivityList={handleGetAllActivityList}></AlertSuccess>)}
    </>
  )
}