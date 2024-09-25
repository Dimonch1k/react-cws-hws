import { UserOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";

const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        onClick={showModal}
        icon={<UserOutlined />}
      />
      <Modal
        title="Authentication"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default Auth;
