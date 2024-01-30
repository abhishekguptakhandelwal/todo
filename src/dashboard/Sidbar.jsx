import React from "react";
import {
  HomeOutlined,
  UnorderedListOutlined,
  FolderAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Dashboard",
          },
          // {
          //   key: "2",
          //   icon: <FolderAddOutlined />,
          //   label: "Create Todo ",
          // },
          // {
          //   key: "3",
          //   icon: <UnorderedListOutlined />,
          //   label: "Todo List",
          // },

          {
            key: "2",
            icon: <LogoutOutlined />,
            label: "logout",
            onClick: handleclick,
          },
        ]}
      />
    </Sider>
  );
};
