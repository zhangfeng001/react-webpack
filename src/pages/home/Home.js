import React, { Component, Fragment } from "react";
import { HashRouter, Route, Switch, Redirect,Link } from "react-router-dom";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
import "./Home.scss";
import Page1 from "@pages/page1/index";
import Page2 from "@pages/page2/index";
import Page3 from "@pages/page3/index";
import List from "@pages/list/index";
import TodoList from "@pages/Todolist";
import Login from "@pages/login/index";
import MenuComp from "../../components/menu";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }
  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
          <Layout className="HomeWrap">
            {/* 左边 */}
            <Sider
              className="sider"
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" >log</div>
              <MenuComp></MenuComp>
            </Sider>

            {/* 右边 */}
            <Layout className="site-layout">
              <Header className="Hearder" style={{ background: "#ffffff" }}>
                <div className="leftToggle">
                  {React.createElement(
                    this.state.collapsed
                      ? MenuUnfoldOutlined
                      : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: this.toggleCollapsed,
                    }
                  )}
                </div>
                <div className="rig-userInfo">
                  <Link to='/'>登录</Link>
                </div>
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <>{this.props.children}</>
              </Content>
            </Layout>
          </Layout>
    );
  }
}

export default Home;
