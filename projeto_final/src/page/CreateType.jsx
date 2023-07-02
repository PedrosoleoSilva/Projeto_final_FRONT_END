import { useCallback, useEffect, useState } from 'react';
import './CreateType.css'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const CreateType = () => {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

   const navigateToHome = () =>{
        navigate('/home')
   }
    
  const fetchUserData = useCallback(async() => {  

    try {
        setLoading(true)
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=21')
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
            <div className='formato'>
                 
                {pokeData.map(pokemon => (
                    <Card>
                       

                        <div className='card'>
                             <h4>POKÉMON: {pokemon.name}</h4>
                             <h5>URL: {pokemon.url}</h5>
                             <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokemon.url.split('/') [6]+'.png'}/>
                        </div>
                        
                    </Card>
                   
                ))}                
            </div>
            
        )
    }
    return (
        <div>
            <button onClick={navigateToHome}>Ir para Tela Home</button>
               <div className='container'>
            {renderUserData()}
        </div>
        </div>
     
      
    );
}

export default CreateType;