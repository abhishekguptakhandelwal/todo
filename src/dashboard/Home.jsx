import React, { useEffect, useState } from "react";

import { observer } from "mobx-react";

import {
  PlusOutlined,
  ArrowDownOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Table } from "antd";
import AddItem from "../modal/addItem";

import TodoObj from "../store/index";
import { exportCSV } from "../operation/ExportCsv";
import useDebounce from "../customHook/UseDebounce";
//import { columns } from "./TableColoum";
import { handleCancel } from "./DashboardMobxStore";
import { Coloum } from "./TableColoum";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const header = ["First Name", "Last Name", "Email", "Age"];
  let data = [...TodoObj.todos];

  const [dataSource, setDataSource] = useState(data);
  const [search, setSearch] = useState("");

  const handleEdit = (data) => {
    setEditData({ ...data });
    setIsEdit(true);
    setIsModalOpen(true);
  };
  const columns = new Coloum(handleEdit).TableCol;

  const handleOk = (formValue) => {
    if (isEdit) {
      TodoObj.updateTodo(formValue);
    } else {
      TodoObj.createTodo(formValue);
    }

    setDataSource([...TodoObj.todos]);
    setIsEdit(false);
    setIsModalOpen(false);
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
    if (search.length === 0) {
      setSearch("");
      setDataSource([...TodoObj.todos]);
    }
  };

  return (
    <>
      {" "}
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
                  onClick={() => setIsModalOpen(true)}
                >
                  Add Item <PlusOutlined />
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  className="bg-[#4096ff] flex justify-center items-center"
                  onClick={() => exportCSV([...TodoObj.todos], header)}
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
          dataSource={[...TodoObj.todos]}
          pagination={{
            pageSize: 50,
          }}
        />
      </Row>
      {isModalOpen && (
        <AddItem
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={() => handleCancel(setIsModalOpen, setIsEdit)}
          setDataSource={setDataSource}
          isEdit={isEdit}
          editData={editData}
        />
      )}
    </>
  );
};

export default observer(Home);
