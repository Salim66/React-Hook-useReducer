import React, { useReducer } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { initialMessage, messageReducer } from '../reducers/messageReducer';


const Home = () => {

    const [messageState, dispatch] = useReducer(messageReducer, initialMessage);

  return (
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md={5}>
                <Card>
                    <Card.Body>
                        { messageState.error && <Alert variant='danger'>Tmi amar error...</Alert>}
                        <input type="text" name="name" className='form-control'   autoComplete="off" placeholder='Name' value={messageState.name} onChange={ e => dispatch({ type: 'DEVS_DATA_LOAD', payload: { name: e.target.value } }) } />
                        <br />
                        <input type="text" name="age" className='form-control'   autoComplete="off" placeholder='Age' value={messageState.age} onChange={ e => dispatch({ type: 'DEVS_DATA_LOAD', payload: { age: e.target.value } }) } />
                        <br />
                        <input type="text" name="skill" className='form-control'   autoComplete="off" placeholder='Skill' value={messageState.skill} onChange={ e => dispatch({ type: 'DEVS_DATA_LOAD', payload: { skill: e.target.value } }) } />
                        <br />
                        <select name="" id="" className='form-control' onChange={ e => dispatch({ type: 'ERROR_LOAD', payload: { error: e.target.value } }) }>
                            <option value="Start">Start</option>
                            <option selected value="Off">Off</option>
                        </select>
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