import express from 'express'
import helloController from './hello'

const PORT = process.env?.PORT ?? 3000

const app = express()

app.get('/health', (req, res) => {
    res.status(200).send({ message: 'OK' })
})

app.get('/hello', (req, res) => {
    const name = req.query?.name?.toString() || 'Unknown'
    const result = helloController.hello(name)
    res.json({ message: result })
})

app.get('/hi', (req, res) => {
    const name = req.query?.name?.toString() || 'Unknown'
    const params = !!name
    const result = helloController.hi(params)
    res.json({ message: result })
})

app.listen(PORT, () => console.log(`🚀 API Server Started on :${PORT}`))