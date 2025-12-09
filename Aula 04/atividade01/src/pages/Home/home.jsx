import React from "react";
import Header from "../../components/Header/header";
import Main from "../../components/main/main";
import Footer from "../../components/Footer/footer";
import styles from "./home.module.css"

function Home(){
    return (
        <>
        <div className={styles.container}>
        <Header/>
        <Main/>
        <Footer/>
        </div>
        
        </>
    )
}
export default Home;