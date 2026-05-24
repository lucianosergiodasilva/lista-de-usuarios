import axios from 'axios'; 
import { useEffect, useState } from 'react';
import './App.css';
import TabelaUsuarios from './componentes/TabelaUsuarios';


function App() {
  
  const [dados, setDados] = useState([])
  const [pagina, setPagina] = useState(1)
  
  // Limite de usuários por página.
  const limite = 4

  useEffect(() => {
    
    async function carregarDados(){
      const resposta = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${limite}&_page=${pagina}`)
      // Armazena os dados obtidos da api
      setDados(resposta.data)
    }

    carregarDados()

    // A API será carregada toda vez que a constante "pagina" for atualizada.
  }, [pagina])

  return (
    <>
      <TabelaUsuarios usuarios={dados} />

      <div className="botoes">
        <button disabled={pagina === 1} type="button" onClick={() => setPagina(pagina - 1)}>Voltar</button>
        <span>Página {pagina}</span>
        <button disabled={pagina === 3} type="button" onClick={() => setPagina(pagina + 1)}>Avançar</button>
      </div>
    </>
  )
}

export default App
