import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


import MainItems from './Main';
import './index.css';

const App=()=>{
    return(
        <Fragment>
            <MainItems/>
        </Fragment>
    )
}
ReactDOM.render(<App/>,document.querySelector("body"));