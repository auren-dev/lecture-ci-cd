import './config/sentry'
import express from 'express'
import * as Sentry from '@sentry/node'
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
    const result = helloController.hi(name)
    res.json({ message: result })
})

app.get('/bye', (req, res) => {
    const name = req.query?.name?.toString() || 'Unknown'
    const result = `Bye, ${name}`
    res.json({ message: result })
})

app.get('/error-sentry', (req, res) => {
    throw new Error('🚨 My API Server Error Occur!')
})

Sentry.setupExpressErrorHandler(app)

app.listen(PORT, () => console.log(`🚀 API Server Started on :${PORT}`))