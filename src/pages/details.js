import React from 'react';
import {connect} from 'react-redux';

const DetailsPage = ({data }) => {

    return (
        <div>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.myReducer.isLoading,
    data: state.myReducer.data,
})

export default connect(mapStateToProps)(DetailsPage);
