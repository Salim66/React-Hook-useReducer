import React, { useReducer } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const reducer = (state, action) => {
    return state = action.payload;
}

const Home = () => {

    const [kotha, dispathch] = useReducer(reducer, 'I love React Js');

  return (
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md={5}>
                <Card>
                    <Card.Body>
                        <input type="text" name="name" className='form-control' value={kotha} onChange={ (e) => dispathch({ type: '', payload: e.target.value }) } autoComplete="off" />
                        <hr />
                        <h3>{kotha}</h3>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
};

export default Home;