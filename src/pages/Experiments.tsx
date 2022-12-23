
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breacrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import MainArticle from '../components/MainArticle/MainArticle';

function Experiments() {
    let { id } = useParams();
    return (
        <div className="App">
            <Main>
                <Header />
                <Breadcrumb path={["Home", "Experiments"]}></Breadcrumb>
                <MainArticle>
                   <h1>Experiments</h1>
                   <p>Olá, aqui irei organizar alguns experimentos que fiz em algum momento aleatório para fácil acesso futuramente.</p>
                </MainArticle>
           </Main>
           <Footer></Footer>
        </div>
    )
}

export default Experiments;