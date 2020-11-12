import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Header from './common/header.js';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { searchTweets } from "./../features/twitter";
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Allow user to place a new search request for inputted handle and any additional search parameters */
const NewSearch = () => {
  const dispatch = useDispatch();
  const currUser = useSelector(state => state.auth.currUser);
  const history = useHistory();
  const [handle, setHandle] = useState();
  const [words, setWords] = useState();


  const onFinish = () => {
    dispatch(searchTweets(handle, words, currUser));
    history.push('/dashboard');
  }

  const handleFinish = (event) => {
    setHandle(event.target.value);
  }

  const wordsFinish = (event) => {
    setWords(event.target.value)
  }
      
  return (
    <>
    <Header />
    <h1 className="Home-header">New Search</h1>
    <Tab.Container defaultActiveKey="1">
      <Nav justify variant="tabs" defaultActiveKey="1">
        <Nav.Item>
          <Nav.Link eventKey="1">Step 1: Twitter Handle</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="2">Step 2: Search Parameters</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="3">Step 3: Review and Submit</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form className="tab">
        <Tab.Content>
          <Tab.Pane eventKey="1">
            <Form.Group controlId="input-handles" name="handle" onChange={handleFinish}
              rules={[
              {
                required: true,
                message: 'Please input the Twitter handle.',
              },
              ]}>
                <Form.Label>Please enter the Twitter handle of the Twitter account you wish 
                  to perform a search on.
                </Form.Label> 
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Twitter Handle"
                  aria-label="Twitter Handle"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>
          </Tab.Pane>

          <Tab.Pane eventKey="2">
            <p>Our application will search your tweets against a comprehensive list our team 
            of developers created to find any potential inappropriate language. If you would like to add your own words
            to be queried for, please enter them below. Leave blank if you do not wish to add any more parameters.</p>
            <Form.Group controlId="additional-search-params-text" name="words" onChange={wordsFinish}>
              <FormControl as="textarea" placeholder="Enter words, separated by commas, you wish to additionally query for." />   
            </Form.Group>
          </Tab.Pane>

          <Tab.Pane eventKey="3">
            <h3>Review Search Details</h3>
            <h5>Almost Done! Before submitting, please review the information below. If all is 
            correct, complete your order by clicking "Submit."</h5>
            <p>Twitter handle: @{handle}</p>
            <p>Additional Search Parameters: {words}</p>
            <Button type="primary" className="submit-form" htmlType="submit" onClick={onFinish}>Submit</Button>
          </Tab.Pane>
        </Tab.Content>
      </Form>
    </Tab.Container>
    </>
   
  );
};

export default NewSearch;