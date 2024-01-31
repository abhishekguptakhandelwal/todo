import React from "react";
import { Button, Popconfirm } from "antd";

const ConfirmBox = ({ confirm, cancel }) => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
export default ConfirmBox;
