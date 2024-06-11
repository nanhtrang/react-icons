import { Link, useLocation } from 'react-router-dom';
import '../assets/css/icon.css'
import Layout from '../layout/Layout'
import { useEffect, useState } from 'react';
import data from '../assets/dump/data.json'
import { Row } from 'react-bootstrap';
import { CopyBlock, googlecode } from 'react-code-blocks';
import IconDetail from '../components/IconDetail';


function Icon() {
  const location = useLocation();
  const [jsonData, setJsonData] = useState({})
  const [icons, setIcons] = useState([])
  const [lib, setLib] = useState([])



  useEffect(() => {
    const pathname = location.pathname
    const json = data.find((el) => ('/' + el.path) === pathname)
    setJsonData(json ? json : null)
    setIcons(json.icons)
    setLib(json.importSyntax.replace(/.*from "/).replace("\"", ""))
  }, [location])
  return (
    <Layout>
      <Row>
        <h1 style={{ fontWeight: 'normal' }}>{jsonData.name}</h1>
      </Row>
      <Row>
        <div>License</div>
        <Link style={{ marginLeft: '40px' }} to={jsonData.licenseHref} >{jsonData.license}</Link>
      </Row>
      <Row>
        <div>Project</div>
        <Link style={{ marginLeft: '40px' }} to={jsonData.projectName} >{jsonData.projectName}</Link>
      </Row>

      <Row className='mt-2'>
        <h4 style={{ fontWeight: 'normal' }}>Import</h4>
        <div>
          <CopyBlock theme={googlecode} language={'js'} text={jsonData.importSyntax} codeBlock showLineNumbers={false} />
        </div>
      </Row>

      <Row className='mt-2'>
        <h4 style={{ fontWeight: 'normal' }}>Icons</h4>
        <div className='icon-container'>
          {icons.map((el, index) => {
            return (
              <IconDetail key={index} name={el.name} libName={lib}/>
            )
          })}
        </div>
      </Row>
    </Layout>
  )
}

export default Icon