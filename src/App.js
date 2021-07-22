import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from "./actions/actions";

const Spinner = () => {
    return <div>Loading ...</div>
}

const App = ({isLoading, dispatch,data }) => {

    useEffect(() => {
        console.log("data")
        console.log(data)
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

export default connect(mapStateToProps)(App);
