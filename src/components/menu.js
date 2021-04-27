import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;
import {
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { menuTree } from "../mock/menuTree";

class MenuCom extends Component {
    menuTag(menuData) {
        if (menuData && menuData.length > 0) {
          return menuData.map((item) => {
            if (item.children && item.children.length > 0) {
              return (
                <SubMenu key={item.key} icon={ item.icon } title={item.text}>
                  {this.menuTag(item.children)}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={ item.icon }>
                <Link to={item.path}>{item.text}</Link>
              </Menu.Item>
            );
          });
        }
      };
  render() {
    return (
      <Fragment>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          {this.menuTag(menuTree)}
        </Menu>
      </Fragment>
    );
  }
}

export default MenuCom;
