import React from 'react';
import { Row, Col, Divider } from 'antd';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './common/header.js'
import 'antd/dist/antd.css';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Row style={{marginTop: "50px"}}>
        <Col style={{textAlign: "left"}} flex={3}>
          <div className="home-txt">
          <br />
          <h3>About</h3>
          <p>As the world becomes increasingly influenced by the information posted on social media platforms, the impact of each and every user’s post increases as well. While social media platforms allow users to spread positive and accurate information, there unfortunately exists inappropriate, inaccurate, and hateful information. Because of this, social media platforms have created algorithms to flag posts that have obviously inappropriate language. But, this is where the social media platforms fail to fix the whole problem.</p>
          <br />
          <p>The Social Media Mistake Flagger is created to fill in where the social media platforms fail. It aims to flag all potentially inappropriate and hateful language beyond the normal social media platform flagger. This includes searching for unbiased hateful and inappropriate language revolving around gender, race, and hate speech.</p>
          <br />
          <p>Our goal, as members of Generation Z, is to create and promote a safe space for everyone on social media platforms starting with Twitter - especially since more people are growing up with social media. Whether you have a big job interview coming up, you recently came into fame, you are looking to help a friend or client, or you are just trying to be an upstanding citizen, the Social Media Mistake Flagger can help.</p>
          <br />
          <h3>How it Works</h3>
          <p>To receive a report of what tweets are flagged from our undisputed list of potentially inappropriate words from your Twitter account, create an account and set up a new search by inputting your Twitter handle and any additional words you would like our product to search for. From there, we will use our hand-crafted list and any additional words you provided to return a comprehensive list of tweets that we suggest you delete from your account to make sure your Twitter account is promoting a safe space as well. Yes, it’s that easy, and it’s completely free.</p>
          </div>
          </Col>
        <Col style={{ height: "80vh" }}>
          <Divider type="vertical" style={{height: "100%"}}/>
        </Col>
        <Col style={{paddingTop: "30px"}} flex={2}>
          <Link to="/signup">
            <Button type="primary" style={{ marginBottom: "20px" }}>Sign Up</Button>
          </Link>
          <br />
          <Link to="/login">
            <Button type="primary" style={{ marginTop: "20px" }}>Login</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;