import express from 'express'
import cors from 'cors'
import { empresas } from './empresas.js'

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.post('/analisar', (req, res) => {
  const { nomeEmpresa } = req.body

  if (!nomeEmpresa) {
    return res.status(400).json({ error: 'Nome da empresa é obrigatório.' })
  }

  // Busca a empresa ignorando maiúsculas/minúsculas
  const chave = Object.keys(empresas).find(
    (k) => k.toLowerCase() === nomeEmpresa.trim().toLowerCase()
  )

  if (!chave) {
    return res.status(404).json({
      error: `Empresa não encontrada. Empresas disponíveis: ${Object.keys(empresas).join(', ')}.`
    })
  }

  const { nome, resumo, produtos, pontosFortes, riscos, oportunidades } = empresas[chave]

  res.json({ nome, resumo, produtos, pontosFortes, riscos, oportunidades })
})

app.listen(3000, () => {
  console.log('Backend rodando em http://localhost:3000')
})
