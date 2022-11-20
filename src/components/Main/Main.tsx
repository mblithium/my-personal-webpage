import style from "./Main.module.css";
import Header from "../Header/Header";

function Main() {
    return (
      <main className={`${style.main}`}>
        <Header></Header>
        <p>Teste</p>
      </main>
    )
  }
  
  export default Main;
  