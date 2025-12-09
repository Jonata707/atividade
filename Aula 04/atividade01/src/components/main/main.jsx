import React from "react";
import produtos from "../../data/produtos";
import ProductCard from "../productCard/productCard";
import styles from "./main.module.css"
function Main(){
    return(
        <>
        <main className={styles.main}/>
        {
            produtos.map((produto)=>(
                <ProductCard
                key={produto.id}
                img={produto.img}
                name={produto.name}
                price={produto.price}
                description={produto.description}
                emPromocao={produto.emPromacao}
                />
         ))
        }
        
        
        </>
    )
}
export default Main;