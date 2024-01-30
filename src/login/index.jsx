import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("userName") !== undefined) {
      return navigate("/dashboard");
    }
  }, []);

  const onFinish = (values) => {
    console.log(Cookies.get("userName"));

    if (values.username === "test" && values.password === "123") {
      Cookies.set("userName", values.username);

      if (Cookies.get("userName") !== undefined) {
        return navigate("/dashboard");
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="min-h-[calc(100vh)] h-full w-[100vw]  bg-slate-700 flex justify-center items-center  ">
      <div className="container w-[30%]">
        <div className="flex justify-center items-center bg-slate-50  px-20 py-12 shadow-2xl rounded-md">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 12,
                span: 16,
              }}
            >
              <Button className="bg-[#4096ff]" type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Index;
