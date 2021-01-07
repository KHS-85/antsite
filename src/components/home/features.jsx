import React from 'react'
import { Row, Col, Card } from 'antd'

import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';

const { Meta } = Card;

// Array with content which is mapped out in cards further down //
const items = [
    { key: '1', title: 'Modern Design', image: image1 },
    { key: '2', title: 'Clean and Elegant', image: image2 },
    { key: '3', title: 'Great Support', image: image3 },
    { key: '4', title: 'Easy to customize', image: image4 },
    { key: '5', title: 'Unlimited Features', image: image5 },
    { key: '6', title: 'Advanced Options', image: image6 }
]

const features = () => {
    return (

        <div id="features" className="block featureBlock bgGray">

            <div className="container-fluid">

                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>

                </div>


                {/* Cards */}
                <Row gutter={[16, 16]}>

                    {items.map(item => {
                        return (
                            <Col sm={{span: 12}} md={{span: 8}} key={item.key}>
                                <Card
                                    hoverable
                                    cover={<img alt={item.title} src={item.image} />}>
                                    <Meta title={item.title} />
                                </Card>
                            </Col>
                        );
                    })}

                </Row>

            </div>

        </div>
    )
}

export default features
