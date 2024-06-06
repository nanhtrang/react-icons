import Sidebar from "../components/Sidebar"

function Layout({children}) {
  return (
    <div className="d-flex">
      <Sidebar/>
      <div className="content-container">
        {children}
      </div>
    </div>
  )
}

export default Layout