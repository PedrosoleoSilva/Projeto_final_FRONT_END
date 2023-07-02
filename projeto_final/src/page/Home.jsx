import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
    const navigateToCreate = () =>{
        navigate(-1)
    }
    return (
        <div className="">
            <h3>Home</h3>
            <button onClick={navigateToCreate}>Ir Tela de Inicio</button>
        </div>
    );
}

export default Home;