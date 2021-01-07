import React from 'react'
import { Row, Col, Card } from 'antd'

const { Meta } = Card;

// Array with content which is mapped out in cards further down //
const items = [
    { key: '1', title: 'Modern Design', image: 'Image1.jpg' },
    { key: '2', title: 'Clean and Elegant', image: 'Image2.jpg' },
    { key: '3', title: 'Great Support', image: 'Image3.jpg' },
    { key: '4', title: 'Easy to customize', image: 'Image4.jpg' },
    { key: '5', title: 'Unlimited Features', image: 'Image5.jpg' },
    { key: '6', title: 'Advanced Options', image: 'Image6.jpg' }
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
