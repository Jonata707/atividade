import React from "react";
import styles from "./livro.module.css";

function Livro({titulo, autor, ano, genero, img, disponivel, badge, children}){
    return(
        <>
        <div className={styles.title}>
            <img src={img} alt="" />
            <h2>Título: {titulo}</h2>
            <h3>Autor: {autor}</h3>
            <p>Ano de Lançamento: {ano}</p>
            <p>Gênero: {genero}</p>
            <p>{disponivel}</p>
            <p>{badge}</p>
            <p>{children}</p>
        </div>
        
        </>
    )
}
export default Livro;