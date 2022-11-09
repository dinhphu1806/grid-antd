import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Divider} from 'antd'
import { Layout, Menu } from 'antd';


const { Header, Content, Sider, Footer } = Layout

const Product = () => {
  return (
    <div className='product'>
        <Divider>
            <h1>Lisst Product</h1>
        </Divider>
        <Row gutter={[5, 5]} style={{textAlign: 'center', maxWidth: '1200px', margin: '0 auto'}}>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}> <div className="col" style={{backgroundColor: 'pink', color: 'white', minHeight:'200px' }}> 1 product</div> </Col>
        </Row>
    </div>
  )
}

export default Product