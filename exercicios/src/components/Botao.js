import React from 'react';
import { Button } from 'react-native';

export default (props) => {

    function execultar() {
        console.warn('Exec!!');
    }

    return(
        <Button
            title = 'Executar'
            onPress = {execultar}
        />
    )
}