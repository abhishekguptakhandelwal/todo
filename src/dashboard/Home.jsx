import React, { useEffect, useState } from "react";

import { observer } from "mobx-react";

import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Layout, Row, Table } from "antd";
import FormItem from "antd/es/form/FormItem";
import AddItem from "../modal/addItem";
import EditItemModal from "../modal/EditItemModal";
import TodoObj from "../store/index";

const { Content } = Layout;

const Home = () => {
  var editData;

  const handleClick = (formValue) => {
    TodoObj.createTodo(formValue);
  };

  const handleDelete = (id) => {
    TodoObj.deleteTodo(id);
  };

  const handleEdit = (data) => {
    console.log("user id :- ", { ...data });
    editData = { ...data };
    setIsEditModalOpen(true);

    console.log("This is target value :- ", editData);

    console.log("inside age :- ", data.age);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (formValue) => {
    handleClick(formValue);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const EdithandleOk = () => {
    setIsEditModalOpen(false);
  };

  const EdithandleCancel = () => {
    setIsEditModalOpen(false);
  };

  const columns = [
    {
      key: 1,
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      key: 2,
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      key: 3,
      title: "age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item, todo) => (
        <div className="flex gap-6">
          <a onClick={() => handleDelete(todo.id)} className="font-xl">
            <DeleteOutlined style={{ color: "red" }} />
          </a>

          <a className="font-2xl" onClick={() => handleEdit(todo)}>
            <EditOutlined />
          </a>
        </div>
      ),
    },
  ];

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
          <Row className="flex justify-between w-full gap-4">
            <Col>
              <Row className="flex gap-4">
                <Col>
                  <Form.Item label="Search Item" name="searchItem">
                    <Input placeholder="Search Item" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button className="bg-[#4096ff]" type="primary">
                      Search
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
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
          <Table
            columns={columns}
            className="w-full"
            dataSource={[...TodoObj.todos]}
          />
        </Row>
        <AddItem
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Content>
      {console.log("inside html ", editData)}
      <EditItemModal
        isModalOpen={isEditModalOpen}
        handleOk={EdithandleOk}
        handleCancel={EdithandleCancel}
        editData={editData}
      />
    </Layout>
  );
};

export default observer(Home);
