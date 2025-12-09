import React from "react";
import { useState } from "react";
import styles from "./FormularioFilme.module.css"

function FormularioFilme({adicionarFilme}){

 const[titulo, setTitulo] = useState("");
 const[descricao, setDescricao] = useState("");
 const[img, setImg] = useState("");

  
  function handleSubmit(e) {
        e.preventDefault();
        if (!titulo || !descricao || !img) {
            return
        }
         else {
            adicionarFilme({ id: Date.now(), titulo, descricao, img });
        }
        setTitulo("");
        setDescricao("");
        setImg("");
    }

 


 return(
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <label className={styles.label}>Titulo:</label>
           <input type="text"
            placeholder="Digite o título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className={styles.input}
             />
             <label>Descrição:</label>
           <input type="text"
            placeholder="Digite a descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={styles.input}
             />
             <label>Imagem:</label>
            <input type="url"
            placeholder="Coloque a imagem"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className={styles.input}
             />
             <button type="submit"
             className={styles.button}>Cadastrar</button>
        </form>
    </div>
    </>
 )
}
export default FormularioFilme;