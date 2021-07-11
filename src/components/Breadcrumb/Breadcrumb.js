import React from 'react';
import Link from 'react-router-dom/Link'
import { Breadcrumb } from 'antd';

const Breadcrumbs = (props) => {
    const { routes, ...rest } = props;
    function itemRender(route, params, routes, paths) {
        console.log(route)
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.name}</span>
        ) : (
            <a href={paths.join('/')}>{route.name}</a>
        );
    }
    return <Breadcrumb itemRender={itemRender} routes={routes} />;
}

export default Breadcrumbs;