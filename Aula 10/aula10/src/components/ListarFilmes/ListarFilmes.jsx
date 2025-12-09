import CardFilme from "../../components/Card/CardFilme";

function ListarFilmes({filmes}) {
  return filmes.length ?    
  (
    
    <>
    <div>
      
      {filmes.map((filme) => (
        <CardFilme
          key={filme.id}
          titulo={filme.titulo}
          descricao={filme.descricao}
          img={filme.img}
        />
      ))}
      
    </div>
    </>
    
    ):(
    <p>Nenhum filme cadastrado .</p>
  );
  

  
  
  
}
export default ListarFilmes;