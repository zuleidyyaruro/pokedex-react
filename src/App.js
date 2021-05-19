import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";
import SearchPoke from "./components/SearchPoke";
import getPoke from "./services/getPoke";
import getType from "./services/getType";

function App() {

  const [dataPoke, setDataPoke] = useState({});
  const [dataType, setDataType] = useState({});
  const [queryPoke, setQueryPoke] = useState("");
  const [queryType, setQueryType] = useState("");
  const [isSearchPoke, setIsSearchPoke] = useState(true);


  useEffect(() => {
    getPoke(queryPoke).then(data => setDataPoke(data))
  }, [queryPoke]);

  useEffect(() => {
    getType(queryType).then(data => setDataType(data.pokemon));
  }, [queryType]);


  return (
    <div className="App">
      <h1>Poke Api</h1>
      <hr />
      <SearchPoke setQueryPoke={setQueryPoke} setQueryType={setQueryType} setIsSearchPoke={setIsSearchPoke} />

      {
        isSearchPoke ?

          (
            dataPoke.sprites && dataPoke.types ?
              <Pokemon
                name={dataPoke.name}
                type={dataPoke.types[0].type.name}
                url={dataPoke.sprites.front_default}
                isSearchPoke={isSearchPoke}
              /> : null
          )
          :
          (
            dataType ?

            dataType.map((element)=>{
              return <Pokemon
                name={element.pokemon.name}
                key={element.pokemon.name}
                url={element.url}
                isSearchPoke={isSearchPoke}
              />
            })
              :
              null
          )
      }

    </div>
  );
}

export default App;
