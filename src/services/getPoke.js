
const getPoke=(name)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
    return fetch(url).then(response=>response.json())
}

export default getPoke;




/*
Para trabajar con axios:

se instala axios
se importa 

import axios from 'axios'

const getPoke=(name)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
    const promise=axios(url)
    return promise;
}

*/
