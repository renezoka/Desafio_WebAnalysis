import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()

const app = express()
const genAI = new GoogleGenerativeAI({})
const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' })

app.use(cors())
app.use(express.json())

app.post('/analisar', async (req, res) => {
  const { nomeEmpresa } = req.body

  if (!nomeEmpresa) {
    return res.status(400).json({ error: 'Nome da empresa é obrigatório' })
  }

  try {
    const prompt = `Analise a empresa "${nomeEmpresa}" e responda APENAS um JSON válido, sem texto extra, sem markdown, sem explicações, no seguinte formato:
    {
      "resumo": "...",
      "produtos": "...",
      "pontosFortes": "...",
      "riscos": "...",
      "oportunidades": "..."
    }`

    const result = await model.generateContent(prompt)
    const texto = result.response.text()
    const textoLimpo = texto.replace(/```json|```/g, '').trim()
    const resultado = JSON.parse(textoLimpo)

    res.json(resultado)
  } catch (error) {
    console.error(`Erro ao analisar empresa: ${nomeEmpresa} `, error)
    res.status(500).json({ error: 'Erro ao processar análise. Tente novamente.' })
  }
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))