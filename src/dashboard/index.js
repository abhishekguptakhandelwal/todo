import React, { useState } from "react";
import { Layout, Typography } from "antd";
import { Sidbar } from "./Sidbar";

import { Outlet } from "react-router-dom";

const { Title } = Typography;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-[100vh]">
      <Sidbar collapsed={collapsed} />
      <Outlet />
    </Layout>
  );
};

export default Index;
