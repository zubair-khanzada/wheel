import React, { Component } from 'react';
import { Menu, Icon, Row, Col } from 'antd';

const { SubMenu }  = Menu;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }

    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    };

    render() {
        return (
            <div className="header">
                <Row>
                    <Col className="" span={8}>
                        <div className="logo">
                            <img src={require('../../images/logo.png')} alt="" />
                        </div>
                    </Col>
                    <Col className="right" span={16}>
                        <div className="">
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="mail">
                                    <Icon type="mail" />
                                    About Us
                                </Menu.Item>
                                <Menu.Item key="app">
                                    <Icon type="appstore" />
                                    Services
                                </Menu.Item>
                                <Menu.Item key="apps">
                                    <Icon type="appstore" />
                                    Products
                                </Menu.Item>
                                <SubMenu
                                    title={
                                        <span className="submenu-title-wrapper">
                                          <Icon type="setting" />
                                          User
                                        </span>
                                    }
                                    >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header
