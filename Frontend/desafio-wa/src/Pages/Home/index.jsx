import { useState } from 'react'
import './style.css'
import Quit from '../../assets/X-27.png'

// Estado inicial reutilizável
const empresaVazia = {
  nome: '',
  resumo: '',
  produtos: '',
  pontosFortes: '',
  riscos: '',
  oportunidades: ''
}

function Home() {
  const [nomeInput, setNomeInput] = useState('')
  const [empresa, setEmpresa] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!nomeInput.trim()) return

    setLoading(true)
    setErro('')
    setEmpresa(null)

    try {
      const response = await fetch('http://localhost:3000/analisar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nomeEmpresa: nomeInput })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Erro na requisição')
      }

      const data = await response.json()
      setEmpresa({ nome: nomeInput, ...data })

    } catch (err) {
      setErro(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleFechar() {
    setEmpresa(null)
    setNomeInput('')
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Assistente Inteligente de Análise de Empresas</h1>
        <input
          placeholder="Nome da empresa"
          name="nome"
          type="text"
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analisando...' : 'Analisar'}
        </button>
      </form>

      {erro && <p className='erro'>{erro}</p>}

      {empresa && (
        <div className='card'>
          <div>
            <p>Nome da empresa: <span>{empresa.nome}</span></p>
            <p>Resumo da empresa: <span>{empresa.resumo}</span></p>
            <p>Principais produtos e serviços: <span>{empresa.produtos}</span></p>
            <p>Possíveis pontos fortes: <span>{empresa.pontosFortes}</span></p>
            <p>Possíveis riscos: <span>{empresa.riscos}</span></p>
            <p>Sugestões de oportunidades de crescimento: <span>{empresa.oportunidades}</span></p>
          </div>
          <button className='quit' onClick={handleFechar}>
            <img src={Quit} alt="Fechar"/>
          </button>
        </div>
      )}
    </div>
  )
}

export default Home