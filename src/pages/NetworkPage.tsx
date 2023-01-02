
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
                    <p>Aqui você encontrará meus contatos, além conteúdos, pessoas e sites que considero interessantes.</p>
                
                    <h1>Sites legais no neocities</h1>
                    <div className='badgesList'>
                        <a href="https://daniele63.neocities.org/" target="_blank"><img src="https://daniele63.neocities.org/images/danieles_button.jpg" /></a>
                        <a href="https://berbardo.neocities.org/" target="_blank"><img src="https://berbardo.neocities.org/img/buttons/bernardo.png" /></a>
                    </div>

                    <h1>Comunidade Brasileira 🇧🇷</h1>
                    <div className='badgesList'>
                        <a href="https://mblithium.neocities.org" target="_blank"><img src="https://mblithium.neocities.org/badges/mblithium-badge-100x50.png" title="It's Me!!!" /></a> 
                        <a href="https://vinizinho.net/" target="_blank"><img src="https://vinizinho.net/figures/button_1.png" title="Vinizone"></img></a>
                        <a href="https://berbardo.neocities.org/" target="_blank"><img src="https://berbardo.neocities.org/img/buttons/bernardo.png" title="Berbardo" /></a>
                    </div>
                </MainArticle>
           </Main>
           <Footer></Footer>
        </div>
    )
}

export default Network;