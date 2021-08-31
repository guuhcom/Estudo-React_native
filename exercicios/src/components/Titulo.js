import React from 'react';
import { Text } from 'react-native';

import Estillo from './estilo';

export default (props) => {
    return(
        <React.Fragment>
            <Text style={Estillo.fontG}>{props.titulo}</Text>
            <Text>{props.segundario}</Text>
        </React.Fragment>
    )
}