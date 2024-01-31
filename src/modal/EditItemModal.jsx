import React from "react";
import { InputNumber, Modal, Form, Input, Button } from "antd";
import { useForm } from "antd/es/form/Form";

const EditItemModal = ({ isModalOpen, handleCancel, editData }) => {
  const [form] = useForm();

  console.log(editData);

  const onFinish = (values) => {
    console.log("value :- ", values);
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
          id="editForm"
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

export default EditItemModal;
