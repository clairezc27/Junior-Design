import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBatches } from './../../features/twitter';

const Box = (props) => {

  const dispatch = useDispatch();
  const currUser = useSelector(state => state.auth.currUser);

  useEffect(() => {
    dispatch(fetchBatches(currUser))
  }, []);

  const batches = useSelector(state => state.twitter.batches);

  return (
    <>
    <Row>
      <Col span={8}>
        <div className="box">
          {props.txt}
        </div>
      </Col>
      <Col span={8}>
        <div className="box">
          {props.txt}
        </div>
      </Col>
      <Col span={8}>
        <div className="box">
          {props.txt}
        </div>
      </Col>
    </Row>
    </>
  );
};

export default Box;