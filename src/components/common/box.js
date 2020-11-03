import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBatches } from './../../features/twitter';

const Box = () => {

  const dispatch = useDispatch();
  const currUser = useSelector(state => state.auth.currUser);

  useEffect(() => {
    dispatch(fetchBatches(currUser))
  }, []);

  const batches = useSelector(state => state.twitter.batches);

  return (
    <>
    {batches.map(item => (
      <Row>
        <Col span={8}>
          <div className="box">
            {item.date}
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