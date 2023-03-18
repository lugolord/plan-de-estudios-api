import express from 'express'
import informatica from './studyPlans/informatica.json' assert { type: 'json' }

const careers = [informatica]

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/:career', (req, res) => {
  const { career } = req.params
  const lookedCareer = careers.find(el => el.careerName === career)
  if (lookedCareer) return res.json(lookedCareer)
  res.json({ careerExists: false })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
