import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { Message } from "../../models/Message";
import "./email-writer.css";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 22 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const EmailWriter = () => {
  const onFinish = (values: Omit<Message, "creationDate">) => {
    console.log(values);
  };

  return (
    <Form
      className="email-form"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["sender"]}
        label="Sender id"
        rules={[{ required: true }]}
        wrapperCol={{ span: 10 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["receiver"]}
        label="Receiver id"
        rules={[{ required: true }]}
        wrapperCol={{ span: 10 }}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["subject"]} label="Subject">
        <Input />
      </Form.Item>
      <Form.Item name={["content"]} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};
