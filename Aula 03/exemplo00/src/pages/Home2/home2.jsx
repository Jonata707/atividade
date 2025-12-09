import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import style from "./home2.module.css";



 function Home2(){
     return(
       <>
       <div className={style.container}>
         <Header/>
       <Main/>
       <Footer/>
       </div>
       
       
       </>

     );
 };
 export default Home2;