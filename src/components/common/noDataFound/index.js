import React from 'react';
import { Alert } from 'react-bootstrap';
    
const NoDataComponent = ({noDataFoundtext}) => {
        return (
            <>
            {!noDataFoundtext ? null : (
                <Alert variant="warning" className ="noGistsFound">
                {noDataFoundtext}
            </Alert>
            ) }
            </> 
        )
};

export default NoDataComponent;