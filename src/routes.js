import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
export const routes = [
    {
        icon: <MailOutlined />,
        menukey: 'sub1',
        path: '/',
        component: '',
        name: 'Navigation One',
        subMenu: [
            {
                path: '/option1',
                component: '',
                name: 'Option 1',
            },
            {
                path: '/option2',
                component: '',
                name: 'Option 2',
            },
            {
                path: '/option3',
                component: '',
                name: 'Option 3',
            },
            {
                path: '/option4',
                component: '',
                name: 'Option 4',
            }
        ]
    }, {
        icon: <AppstoreOutlined />,
        menukey: 'sub2',
        path: '/two',
        component: '',
        name: 'Navigation Two',
        subMenu: [
            {
                path: '/option5',
                component: '',
                name: 'Option 5',
            },
            {
                path: '/option6',
                component: '',
                name: 'Option 6',
            },
            {
                path: '/option7',
                component: '',
                name: 'Option 7',
            },
            {
                path: '/option8',
                component: '',
                name: 'Option 8',
            }
        ]
    },
    {
        icon: <SettingOutlined />,
        menukey: 'sub3',
        path: '/three',
        component: '',
        name: 'Navigation Three',
        subMenu: [
            {
                path: '/option9',
                component: '',
                name: 'Option 9',
            },
            {
                path: '/option10',
                component: '',
                name: 'Option 10',
            },
            {
                path: '/option11',
                component: '',
                name: 'Option 11',
            },
            {
                path: '/option12',
                component: '',
                name: 'Option 12',
            }
        ]
    }
];