import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breacrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from "../components/Main/Main";
import MainArticle from '../components/MainArticle/MainArticle';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ArticlesPage() {
    const blankArticle:string = "Teste";
    let { id } = useParams();    
    const [article, setArticle] = useState({
        "posts": [{
            "Title": "Loading...",
            "Archive": "None",
            "Date": "None"
        }]
    });

    async function fetchPosts() {
        let postID = id;
        if (postID == "posts") {
            let resp = await axios.get(`/posts/${postID}.json`);
            setArticle(resp.data);
        }
    }
   
    useEffect(() => {
        fetchPosts();
    }, []);

    
    return (
        <div className="App">
           <Main>
           <Header />
                <Breadcrumb path={["Home", "Articles"]}></Breadcrumb>
                <MainArticle>
                    <h1>Explorar artigos</h1>

                    <p>Esta página ainda está sendo desenvolvida...</p>
                
                    {/*JSON.stringify(article)*/}
                    <ul>
                    {
                        article.posts.map((item:any, index:any) => {
                            return <li key={index}><Link to={`/articles/posts/${item.Archive}`}>{item.Title}</Link>: {item.Description}</li>
                        })
                    }
                    </ul>
                </MainArticle>
           </Main>
           <Footer></Footer>
        </div>
    )
}

export default ArticlesPage;