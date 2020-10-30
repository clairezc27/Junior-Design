import React from 'react';
import { Nav } from 'react-bootstrap';
import Header from './common/header.js';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { searchTweets } from "./../features/twitter";
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import FormControl from 'react-bootstrap/FormControl';

const NewSearch = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(searchTweets("bongo3312", "cheese,grater,mouse", "brett@email.com"))
    }
    
    return (
        /*
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
                        <Form.Group controlId="input-handles"
                            rules={[
                            {
                                required: true,
                                message: 'Please input the Twitter handle.',
                            },
                            ]}>
                                <Form.Label>Please enter the Twitter handle corresponding to the Twitter account you wish 
                                    our application to perform a search on.
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
                        of developers created to find any potential inappropriate language. If you think there are 
                        words that we may not have covered in our list and you would like these words to be 
                        queried for, please enter them below. Leave blank if you do not wish to add any more parameters.</p>
                        <Form.Group controlId="additional-search-params-text">
                            <FormControl as="textarea" placeholder="Enter words, separated by commas, you wish to additionally query for." />   
                        </Form.Group>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                        <h3>Review Search Details</h3>
                        <h5>Almost Done! Before submitting, please review the information below. If all is 
                        correct, complete your order by clicking "Submit."</h5>
                        <p>Twitter handle: @</p>
                        <p>Additional Search Parameters: </p>
                        <Button type="primary" className="submit-form" htmlType="submit" onClick={onFinish}>Submit</Button>
                    </Tab.Pane>
                </Tab.Content>
            </Form>
        </Tab.Container>
        </>
        */
       <Button type="primary" className="submit-form" htmlType="submit" onClick={onFinish}>Submit</Button>
    );
};

export default NewSearch;