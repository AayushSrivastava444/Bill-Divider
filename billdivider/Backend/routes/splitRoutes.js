import express from 'express'
import Split from '../models/Split.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { amount, people, tipPercent, names } = req.body
  const tipAmount = (tipPercent / 100) * amount
  const total = amount + tipAmount
  const perPerson = total / people

  const newSplit = new Split({
    amount,
    people,
    tipPercent,
    names,
    perPerson
  })

  await newSplit.save()
  res.status(201).json(newSplit)
})

router.get('/', async (req, res) => {
  const splits = await Split.find().sort({ date: -1 })
  res.json(splits)
})

export default router
