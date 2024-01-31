import React from "react";
import { InputNumber, Modal, Form, Input, Button } from "antd";
import { useForm } from "antd/es/form/Form";

const EditItemModal = ({ isModalOpen, handleOk, handleCancel, editData }) => {
  const [form] = useForm();

  const onFinish = (values) => {
    console.log("value :- ", values);
    console.log({ id: editData.id, ...values });
    handleOk({ id: editData.id, ...values });
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
            ["firstName"]: editData.firstName,
            ["lastName"]: editData.lastName,
            ["age"]: editData.age,
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
