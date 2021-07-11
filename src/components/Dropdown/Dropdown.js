import React from 'react'
import { Menu, Dropdown, Button } from 'antd';
import GoogleOutlined from '@ant-design/icons/GoogleOutlined'
import LinkedinOutlined from '@ant-design/icons/LinkedinOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'

const Dropdowns = (props) => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com">
                    <LinkedinOutlined /> Linkedin
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                    <GoogleOutlined /> Google
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                    <GoogleOutlined /> Google
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown.Button overlay={menu} placement="bottomLeft" arrow icon={<UserOutlined />}>
                On hover user icon appear in bottomLeft
            </Dropdown.Button>
            <Dropdown overlay={menu} placement="bottomCenter" arrow trigger={['click']}>
                <Button>On click bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button>On hover bottomRight</Button>
            </Dropdown>
            <br />
            <Dropdown overlay={menu} placement="topLeft" arrow>
                <Button>On hover topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter" arrow>
                <Button>On hover topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight" arrow>
                <Button>On hover topRight</Button>
            </Dropdown>
        </div>
    )
}

export default Dropdowns
