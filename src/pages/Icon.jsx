import { Link, useLocation } from 'react-router-dom';
import '../assets/css/icon.css'
import Layout from '../layout/Layout'
import { useEffect, useState } from 'react';
import data from '../assets/dump/data.json'
import { Row } from 'react-bootstrap';
import { CopyBlock, googlecode } from 'react-code-blocks';


function Icon() {
  const location = useLocation();
  const [jsonData, setJsonData] = useState({})

  function renderIcon() {
    
  }

  useEffect(() => {
    const pathname = location.pathname
    const json = data.find((el) => ('/' + el.path) === pathname)
    setJsonData(json ? json : null)
  }, [location])
  return (
    <Layout>
      <Row>
        <h1 style={{fontWeight: 'normal'}}>{jsonData.name}</h1>
      </Row>
      <Row>
        <div>License</div>
        <Link style={{marginLeft: '40px'}} to={jsonData.licenseHref} >{jsonData.license}</Link>
      </Row>
      <Row>
        <div>Project</div>
        <Link style={{marginLeft: '40px'}} to={jsonData.projectName} >{jsonData.projectName}</Link>
      </Row>

      <Row className='mt-2'>
        <h4 style={{fontWeight: 'normal'}}>Import</h4>
        <div>
        <CopyBlock  theme={googlecode} language={'js'} text={jsonData.importSyntax} codeBlock showLineNumbers={false} />
        </div>
      </Row>

      <Row className='mt-2'>
        <h4 style={{fontWeight: 'normal'}}>Icons</h4>
        <div>
        <CopyBlock  theme={googlecode} language={'js'} text={jsonData.importSyntax} codeBlock showLineNumbers={false} />
        </div>
      </Row>
    </Layout>
  )
}

export default Icon