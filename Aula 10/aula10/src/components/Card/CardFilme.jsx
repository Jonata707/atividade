import React from "react";
import FormularioFilme from "../Formulario/FormularioFilme";
import styles from "./CardFilme.module.css";

function CardFilme({titulo, descricao, img}){
    return(
        <> <div className={styles.div}>
         <h2 className={styles.h2}>{titulo}</h2>
         <p className={styles.p}
         >{descricao}</p>
         <img src={img} alt={img} 
         className={styles.img}/>
         </div>
        </>
        
    )
}
export default CardFilme;