import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGists } from '../../redux/actions/index';

const Home = (props) => {

    console.log("receiving props", props);
    /*    useEffect(() => {
       props.fetchGists();
    },[]) */

    const handleKeyDownEvent = (e) => {
        if (e.key === 'Enter') {
            props.fetchGists({ userName: e.target.value });
        }
    };

    return (
        <>
            <div>Home Page</div>
            <Container>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Search gists" onKeyDown = {handleKeyDownEvent}/></Col>
                </Row>
                <Row>
                    {props.gists && props.gists.map(val => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{val.description}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Link href="#">Fork Url</Card.Link>
                            </Card.Body>
                        </Card>
                    ))}

                </Row>
            </Container>

        </>
    );
};

const mapStateToProps = state => {
    return {
        gists: state.fetchGists.data
    };
};

//const mapDispatchToProps = { fetchData: docsFetchData }

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchGists
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
