import Sidebar from "../components/Sidebar"

function Layout({childrend}) {
  return (
    <div>
      <Sidebar/>
      <div>
        {childrend}
      </div>
    </div>
  )
}

export default Layout