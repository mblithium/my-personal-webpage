import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import Breadcrumb from "../components/Breacrumb/Breadcrumb";
import styles from "../components/Main/Main.module.css"
import { Outlet } from "react-router-dom";
import MainArticle from "../components/MainArticle/MainArticle";

function Index(props:any) {
    return(
        <div className="App">
           <Main>
                <Header />
                <Breadcrumb path={["Home"]}></Breadcrumb>
                <MainArticle>
                    <h1>Seja bem-vindo ao meu site!</h1>
                    <p>Um site de testes hospedado no neocities. A ideia era fazer um site pessoal simples com visual antigo, estilo 90s, mas mudei de ideia e deixei "flat" e utilizando tecnologias mais atuais com ReactJS. Aqui também postarei estudos, guias, experimentos e artigos, normalmente voltados a tecnologia, programação, design e tudo o que considero interessante.</p>


                    <h1>Achou legal?</h1>

                    Você pode seguir <a href="https://neocities.org/site/mblithium">meu perfil do neocities aqui</a> ou, caso tenha um site aqui, adicionar um badge para o site escolhendo um dos badges que <a href="#">disponibilizei aqui</a>.

                    <h1>Em construção...</h1>

                    O site não está pronto e está a ser desenvolvido com o tempo. Pretendo colocar artigos, experimentos, sites com ferramentas interessantes, entre outras coisas do tipo.

                    <ul>
                        <li>Criar uma seção para divulgação de badges de sites interessantes no neocities. Também adicionar o badge de divulgação desse na página de "about" do site.</li>
                        <li>[PRIORIDADE MÁXIMA] <u>fazer um botão para tema escuro</u> que salva esta configuração em localstorage.</li>
                    </ul>
                </MainArticle>
                
           </Main>
           <Footer></Footer>
        </div>
    )
}

export default Index;