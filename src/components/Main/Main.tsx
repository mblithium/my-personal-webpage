import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Header from "../Header/Header";
import MarkdowView from 'react-showdown';
import axios from 'axios';
import Breadcrumb from "../Breacrumb/Breadcrumb";

function Main() {
    const profileurl = "https://raw.githubusercontent.com/mblithium/mblithium/main/README.md";
    const [profile, setProfile] = useState('');

    const getUserGithubProfile = () => { 
        axios.get(profileurl)
        .then((response) => {
            console.log(response.data);
            setProfile(response.data);
        });
    };

    useEffect(() => getUserGithubProfile(), []);

    return (
      <main className={`${styles.main}`}>
        <Header></Header>
        <Breadcrumb path={["Homepage"]}></Breadcrumb>
        <article className={`${styles.main_article}`}>
            <MarkdowView markdown={profile}></MarkdowView>
        </article>
      </main>
    )
  }
  
export default Main;
  