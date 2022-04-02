import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography ;

const HomePage = () => {
    return (
        <div>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total Exchanges' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total Market Cap' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total 24H Volume' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total Market' value='5'></Statistic></Col>
            </Row>
        </div>
    );
};

export default HomePage;