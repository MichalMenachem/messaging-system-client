import React, { useContext } from "react";
import { Form, Input, Button, message } from "antd";
import { Message } from "../../models/Message";
import "./email-writer.css";
import axios from "axios";
import { UrlContext } from "../..";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 22 },
};

const validateMessages = {
  // eslint-disable-next-line
  required: "${label} is required!",
};

export const EmailWriter = () => {
  const [form] = Form.useForm();
  const baseUrl = useContext(UrlContext);

  const onFinish = async (values: Omit<Message, "creationDate">) => {
    try {
      await axios.post(`${baseUrl}/messages/${values.sender}/writeMessage`, {
        ...values,
        creationDate: new Date().toJSON(),
      });
      message.success("Message successfuly sent");
    } catch (error) {
      console.error(error);
      message.error("Oops... Something went wrong");
    }
    form.resetFields();
  };

  return (
    <Form
      form={form}
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
