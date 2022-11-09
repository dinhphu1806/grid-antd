import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import { Layout, Button, Menu } from 'antd';
import ButtonAntd from './components/ButtonAntd';
import IconnAntd from './components/IconnAntd';
import LayoutSpace from './components/Layout/LayoutSpace';
import AffixNavigation from './components/Navigation/AffixNavigation';
import Product from './components/Products/Product';

const { Header, Content, Sider ,Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Divider> 1 column (24 c/u)</Divider>
      <Row>
        <Col span={24} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</Col>
      </Row>

      <Divider> <h3>2 column (12 c/u) <br /> chưa có responsive</h3></Divider>
      <Row>
        <Col span={12} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={12} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
      </Row>

      <Divider> 2 column (12 c/u) <br /> có responsive</Divider>
      <Row>
        <Col xs={24} sm={12} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col xs={24} sm={12} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
      </Row>

      <Divider> <h3>3 column (8 c/u) <br /> chưa có responsive</h3> </Divider>
      <Row gutter={[16, 16]}>
        <Col flex={2} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column chiếm 2 phần</div> </Col>
        <Col flex={1} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column chiếm 1 phần</div> </Col>
        <Col flex={3} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column chiểm 3 phần</div> </Col>
      </Row>

      <Divider> 3 column (8 c/u) <br />  có responsive</Divider>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column chiếm 2 phần</div> </Col>
        <Col xs={24} sm={12} md={8} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column chiếm 1 phần</div> </Col>
        <Col xs={24} sm={12} md={8} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column chiểm 3 phần</div> </Col>
      </Row>

      <Divider> <h3>4 column (6 c/u) <br /> chưa có responsive</h3></Divider>
      <Row gutter={[16, 16]}>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
      </Row>

      <Divider> <h3>4 column (6 c/u) <br /> có responsive</h3></Divider>
      <Row gutter={[16, 16]} style={{maxWidth: '1200px', margin: '0 auto'}}>
        <Col xs={24} sm={12} md={8} lg={2} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col xs={24} sm={12} md={8} lg={4} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col xs={24} sm={12} md={8} lg={4} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col xs={24} sm={12} md={8} lg={4} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col xs={24} sm={12} md={8} lg={4} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col xs={24} sm={12} md={8} lg={4} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col xs={24} sm={12} md={8} lg={2} > <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
      </Row>

      <Divider> 4 column (6 c/u)</Divider>
      <Row gutter={[16, 16]}>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
        <Col span={6}> <div style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}> 1 Column</div> </Col>
      </Row>

      <Divider> 6 column (4 c/u)</Divider>
      <Row>
        <Col span={4} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={4} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={4} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={4} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={4} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={4} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
      </Row>

      <Divider> 8 column (3 c/u)</Divider>
      <Row>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col span={3} style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
      </Row>
      
      <Divider> 1 column 200px <br /> còn lại auto  (12 c/u)</Divider>
      <Row gutter={[8, 8]}>
        <Col flex="200px" style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col flex="auto" style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
      </Row>
     
      <Divider> 1 column 400px <br />  còn lại auto  (12 c/u)</Divider>
      <Row gutter={[8, 8]}>
        <Col flex="400px" style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
        <Col flex="auto" style={{backgroundColor: 'green', color: 'white', textAlign: 'center', border: '1px solid #ccc'}}>1 Column</Col>
      </Row>

      <br />
      <Product />
      
      <br />

      <ButtonAntd />
      <br />
      <IconnAntd />
      <br />
      <LayoutSpace />
      <br />
      <AffixNavigation />
    </div>
  );
}

export default App;
