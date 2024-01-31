import React, { useState } from "react";
import { Layout } from "antd";
import { Sidbar } from "./Sidbar";

import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-[100vh]">
      <Sidbar collapsed={collapsed} />

      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
