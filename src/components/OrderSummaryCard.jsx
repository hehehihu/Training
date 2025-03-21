import React from 'react';
import { Card, Row, Col, Button, Divider } from 'antd';
import './OrderSummaryCard.scss';

import musicIcon from '../images/icon-music.svg'; 
import heroIllustration from '../images/illustration-hero.svg'; 

const OrderSummaryCard = () => {
  return (
    <Row justify="center" gutter={[16, 16]} className="order-summary-container">
      <Col xs={24} sm={18} md={12} lg={8} xl={6}>
        <Card
          bordered={false}
          className="order-summary-card"
        >
          <div className="order-summary-header">
            <img src={heroIllustration} alt="Hero Illustration" className="order-summary-illustration" />
          </div>

          <div className="order-summary-body">
            <h2>Order Summary</h2>
            <p className="order-summary-description">
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>

            <div className="order-summary-details">
              <div className="order-item">
                <img src={musicIcon} alt="Music Icon" className="music-icon" />
                <span className="item-name">Annual Plan</span>
                <span className="item-price">$59.99/year</span>
              </div>
              <Button className="change-plan-btn" type="link">
                Change
              </Button>
            </div>

            <Divider />

            <div className="order-summary-buttons">
              <Button type="primary" block className="proceed-btn">
                Proceed to Payment
              </Button>
              <Button type="default" block className="cancel-btn">
                Cancel Order
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default OrderSummaryCard;