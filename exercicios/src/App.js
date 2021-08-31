import React from 'react';
import { Text,View, StyleSheet } from 'react-native';


import Contador from './components/Contador';
import Estilo from './components/estilo';
//import Botao from './components/Botao';
//import Titulo from './components/Titulo';
//import NumRandon from './components/NumRandon';
//import MinMax from './components/MinMax'
//import CompPadrao, {Comp1,Comp2 } from './components/Multi'
//import Primerio from './components/Primeiro';

export default function (){
    return (
        <View style ={style.Container}>
            <Text style={Estilo.fontP}>Concator:</Text>
            <Contador inicial = {20}/>
            {/*
            <Titulo titulo = 'Cadastro Produto' segundario = 'Tela de cadastro de produto' />
            <Botao />
            <NumRandon max = {50} min = {1} />
            <MinMax min ={3} max={30}/>
            <CompPadrao />
            <Comp1 />
            <Comp2 />
            <Primerio/>*/}
        </View>
    )   
};

const style = StyleSheet.create({
    Container: {
        //backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
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

