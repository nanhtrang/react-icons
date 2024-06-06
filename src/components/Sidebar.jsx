import { Row } from 'react-bootstrap'
import data from '../assets/dump/data.json'
import svg from '../assets/react.svg'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate()

  return (
    <div className="sidebar-container">
      <div className="logo-container d-flex align-items-center ">
        <div className='logo mx-2 ms-3'>
          <img className='logo-svg' src={svg} color='#e91e63' alt="" />
        </div>
        <div className='logo-text'>
          react-icons
        </div>
      </div>
      <Row className='m-0 p-3'>
        <div className='search-box'>
          <input type="text"
          placeholder = "🔍 Search Icons"
            onFocus={(e) => e.target.placeholder = ""} 
            onBlur={(e) => e.target.placeholder = "🔍 Search Icons"}
          />
        </div>
      </Row>
      <Row className="menu m-0 p-0 px-3">
        {data.map((el, index) =>
          <div tabIndex={index + 1} onClick={() => {navigate("/" + el.path)}} className='menu-item d-flex align-items-center c-pointer' key={index}>{el.name}</div>
        )}
      </Row>
    </div>
  )
}

export default Sidebar