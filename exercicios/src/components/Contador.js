import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

import Estilo from './estilo';

export default (props) => {

    let numero = props.inicial;
    const inc = () => numero++;
    const dec = () => numero--;

    return (
        <>
            <Text style = {Estilo.fontG}>{numero}</Text>
            <View style = {style.conteiner}>
                <Button style={style.buttonStart} title = '+' onPress = {inc} />
                <Button style={style.button} title = '-' onPress = {dec} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    conteiner:{
        flexDirection: "row",
        flexWrap: "wrap",
    }
});