import { useState, useEffect } from "react";
import FormularioFilme from "../../components/Formulario/FormularioFilme";
import ListarFilmes from "../../components/ListarFilmes/ListarFilmes";
import CardFilme from "../../components/Card/CardFilme";
import styles from "./Catalogo.module.css"

function Catalogo() {
  const [filmes, setFilmes] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [ultimoFilme, setUltimoFilme] = useState("");
  useEffect(() => {
    if (filmes.length > 0) {
      setMensagem("🎉 Filme cadastrado com sucesso ");

      const timer = setTimeout(() => setMensagem(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [filmes]);

  function adicionarFilme(filme) {
    setFilmes([...filmes, filme]);
    console.log(filmes);
  }
  return (
    <div>
      <h1 className={styles.h1}>📽️ Filmes</h1>
      <FormularioFilme adicionarFilme={adicionarFilme} />
      <ListarFilmes filmes={filmes} />
    </div>
  );
}
export default Catalogo;
