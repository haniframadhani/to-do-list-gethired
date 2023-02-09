import { Helmet } from "react-helmet"
import Button from "../../component/button"
import Card from "../../component/card"
import EmptyState from "../../component/emptyState"
export default function Home() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <>
      <Helmet>
        <title>Dashboard | To Do List</title>
      </Helmet>
      <div className="px-8 sm:px-16 md:px-20 lg:px-30 2xl:px-56 my-11 text-black">
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
          <h1 data-cy="activity-title" className="text-4xl font-bold capitalize">activity</h1>
          <Button purpose="tambah"></Button>
        </div>
        {a.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6 mt-12">
          {a.map(aa => {
            return <Card key={aa} title={aa}></Card>
          })}
        </div> :
          <EmptyState dataCy={"activity-empty-state"}></EmptyState>}
      </div>
    </>
  )
}