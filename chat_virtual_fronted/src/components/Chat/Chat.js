import React, { useState } from 'react';
import { Input, Button, Row, Col, Avatar } from 'antd';
import './Chat.css';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') {
      return;
    }

    setMessages([
      ...messages,
      {
        text: inputText,
        isUser: true,
      },
    ]);

    setInputText('');
  };
  return (
    <>
      <div className="ChatEstructura">
        <div className="ChatEncabezado">
          <Row align="middle" gutter={5}>
            <Col>
              <Avatar
                size={35}
                icon={<UserOutlined style={{ color: 'white' }} />}
                style={{ backgroundColor: 'grey' }}
              />
            </Col>
            <Col>
              <p style={{ color: 'white' }}>Agente Virtual</p>
            </Col>
          </Row>
        </div>
        <div className="ChatContenido">
          <div className="ChatMensajesWrapper">
            <AnimatePresence>
              <div className="ChatMensajes">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`Chat-bubble-container ${
                      message.isUser ? 'user' : 'other'
                    }`}
                  >
                    <div className="Chat-bubble">
                      <p>{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
          <div className="ChatFooter">
            <Row align="middle" gutter={15}>
              <Col span={20}>
                <Input
                  className="ChatFooterInput"
                  placeholder="Mensaje"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </Col>
              <Col span={4}>
                <Button className="ChatFooterBoton" onClick={handleSend}>
                  <SendOutlined style={{ fontSize: '1rem' }} />
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
