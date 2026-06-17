import { useState } from 'react'
import './style.css'
import Quit from '../../assets/X-27.png'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <form> 
      <h1>Assistente Inteligente de Análise de Empresas</h1>
      <input name="nome" type="text"/>
      <button type="submit">Pesquisar</button>
      </form>

      <div>
        <div>
          <p>Nome da empresa: </p>
          <p>Resumo da empresa: </p>
          <p>Principais produtos e serviços: </p>
          <p>Possíveis pontos fortes: </p>
          <p>Possíveis riscos: </p>
          <p>Sugestões de oportunidades de crescimento: </p>
        </div>
        <button className='quit'><img src={Quit} alt="Quit"/></button>
      </div>
    </div>

  )
}

export default Home
