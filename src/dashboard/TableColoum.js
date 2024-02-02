import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import TodoObj from "../store";
import { Popconfirm, message } from "antd";

export class Coloum {
  constructor(handleEdit) {
    this.handleEdit = handleEdit;
  }

  confirm = (todo) => {
    TodoObj.deleteTodo(todo);
    message.success("Deleted");
  };

  get TableCol() {
    return [
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
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => this.confirm(todo.id)}
            >
              <button onConfirm={() => this.confirm(todo)} className="font-xl">
                <DeleteOutlined style={{ color: "red" }} />
              </button>
            </Popconfirm>
            <button className="font-2xl" onClick={() => this.handleEdit(todo)}>
              <EditOutlined />
            </button>
          </div>
        ),
      },
    ];
  }
}
