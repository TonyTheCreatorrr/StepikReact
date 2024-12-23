import express from 'express'

const missions = [
    {
      nick: 'cool-mission-1',
      name: 'Mission 1',
      description: 'mission description 1',
    },
    {
      nick: 'cool-mission-2',
      name: 'Mission 2',
      description: 'mission description 2',
    },
    {
      nick: 'cool-mission-3',
      name: 'Mission 3',
      description: 'mission description 3',
    },
    {
      nick: 'cool-mission-4',
      name: 'Mission 4',
      description: 'mission description 4',
    },
  ]


const expressApp = express()
expressApp.get('/ping', (req, res) => {
    res.send('pong')
})

expressApp.get('/missions', (req, res) => {
    res.send(missions)
})
expressApp.listen(3000, () => {
    console.info('Listening at http://localhost:3000/')
})
