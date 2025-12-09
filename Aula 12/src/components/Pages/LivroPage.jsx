import React from "react";
import List from "../List/list";
import Livro from "../Livro/livro";


function LivroPage({livro}){
    const list=[
    {
img : "https://cdn.kobo.com/book-images/086b65fc-4a24-4400-9b81-d828313958bf/353/569/90/False/demon-slayer-kimetsu-no-yaiba-vol-1.jpg",
titulo :"Demon Slayer",
autor : "Koyoharu Gotouge",
ano : "2016",
genero : "Açaõ, Aventura, Fantasia Sombria e Sobrenatural.",
disponivel :"",
badge : "Novo",
children : ""
    },

    {
    img : "https://m.media-amazon.com/images/I/61in0ogKvdL.jpg",
titulo :"Quarta Asa",
autor : "Rebecca Yarros",
ano : "2024",
genero : "Fantasia",
disponivel :"",
badge : "Novo",
children : ""
    },

    {
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAT6Xpubs6iP6tAgVLvZaxf49RVI4w3Em5w&s",
titulo : "Chama de Ferro",
autor : "Rebecca Yarros",
ano : "2024",
genero : "Fantasia",
disponivel : "",
badge : "Novo",
children : ""
    }






]
    return(
        <>
        < List livro = {livro}/>
        
            

    
        
        
    
            
        
        </>
    )
}
export default LivroPage;