import React from "react";
import Card from "../Card/card";
import styles from "./Main.module.css"

 function Main(){
     return (
        <>
        <Card
        pergunta="1.Explique com suas palavras o que é um componente no React."
        resposta=" Component seria uma forma de agrupar os itens, para ter melhor organizção. "/>
        
         <Card
        pergunta="2. Qual é a função do arquivo App.jsx em um projeto React?"
        resposta="O app.jsx apresenta todos os components e roda no servidor, ele considerado importante pois é ele que que roda todo o projeto."/>
         <Card
        pergunta="3. Descreva o papel do arquivo main.jsx (ou index.js)."
        resposta="Main renderiza o projeto."/>
         <Card
        pergunta=" 4. O ciclo de vida de um componente React pode ser dividido em três fases."
        resposta=" Montagem:Onde colocamos um elemento no projeto.Atualização: Onde modificammos os elemento.Desmontagem: Onde encerramos o ciclo do elemento no projeto. "/>
        </>
     )
 }
 export default Main;