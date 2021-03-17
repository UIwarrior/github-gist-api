import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGists } from '../../redux/actions';
import './home.css';
import CardComponent from '../../components/common/card/card';
import NoDataComponent from '../../components/common/noDataFound';

const Home = ({ fetchGists, gists }) => {
    console.log("props changed", gists);

    const [listofGists, setListOfGists] = useState([]);
    const [searchParam, setSearchParam] = useState(null);
    const [noDataFound, setNoDataFound] = useState(null);
    const [isLoading, setLoading] = useState(false);

    /**
     * This method is attached as event handler and gets called on change of search input keydown event
     * @param {*} e 
     */

    const handleKeyDownEvent = (e) => {
        if (e.key === 'Enter') {
            if(e.target.value == null || e.target.value === ''){
                alert("please enter a search term")
            }
            else{
                setSearchParam(e.target.value);
                setLoading(true);
                fetchGists({ userName: e.target.value });
            }
            
        }
    
    };

    useEffect(() => {
        console.log("useeffect ran");
        if((!gists.listOfGists.data.length && searchParam) || (Object.keys(gists.listOfGists.error)).length){ 
            setNoDataFound("Some error happened or No Gists Found for this user")
        }
        else{
            setNoDataFound(null);
        }
        setListOfGists(gists.listOfGists.data);
        setLoading(false);
        setSearchParam("");
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
                    ))
                    }
                    {<NoDataComponent noDataFoundtext ={noDataFound}/>}

                </Row>
            </Container>

        </>
    );
};

Home.propTypes = {
    fetchGists: PropTypes.func,
    data: PropTypes.array,
    error: PropTypes.object
};

const mapStateToProps = state => {
    return {
        gists: state.gists,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchGists
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
