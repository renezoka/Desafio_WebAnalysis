import { useState } from 'react'
import './style.css'
import Quit from '../../assets/X-27.png'

const empresa = {
  nome: 'aaaaaaaaaaaaaa',
  resumo: '',
  produtos: '',
  pontosFortes: '',
  riscos: '',
  oportunidades: ''
}

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <form> 
      <h1>Assistente Inteligente de Análise de Empresas</h1>
      <input placeholder="Nome da empresa" name="nome" type="text"/>
      <button type="submit">Analisar</button>
      </form>

      <div className='card'>
        <div>
          <p>Nome da empresa: <span>{empresa.nome}</span></p>
          <p>Resumo da empresa: <span>{empresa.resumo}</span> </p>
          <p>Principais produtos e serviços: <span>{empresa.produtos}</span> </p>
          <p>Possíveis pontos fortes: <span>{empresa.pontosFortes}</span> </p>
          <p>Possíveis riscos: <span>{empresa.riscos}</span> </p>
          <p>Sugestões de oportunidades de crescimento: <span>{empresa.oportunidades}</span> </p>
        </div>
        <button className='quit'><img src={Quit} alt="Quit"/></button>
      </div>
    </div>

  )
}

export default Home
