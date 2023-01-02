import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MarkdownView from 'react-showdown';
import Breadcrumb from '../components/Breacrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from "../components/Main/Main";
import MainArticle from '../components/MainArticle/MainArticle';
import UpButton from '../components/UpButton/UpButton';



function Posts() {
    const blankArticle:string = "Teste";
    let { id } = useParams();    
    const [article, setArticle] = useState("");

    async function fetchPost() {
        let postID = id;
        if (postID != "") {
            try {
                let resp = await axios.get(`/posts/${postID}.md`);
                setArticle(resp.data);
            } catch(err) {
                setArticle("<h1>AOops, there was an error. :P</h1> <p>Check that you typed the URL correctly, that the content exists, or your internet connection and try again.</p>") 
            }
        }
    }
   
    useEffect(() => {
        fetchPost();
    }, []);

    
    return (
        <div className="App">
           <Main>
           <Header />
                <Breadcrumb path={["Home", "Articles", "Post"]}></Breadcrumb>
                <MainArticle>
                    <MarkdownView 
                        markdown={article} 
                        options={{ tables: true, emoji: true }} 
                        components={{ Link }} />
                </MainArticle>
           </Main>
           <Footer></Footer>
           <UpButton />
        </div>
    )
}

export default Posts;