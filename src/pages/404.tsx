import { Link } from "react-router-dom";
import PingumImage from "/images/pinguim-dos-consertos.png";

function NotFoundPage(props:any) {
    return(
        <div className="App">
            <div className="imagecenter">
                <h1>Oops, não consegui encontrar nada...</h1>
                <img src={PingumImage}></img>
                <Link to="/">Voltar em segurança.</Link>
            </div>
        </div>
    )
}

export default NotFoundPage;