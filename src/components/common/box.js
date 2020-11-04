import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBatches, fetchTweets } from './../../features/twitter';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Box = () => {

  const dispatch = useDispatch();
  const currUser = useSelector(state => state.auth.currUser);

  useEffect(() => {
    dispatch(fetchBatches(currUser))
  }, []);

  const batches = useSelector(state => state.twitter.batches);
  const history = useHistory();

  const review = (date, handle, id) => {
    var result = date.replaceAll("/", "-")
    history.push(`review/${handle}/${result}`);
  }

  return (
    <>
    {batches.map(item => (
      <Row>
        <Col span={8}>
          <div className="box">
            <Button variant="link" className="batch-btn" onClick={(() => {review(item.date, item.handle, item.id)})}>
              {item.date}
            </Button>
          </div>
        </Col>
        <Col span={8}>
          <div className="box">
            {item.handle}
          </div>
        </Col>
        <Col span={8}>
          <div className="box">
            {item.size}
          </div>
        </Col>
      </Row>
    ))}
    </>
  );
};

export default Box;