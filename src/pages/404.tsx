import { Link } from "react-router-dom";
import PingumImage from "../assets/images/pinguim-dos-consertos.png";

function NotFoundPage(props:any) {
    return(
        <div className="App">
            <h1>Oops, não consegui encontrar nada...</h1>
            <Link to="/">Voltar em segurança.</Link>
            <img src={PingumImage}></img>
        </div>
    )
}

export default NotFoundPage;