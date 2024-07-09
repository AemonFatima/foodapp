import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import NavBar from '../components/NavBar';
import FeatureCard from '../components/FeatureCard';
import Testimonials from '../components/Testimonials';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';

const { Content } = Layout;
const { Title } = Typography;

const HomePage = () => {
  return (
    <Layout className="layout">
      <NavBar />
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <div className="site-layout-content">
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Welcome to Our Food App
          </Title>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} lg={8}>
              <FeatureCard
                icon={<i className="icon" />}
                title="Fresh Ingredients"
                description="We use only the freshest ingredients in our dishes."
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <FeatureCard
                icon={<i className="icon" />}
                title="Fast Delivery"
                description="Enjoy fast and reliable delivery services."
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <FeatureCard
                icon={<i className="icon" />}
                title="Great Taste"
                description="Our dishes are crafted to deliver amazing taste."
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '40px' }}>
            <Col span={24}>
              <Title level={3} style={{ textAlign: 'center' }}>Testimonials</Title>
              <Testimonials />
            </Col>
          </Row>
          <Row style={{ marginTop: '40px' }}>
            <Col span={24}>
              <Title level={3} style={{ textAlign: 'center' }}>Download Our App</Title>
              <DownloadApp />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default HomePage;
