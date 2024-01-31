import React from "react";
import {
  HomeOutlined,
  FolderAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export const Sidbar = ({ collapsed }) => {
  const navigate = useNavigate();
  const handleclick = () => {
    Cookies.remove("userName");
    navigate("/");
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="px-2">
      <div className="logo mt-4" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <HomeOutlined />
          <span>Dashboard</span>
          <Link to="/dashboard" />
        </Menu.Item>
        <Menu.Item key="2">
          <FolderAddOutlined />
          <span>Tik Tok</span>
          <Link to="/dashboard/tikTok" />
        </Menu.Item>
        <Menu.Item key="3" onClick={handleclick}>
          <LogoutOutlined />
          <span>logOut</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
