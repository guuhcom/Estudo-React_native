import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';



export default (props) => {
    //console.warn(props.max,props.min);
    const randomNumber = ({min, max}) => Math.floor((Math.random() * (max - min)) + min);
    return(
        <Text style={Estilo.fontM}>Valor aleatorio: {randomNumber(props)}</Text>
    )
}