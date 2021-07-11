import React from 'react';
import { Row, Col, Divider } from 'antd';

import Button from '../components/Button/Button'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Dropdown from '../components/Dropdown/Dropdown'
const Contents = (props) => {
    const { routes, ...rest } = props
    return (
        <>
            <Divider orientation="left">Grid</Divider>
            {/* <Breadcrumb routes={routes} /> */}
            <Row>
                <Col xs={24} sm={16} md={12} lg={8} xl={6}
                    style={{ padding: "5px" }}>
                    <div className="col">xs={24} sm={16} md={12} lg={8} xl={6}</div>
                </Col>
                <Col xs={24} sm={16} md={12} lg={8} xl={6}
                    style={{ padding: "5px" }}>
                    <div className="col">xs={24} sm={16} md={12} lg={8} xl={6}</div>
                </Col>
                <Col xs={24} sm={16} md={12} lg={8} xl={6}
                    style={{ padding: "5px" }}>
                    <div className="col">xs={24} sm={16} md={12} lg={8} xl={6}</div>
                </Col>
                <Col xs={24} sm={16} md={12} lg={8} xl={6}
                    style={{ padding: "5px" }}>
                    <div className="col">xs={24} sm={16} md={12} lg={8} xl={6}</div>
                </Col>
            </Row>
            <Row>
                <Col span={12} style={{ padding: "5px" }}>
                    <div className="col">col-12</div>
                </Col>
                <Col span={12} style={{ padding: "5px" }}>
                    <div className="col">col-12</div>
                </Col>
            </Row>
            <Row >
                <Col span={8} style={{ padding: "5px" }}>
                    <div className="col">col-8</div>
                </Col>
                <Col span={8} style={{ padding: "5px" }}>
                    <div className="col">col-8</div>
                </Col>
                <Col span={8} style={{ padding: "5px" }}>
                    <div className="col">col-8</div>
                </Col>
            </Row>
            <Row >
                <Col span={24} style={{ padding: "5px" }}>
                    <div className="col">col-24</div>
                </Col>
            </Row>

            <Dropdown />
            <Button/>
        </>
    )
}

export default Contents;