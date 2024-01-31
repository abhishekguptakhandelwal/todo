import React from "react";
import { InputNumber, Modal, Form, Input, Button } from "antd";
import { observer } from "mobx-react";

const Additem = ({ isModalOpen, handleOk, handleCancel }) => {
  const [form] = Form.useForm();

  console.log("Hello");
  const onFinish = (values) => {
    handleOk({ ...values, id: Math.random() * 100 });
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title="Item"
        okButtonProps={{ style: { backgroundColor: "#4096ff" } }}
        open={isModalOpen}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          form={form}
          id="myForm"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please Enter first Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please Enter last Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please Enter Age!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default observer(Additem);
