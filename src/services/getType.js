const getType=(type)=>{
    const url=`https://pokeapi.co/api/v2/type/${type}`;
    return fetch(url).then(response => response.json())
}

export default getType;