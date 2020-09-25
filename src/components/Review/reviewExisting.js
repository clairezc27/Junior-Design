import React from 'react';
import Header from './../Common/header.js'

const ReviewExisting = () => {
    return (
        <>
        <Header />
        <h1 className="Home-header">Review Existing Search</h1>
        <div className="review">
            <p>Review completed on: </p>
            <p>Twitter handle: </p>
            <p>Flagged posts: </p>
        </div>
        </>
    );
};

export default ReviewExisting;