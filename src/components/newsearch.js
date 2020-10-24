import React from 'react';
import { Nav } from 'react-bootstrap';
import Header from './common/header.js'

const NewSearch = () => {
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
            <Form>
                <Tab.Content>
                    <Tab.Pane eventKey="1">
                        {/* TODO: Add support for user input of more than one twitter account.
                        Option 1: Have user input a number and then generate that inputted amount of FormControls one below the other.
                        Option 2: Have a textarea in which user inputs twitter handles separated by commas
                        Option 3: Have a maximum number of pregenerated FormControls for user to fill in and leave blank as fit*/}
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
                        of developers created to find any potential inappropriate language. This list 
                        consists of over 1,000 terms that violate Twitter’s Guidelines. Some of the 
                        topics we query for include, but are not limited to, foul language, hate speech 
                        and ideology, inciting violence, harassment, extremism, terrorism, and self-harm.</p>
                        <p>If you think there are words that we may not have covered in our list and 
                        would like these words to be included in the search parameters, please enter them 
                        below. Our application will use our list and any words you come up with when 
                        performing your search. If left blank, our application will search and flag tweets 
                        against our existing list.</p>
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
                        <Button type="primary" className="submit-form" htmlType="submit">Submit</Button>
                    </Tab.Pane>
                </Tab.Content>
            </Form>
        </Tab.Container>
        </>
    );
};

export default NewSearch;