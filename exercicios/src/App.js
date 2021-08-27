import React from 'react';
import { Text } from 'react-native';
import { retrieveSourceMap } from 'source-map-support';

/* // Função Explícita 
function App(){  
    return  <Text>Tatu</Text>
}

export default App
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

export default () => <Text>Tatu</Text>