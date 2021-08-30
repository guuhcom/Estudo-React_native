import React from 'react';
import { View } from 'react-native';


import CompPadrao, {Comp1,Comp2 } from './components/Multi'
import Primerio from './components/Primeiro';

export default function (){
    return (
        <View>
            <CompPadrao />
            <Comp1 />
            <Comp2 />
            <Primerio/>
        </View>
    )   
};

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

