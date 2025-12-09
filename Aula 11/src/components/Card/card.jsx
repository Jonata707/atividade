import React from "react";
import styles from "./card.module.css"

function Card({pergunta, resposta }){
   return(
    <>
    <h1>Atividade de Sala</h1>
    <h2>Pergunta: {pergunta} </h2>
    <p>Respostas: {resposta}</p>
    
    
    </>
   )
}
export default Card;