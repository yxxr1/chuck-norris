import React from 'react';
import {connect} from "react-redux";

import './styles.css'

import {fetchItemRequest} from "../../store/actions";


const _ = ({dispatch}) => {
    const onClick = () => {
        dispatch(fetchItemRequest())
    }

    return (
        <button className={"addButton"} onClick={onClick}>
            MORE!!1
        </button>
    )
}

export default connect(null)(_)