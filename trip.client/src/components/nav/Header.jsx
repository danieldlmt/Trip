import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone, PlusCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="h" icon={<HomeTwoTone />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="c" icon={<PlusCircleOutlined/>}>
                    <Link to="/create">Create</Link>
                </Menu.Item>
                <Menu.Item key="t" icon={<UnorderedListOutlined />}>
                    <Link to="/trips">Trips</Link>
                </Menu.Item>
                <Menu.Item key="r" icon={<EditTwoTone />} style={{ marginLeft: 'auto' }}>
                    <Link to="/register">Register</Link>
                </Menu.Item>
                <Menu.Item key="l" icon={<CheckCircleTwoTone />} >
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
            <Outlet />
        </>

    )
};
export default Header;