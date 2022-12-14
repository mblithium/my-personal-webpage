
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breacrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import MainArticle from '../components/MainArticle/MainArticle';
import UpButton from '../components/UpButton/UpButton';

function AboutPage() {
    let { id } = useParams();

    function pegarIdade() {
        const actualDate = new Date();
        const actualYear = Number(actualDate.getFullYear());
        return actualYear - 2000;
    }
    
    return (
        <div className="App">
            <Main>
           <Header />
                <Breadcrumb path={["Home", "About"]}></Breadcrumb>
                <MainArticle>
                    <h1>Sobre o site</h1>

                    <p>Um site de testes hospedado no neocities. A ideia era fazer um site pessoal simples com visual antigo, estilo 90s, mas mudei de ideia e deixei "flat". Aqui também irei tentar postar artigos e criar páginas interessantes, com foco no público de desenvolvedores e intusiastas de tecnologia. ;) Também estou usando para aprender ReactJS.</p>

                    <h1>Sobre mim</h1>

                    <div className='imagecenter'>
                        <img src="/images/avatar.png" className='AboutAvatarImage'></img>
                    </div>

                    <p>Olá, meu nome é Matheus Bastos, tenho {pegarIdade()} anos (nascido em 2000) e sonho em me tornar um desenvolvedor Fullstack no futuro. Estou estudando Ciência da Computação de forma autônoma através do currículo da Universidade Brasileira Livre, focando principalmente na especialização de Desenvolvimento Web.</p>

                    <p>Gosto de experimentar criar soluções para coisas específicas quando necessário, como é o caso de alguns projetos que fiz no Github, como uma extensão para complementar uma certa plataforma de jogos online e alguns scripts para automação de tarefas. Desde pequeno gosto de aprender como as coisas funcionam e, por não ter condições na época, eu visitava a casa do meu vô para baixar algumas páginas e tentar aprender algumas coisas, só em 2018 consegui finalmente ter internet em casa (ainda com muita dificuldade) e em 2021 próximo de 2022, comecei a estudar de verdade desenvolvimento web com HTML5, CSS3 e JS.</p>

                    <p>Também, algumas vezes, testo outras outras linguagens por curiosidade e até por necessidade para criar algo específico. E aprendi a usar o Github, após perder vários projetos por não ter um backup… Sempre faça um backup na nuvem!</p>

                    <h1>Badges de Divulgação</h1>

                    <p>Badges ou "botões" caso queira ajudar a divulgar no seu site do neocities, estão aqui as imagens para isso. Basta copiar e colar o código HTML, você pode modificar como quiser o tamanho e estilos, mantendo o ícone e o link para o site, muito obrigado!</p>

                    <div className='baseDivulgação imagecenter'>
                        <span>
                            <img src="/badges/mblithium-badge-300x150.png"></img>
                        </span>
                        <span>
                            <p><strong>Obs:</strong> altere o tamanho das badges de seu site com um padrão, usando seletores css.</p>
                            <div className="code">
                                {` <a href="https://mblithium.neocities.org" target="_blank"><img src="https://mblithium.neocities.org/badges/mblithium-badge-300x150.png"></a> `}
                            </div>
                        </span>
                    </div>
                    <div className='baseDivulgação imagecenter'>
                        <span>
                            <img src="/badges/mblithium-badge-100x50.png"></img>
                        </span>
                        <span>
                            <p><strong>Obs:</strong> badge pequeno (poupa largura de banda quando não precisa de badges maiores), altere o tamanho das badges de seu site com um padrão, usando seletores css.</p>
                            <div className="code">
                                {` <a href="https://mblithium.neocities.org" target="_blank"><img src="https://mblithium.neocities.org/badges/mblithium-badge-100x50.png"></a> `}
                            </div>
                        </span>
                    </div>
                </MainArticle>
           </Main>
           <Footer></Footer>
           <UpButton />
        </div>
    )
}

export default AboutPage;