import React from 'react'

import { Layout, Menu } from 'antd';
const { Footer } = Layout;
const FooterLayout = (props) => {
    return (
        <Footer style={{ textAlign: 'center' }}>Moral Design ©{new Date().getFullYear()} Created by Rozer Bagh</Footer>
    )
}

export default FooterLayout