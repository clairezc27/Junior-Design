import React from 'react';
import Header from './common/header.js'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Review = () => {

  const date = useParams().date;
  const handle = useParams().handle;
  const tweets = useSelector(state => state.twitter.tweets);
  console.log("handle: " + handle);
  return (
    <>
    <Header />
    <h1 className="Home-header">Review Existing Search</h1>
    <div className="review">
      <p>Review completed on: {date}</p>
      <p>Twitter handle: {handle}</p>
      <p>Flagged posts: </p>
    </div>
    {tweets.map(item => (
      <>
      <p>{item.id}</p>
      <p>{item.tweet}</p>
      <TwitterTweetEmbed tweetId={""+item.id}/>
      <br />
      </>
    ))}
    <TwitterTweetEmbed tweetId={"1321256215494574085"}/>
    <br />
    </>
  );
};

export default Review;