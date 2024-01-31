import React, { useEffect, useState } from "react";

import { observer } from "mobx-react";

import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Layout, Row, Table } from "antd";
import AddItem from "../modal/addItem";
import EditItemModal from "../modal/EditItemModal";
import TodoObj from "../store/index";
import { exportCSV } from "../operation/ExportCsv";
import useDebounce from "../customHook/UseDebounce";

const { Content } = Layout;
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const header = ["First Name", "Last Name", "Email", "Age"];
  let data = [...TodoObj.todos];

  const [dataSource, setDataSource] = useState(data);
  const [search, setSearch] = useState("");

  const handleClick = (formValue) => {
    TodoObj.createTodo(formValue);
  };

  const handleDelete = (id) => {
    TodoObj.deleteTodo(id);
    setDataSource([...TodoObj.todos]);
  };

  const handleEdit = (data) => {
    setEditData({ ...data });
    setIsEditModalOpen(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (formValue) => {
    handleClick(formValue);
    setDataSource([...TodoObj.todos]);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const EdithandleOk = (data) => {
    setIsEditModalOpen(false);
    console.log(data);
    TodoObj.updateTodo(data);
    setDataSource([...TodoObj.todos]);
  };

  const EdithandleCancel = () => {
    setIsEditModalOpen(false);
  };

  const exportData = () => {
    const userData = [...TodoObj.todos];
    exportCSV(userData, header);
  };
  useDebounce(
    () => {
      setDataSource(
        data.filter((todo) =>
          todo.firstName.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [search.length > 2],
    500
  );

  const handleSearch = () => {
    if (search.length === 0) {
      setDataSource([...TodoObj.todos]);
    }
    const filterBySearch = data.filter((todo) =>
      todo.firstName.toLowerCase().includes(search.toLowerCase())
    );
    setDataSource(filterBySearch);
  };
  let onChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) {
      setSearch("");
      setDataSource([...TodoObj.todos]);
    }
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      key: 4,
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
    <>
      {" "}
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
                      <Input placeholder="Search Item" onChange={onChange} />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                      <Button
                        className="bg-[#4096ff]"
                        type="primary"
                        onClick={handleSearch}
                      >
                        Search
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className="flex gap-4">
                  <Col>
                    <Button
                      type="primary"
                      className="bg-[#4096ff] flex justify-center items-center"
                      onClick={showModal}
                    >
                      Add Item <PlusOutlined />
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      className="bg-[#4096ff] flex justify-center items-center"
                      onClick={exportData}
                    >
                      Download <ArrowDownOutlined />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Table
              columns={columns}
              className="w-full"
              dataSource={dataSource}
            />
          </Row>
        </Content>
      </Layout>
      {isModalOpen && (
        <AddItem
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          setDataSource={setDataSource}
        />
      )}
      {isEditModalOpen && (
        <EditItemModal
          isModalOpen={isEditModalOpen}
          handleOk={EdithandleOk}
          handleCancel={EdithandleCancel}
          editData={editData}
        />
      )}
    </>
  );
};

export default observer(Home);
