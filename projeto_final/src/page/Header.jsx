import './Header.css'
import { Heading } from '@chakra-ui/react'


const Header = () => {
    return (
        <div> 
           <div className='cabecalho'> 
                <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' height={100}></img>
           </div> 
           
        </div>
    );
}

export default Header;