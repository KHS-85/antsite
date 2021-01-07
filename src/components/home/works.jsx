import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Works = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="contentHolder">
                <Button onClick={showModal}> <i className="fas fa-play"></i> </Button>
                </div>

                <Modal title="Ant Design" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <iframe title="Ant Design" width="100%" height="350" src="https://www.youtube.com/embed/pTYFVQ7w550" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>

            </div>

        </div>
    )
}

export default Works
