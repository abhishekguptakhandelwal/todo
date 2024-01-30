import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TodoStore from "../store/index";
import AddItem from "../modal/addItem";
const { Content } = Layout;

const Home = ({ collapsed, setCollapsed }) => {
  const todoStore = new TodoStore();

  const handleClick = () => {
    const firstName = "Abhishek";
    const lastName = "Khandelwal";
    const age = 24;
    const id = Math.random() * 10;

    todoStore.createTodo({ id, firstName, lastName, age });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <Row className="gap-3">
          <Row className="flex  justify-end w-full gap-4">
            <Col>
              <FormItem>
                <Button
                  type="primary"
                  className="bg-[#4096ff] flex justify-center items-center"
                  onClick={showModal}
                >
                  Add Item <PlusOutlined />
                </Button>
              </FormItem>
            </Col>
          </Row>
        </Row>
        <AddItem
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Content>
    </Layout>
  );
};

export default Home;
