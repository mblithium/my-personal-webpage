
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
                   <h1>Experimentos</h1>
                   <p>Olá, aqui irei organizar alguns experimentos que fiz em algum momento aleatório para fácil acesso futuramente.</p>

                   <h1>Miniprojetos</h1>
                   <ul>
                        <li><strong><a href="https://replit.com/@MatheusBastos/WhatIsYourPokemonType" target="_blank">What is Your Pokemon Type (Python)</a></strong>: projeto feito para treinar programação com python, um pequeno "Quiz" que de acordo com o ano e dia de nascimento mostra o tipo de pokémon que o usuário seria. Foram utilizados recursos de cores com ANSI, loop com tratamento de erros, emojize (biblioteca de emojis), gerador de número aleatório e função do sistema manter o terminal limpo durante a execução.</li>
                        <li><strong><a href="https://replit.com/@MatheusBastos/What-Is-Your-Pokemon-Type-HTML5" target="_blank">What is Your Pokemon Type (HTML5)</a></strong>: mesma proposta do anterior, só que feito em HTML5, CSS3 e Javascript.</li>
                        <li><strong><a href="https://jogo-da-velha-vanilla-html5-css3-js.matheusbastos.repl.co/">Jogo da Velha (HTML5)</a></strong>: Jogo da velha feito com HTML5, CSS3 e Javascript.</li>
                   </ul>
                </MainArticle>
           </Main>
           <Footer></Footer>
        </div>
    )
}

export default Experiments;