import React from 'react';
import {connect} from "react-redux";

import './styles.css'

import Card from '../Card'

const _ = ({items}) =>
    items.map(({id, value}) => (
        <Card key={id} value={value} />
    ))

const mapStateToProps = (state) => ({
    items: state
})

export default connect(mapStateToProps)(_)