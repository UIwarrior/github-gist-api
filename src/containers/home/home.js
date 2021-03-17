import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Badge, Image, Spinner, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGists } from '../../redux/actions';
import './home.css';
import CardComponent from '../../components/common/card';

const Home = ({ fetchGists, gists }) => {

    const [listofGists, setListOfGists] = useState([]);
    const [searchParam, setSearchParam] = useState(null);
    const [isLoading, setLoading] = useState(false);

    /**
     * This method is attached as event handler and gets called on change of search input keydown event
     * @param {*} e 
     */

    const handleKeyDownEvent = (e) => {
        if (e.key === 'Enter') {
            setSearchParam(e.target.value);
            setLoading(true);
            fetchGists({ userName: e.target.value });
        }
    };

    useEffect(() => {
        setListOfGists(gists);
        setLoading(false);
    }, [gists]);

    return (
        <>
            <Container>
                <Row className ="searchRow">
                    <Col>
                        <Form.Control type="text" placeholder="Search Github Gists by username" onKeyDown = {handleKeyDownEvent}/>
                    </Col>
                </Row>
                <Row className ="gistsRow" >
                    {isLoading && <Spinner animation="border" role="status" style={{ margin: 'auto' }}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    }
                    {listofGists && listofGists.map(({id, description, files, owner, forkData}) => (
                        <CardComponent id = {id} description ={description} owner ={owner} files ={files} forkData = {forkData} />
                    ))}
                    {
                        !listofGists.length && searchParam  && (
                            <Alert variant="warning" className ="noGistsFound">
                                No Gists Found
                            </Alert>
                        )
                    }

                </Row>
            </Container>

        </>
    );
};

Home.propTypes = {
    fetchGists: PropTypes.func,
    gists: PropTypes.array
};

const mapStateToProps = state => {
    return {
        gists: state.listOfGists.gists
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchGists
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
