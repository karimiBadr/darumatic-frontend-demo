import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from "../actions/actions";
import { useHistory } from "react-router-dom";

const Spinner = () => {
    return <div>Loading ...</div>
}

const HomePage = ({isLoading, dispatch,data }) => {
    let history = useHistory();

    useEffect(() => {
        if(data !== undefined && data !== null){
            history.push("/details");
        }
    }, [data])

    const _onLoadData = () => {
        dispatch(fetchData('/api/data'))
    }

    return (
        <div>
            <button onClick={_onLoadData}>Load data</button>
            <div className='container'>
                {isLoading ? <Spinner/> : <div/>}
            </div>
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

export default connect(mapStateToProps)(HomePage);
