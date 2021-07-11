import React from 'react'
import { Button } from 'antd';


function Buttons(props) {

    return (
        <div style={{margin: "20px"}}>
            <Button type="primary" style={{borderRadius:"8px"}}>Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </div>
    )
}

export default Buttons
