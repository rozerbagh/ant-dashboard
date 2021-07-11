import React, { useState } from 'react'

import { Menu, Layout } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;
export default function Sidebar(props) {
    const { routes, collapsed, onCollapsed, ...rest } = props
    const [prevOpenKeys, setPrevOpenKeys] = useState([routes[0].menukey]);

    const onOpenChange = keys => {

        const latestOpenKey = keys.find(key => prevOpenKeys.indexOf(key) === -1);
        console.log(routes.indexOf(latestOpenKey))

        const rootMenuKeys = [];
        routes.map(ele => rootMenuKeys.push(ele.menukey))

        if (rootMenuKeys.indexOf(latestOpenKey) === -1) {
            setPrevOpenKeys(keys);
        } else {
            setPrevOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const menus = routes.map((ele, key) => (
        <SubMenu key={ele.menukey} icon={ele.icon} title={ele.name}>
            {ele.subMenu.map((e, i) => (
                <Menu.Item key={`${key}${i}`}>{e.name}</Menu.Item>
            ))}
        </SubMenu>
    ))

    return (
        <Sider trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapsed}
            breakpoint="sm"
        >
            <div className="logo"></div>
            <Menu mode="inline"
                openKeys={prevOpenKeys}
                onOpenChange={onOpenChange}
                style={{ height: "100vh" }}>
                {menus}
            </Menu>
        </Sider>


    );
}
