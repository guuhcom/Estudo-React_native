import React from 'react';
import { View, StyleSheet } from 'react-native';


import CompPadrao, {Comp1,Comp2 } from './components/Multi'
import Primerio from './components/Primeiro';

export default function (){
    return (
        <View style ={style.Container}>
            <CompPadrao />
            <Comp1 />
            <Comp2 />
            <Primerio/>
        </View>
    )   
};

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



/* // Função Explícita 
function App(){  
    return  <Text>Tatu</Text>
}

export default Apps
*/

/* //Função anonima - function expretion
const App = function (){
    return <Text></Text>
}

export default App;*/

/*
export default function (){
    return  <Text>Tatu</Text>
}
*/

/*// usando uma arowfunction
export default () => {
    return <Text>Tatu</Text>
}*/

