import React, { useReducer } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { initialMessage, messageReducer } from '../reducers/messageReducer';


const Home = () => {

    const [messageState, dispatch] = useReducer(messageReducer, initialMessage);

  return (
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md={5}>
                <Card>
                    <Card.Body>
                        <input type="text" name="name" className='form-control'   autoComplete="off" placeholder='Name' value={messageState.name} onChange={ e => dispatch({ payload: { ...messageState, name: e.target.value } }) } />
                        <br />
                        <input type="text" name="age" className='form-control'   autoComplete="off" placeholder='Age' value={messageState.age} onChange={ e => dispatch({ payload: { ...messageState, age: e.target.value } }) } />
                        <br />
                        <input type="text" name="skill" className='form-control'   autoComplete="off" placeholder='Skill' value={messageState.skill} onChange={ e => dispatch({ payload: { ...messageState, skill: e.target.value } }) } />
                        <br />
                        <hr />
                        <p>Name: {messageState.name}</p>
                        <p>Age: {messageState.age}</p>
                        <p>Skill: {messageState.skill}</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
};

export default Home;