import { useCallback, useEffect, useState } from 'react';
import './CreateType.css'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const CreateType = () => {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(false)

 

  const fetchUserData = useCallback(async() => {
    try {
        setLoading(true)
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        setPokeData(response.data.results)  //dentro da variavel response eu jogo caminho data do array e depois acesso array de results
    } catch (error) {
        console.error(error)
    } finally {
        setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
    }, [])
  
    const renderUserData = () => {
        if(loading || !pokeData.length) {
            return(
                <h3>Carregando!</h3>
            )
        } 
        return (
            <div>
                 <th>LISTAGEM POKÉMON:</th>
                {pokeData.map(pokemon => (
                    <Card>
                        <div className='card'>
                             <h4>POKÉMON: {pokemon.name}</h4>
                             <h5>URL: {pokemon.url}</h5>
                        </div>
                    </Card>
                   
                ))}
                    
                    <img className='pikachu' src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'></img>
                
            </div>
            
        )
    }
    return (
        <div className='container'>
            {renderUserData()}
        </div>
    );
}

export default CreateType;