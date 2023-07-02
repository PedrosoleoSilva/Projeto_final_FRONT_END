import { useCallback, useEffect, useState } from 'react';
import './CreateType.css'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const CreateType = () => {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
 
  const [itemsPage] = useState(10)
    const navigate = useNavigate()


   const navigateToHome = () =>{
        navigate('/home')
   }
    
   const fetchUserData = useCallback(async() => {    
    try {
      setLoading(true);
      const offset = (currentPage - 1) * itemsPerPage; // Calculate the offset based on the current page
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
      setPokeData(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchUserData()
    }, [fetchUserData, currentPage])
  
    const renderUserData = () => {
        if (loading || !pokeData.length) {
          return <h3>Carregando!</h3>;
        } 
         const totalPages = Math.ceil(pokeData.length / itemsPerPage);
         const handlePageChange = (page) => {
          setCurrentPage(page);
        };
         return (
          <div className='formato'>
            {pokeData.map((pokemon, index) => (
              <Card key={index}>
                <div className='card'>
                  <h4>POKÉMON: {pokemon.name}</h4>
                  <h5>URL: {pokemon.url}</h5>
		    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokemon.url.split('/') [6]+'.png'}/>
                </div>
              </Card>
            ))}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        );
      };
    const renderPaginationButtons = () =>{
        const pageNumbers = Math.ceil(pokeData.length/ itemsPage)
        if(pageNumbers >1){
            const buttons = []
            for(let i =1; i<=pageNumbers; i++){
                buttons.push(
                    <button
                        key= {i}
                        onClick={()=>setCurrentPage(i)}
                                className={currentPage ===i ? 'active' : ""}> {i}
                    </button>
                )
            }
            return buttons
        }
        return null
    }
    return (
        <div>
            <div className='cabecalho'> 
                <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' height={100}></img>
           </div> 
            <button onClick={navigateToHome}>Ir para Tela Home</button>
               <div className='container'>
            {renderUserData()}
        </div>
        </div>
     
      
    );
}

export default CreateType;