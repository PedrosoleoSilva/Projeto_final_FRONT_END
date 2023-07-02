import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Home.css'
import axios from "axios";
import { Button,Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

const Home = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const onChangeTitle = (event) =>{
        const inputValue = event.target.value
        setTitle(inputValue)
    }
    const onChangeBody = (event) =>{
        const inputValue = event.target.value
        setBody(inputValue)
    }
    const handleSubmit = async() =>{
        
    }

    const navigateToCreate = () =>{
        navigate(-1)
    }

    return (
        <div className="containeer">
       
            <Container centerContent>
            <Input placeholder='Título' onChange={onChangeTitle} value={title}/>
            <Textarea placeholder='Body' onChange={onChangeBody} value={body}></Textarea>
            <Button onClick={handleSubmit}>Cadastrar POST</Button>

            </Container>
            <div>
                <button onClick={navigateToCreate}>Ir Tela de Inicio</button>
            </div>
            
        </div>
    );
}

export default Home;