export const App = () => {
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
  return (
    <div>
      <h1>ToDo</h1>
      {missions.map((mission) => {
        return (
          <div key={mission.nick}>
            <h2>{mission.name}</h2>
            <p>{mission.description}</p>
          </div>
        )
      })}
    </div>
  )
}
