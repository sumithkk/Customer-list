import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const CustomerDetails = (props) => {
    console.log(props);
    return (
        <div style={{
            padding: "15px",
            color: "#4a4a4a"
        }}>
            {props.customerDetail && (
                <React.Fragment>
                    {props.customerDetail.address1 !== '' && (
                        <div className="address">
                            <strong>Home Address</strong>
                            <p>{props.customerDetail.address1}</p>
                        </div>
                    )}
                    {props.customerDetail.address2 !== '' && (
                        <div className="address">
                            <strong>Office Address</strong>
                            <p>{props.customerDetail.address2}</p>
                        </div>
                    )}
                    {props.customerDetail.address3 !== '' && (
                        <div className="address">
                            <strong>Other Address</strong>
                            <p>{props.customerDetail.address3}</p>
                        </div>
                    )}

                </React.Fragment>
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        customerDetail: state.customerDetail
    };
}

export default connect(mapStateToProps)(CustomerDetails);