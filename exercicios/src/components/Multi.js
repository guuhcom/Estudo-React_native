import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';


export default function Comp(){
    return <Text style = {Estilo.fontM}>Comp #Oficial</Text>
}

export function Comp1(){
    return <Text style={Estilo.fontP}>Comp #1</Text>
}

export function Comp2(){
    return <Text>Comp #2</Text>
}


