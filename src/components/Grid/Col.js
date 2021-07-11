import React from 'react';
import { Col } from 'antd';

const Column = (props) => {

    const { chilren, ...rest } = props;

    return (<Col style={{ padding: "5px" }} {...rest}>{chilren}</Col>)
}

export default Column;