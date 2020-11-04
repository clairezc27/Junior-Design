import React from 'react';
import Header from './common/header.js'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Review = () => {

  const batchId = useParams().batchId;
  const tweets = useSelector(state => state.twitter.tweets);

  return (
    <>
    <Header />
    <h1 className="Home-header">Review Existing Search</h1>
    <div className="review">
      <p>Review completed on: </p>
      <p>Twitter handle: </p>
      <p>Flagged posts: </p>
    </div>
    {tweets.map(item => (
      <>
      <p>{item.id}</p>
      <p>{item.tweet}</p>
      <br />
      </>
    ))}
    </>
  );
};

export default Review;