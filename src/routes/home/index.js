import { Helmet } from "react-helmet"
import EmptyState from "../../assets/empty"
import Button from "../../component/button"
import Card from "../../component/card"
// import Header from "../../component/header"
export default function Home() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <>
      <Helmet>
        <title>Dashboard | To Do List</title>
      </Helmet>
      {/* <Header></Header> */}
      <div className="px-8 sm:px-16 md:px-20 lg:px-30 2xl:px-56 my-11 text-black">
        <div className="flex flex-row justify-between items-center">
          <h1 datacy="activity-title" className="text-4xl font-bold capitalize">activity</h1>
          <Button></Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6 mt-12">
          {a.length > 0 ? a.map(aa => {
            return <Card key={aa} title={aa}></Card>
          }) : <EmptyState></EmptyState>}
        </div>

      </div>
    </>
  )
}