import React from 'react';
import { Card, Badge, Image, Row, Col } from 'react-bootstrap';
import './card.css';
/**
 * 
 *  @param {string} id - id of the gists 
 *  @param {string} description - description of the gists 
 *  @param {string} owner - owner of the gists 
 *  @param {string} files - files list within that gists 
 *  @param {string} forkData - forked Users array
 * @returns 
 */


const CardComponent = ({id, description, owner, files,forkData, key}) => {
    return  (
        <Card className ="gistCard" key={id} >
        <Card.Body>
            <Card.Title>Description: {description}</Card.Title>
            <Card.Text>Owner: {owner.login}</Card.Text>
            <Card.Text>File Types: </Card.Text>
            <Card.Text>
                {files && Object.keys(files).map(file => (
                    Object.keys(files[file]).map(fileContent => {
                        if (fileContent === 'type') {
                            return (
                                <Badge className ="gistsBadge" variant="primary" key={files[file]['filename']}>
                                    {files[file][fileContent]}
                                </Badge>
                            );
                        }
                    })
                ))
                }
            </Card.Text>
            <Row className ="forkedUsersRow">
                {forkData && <Col xs ={12}>Forked Users:</Col>}
                {forkData && forkData.slice(0, 3).map(element => (
                    <Col xs={3} key={element.owner.avatar_url}>
                        <Image className ="avatar" src={element.owner.avatar_url} roundedCircle />
                    </Col>
                ))
                }
            </Row>
        </Card.Body>
    </Card>
    )
};

export default CardComponent;