import { useEffect, useState } from 'react'
import Pagination from './Pagination';
import PokemonList from './PokemonList';
const axios = require("axios")

function App() {
  const [pokemon, setPokemon] = useState(["haha","ahah"])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  
  let cancel;
  
  useEffect(()=>{
    axios.get(currentPageUrl, {
        cancelToken : new axios.CancelToken( c => cancel = c)
      }
      ).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setPokemon(
        res.data.results.map((p) => {
          console.log(p)
          return p.name;
        })
      );
    })

    return () => cancel()

  }, [currentPageUrl])
  
  const handleNextButton = () => {
    setCurrentPageUrl(nextPageUrl)
  }
  const handlePreviousButton = () => {
    setCurrentPageUrl(previousPageUrl)
  }
  

  if (loading===true) return "Loading..."
  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
        handleNextButton={nextPageUrl ? handleNextButton : null} 
        handlePreviousButton={previousPageUrl ? handlePreviousButton : null} 
      />
    </>
  );
}

export default App;

//   useEffect(() => {
//     setLoading(true)
//     const funct = async () => {
//       setLoading(false)
//       const res = await axios.get(currentPageUrl)
//       setPokemon(res.data.results.map(p=>p.name))
//       setNextPageUrl(res.data.next)
//       setPreviousPageUrl(res.data.previous)
//     }
//   },[currentPageUrl])

//   // if (!loading) return "Loading..."

//   return (
//     <>
//       <PokemonList pokemon={pokemon}/>
//       <Pagination nextPageUrl={nextPageUrl} previousPageUrl={previousPageUrl}/>
//     </>
//   );
// }

// export default App;
