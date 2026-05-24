const TabelaUsuarios = (props) => {
  return (
  <>
  <h1 className="align-center">Consumindo API com Axios</h1>
  <p className="align-center">Os dados da tabela estão vindo da api jsonplaceholder.</p>
    <table className='lista-usuarios'>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Empresa</th>
                <th>Cidade</th>
            </tr>
        </thead>
        <tbody>
        {
            props.usuarios.map( dado => (
            <tr className='usuario' key={dado.id}>
                <td>{dado.name}</td>
                <td>{dado.email}</td>
                <td>{dado.company.name}</td>
                <td>{dado.address.city}</td>
            </tr>
            ))
        }
        </tbody>
    </table>
    </>
  )
}

export default TabelaUsuarios