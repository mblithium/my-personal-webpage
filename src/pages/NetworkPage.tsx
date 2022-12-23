
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breacrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import MainArticle from '../components/MainArticle/MainArticle';

function Network() {
    let { id } = useParams();
    return (
        <div className="App">
            <Main>
                <Header />
                <Breadcrumb path={["Home", "Network"]}></Breadcrumb>
                <MainArticle>
                   <h1>Network</h1>
                   <p>Não há nada aqui, mas será um lugar para compartilhar networking de pessoas, canais, etc.</p>
                </MainArticle>
           </Main>
           <Footer></Footer>
        </div>
    )
}

export default Network;