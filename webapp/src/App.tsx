export const App = () => {
  const missions = [
    {
      nick: "cool-mission-1",
      name: "Mission",
      description: "mission description 1",
    },
    {
      nick: "cool-mission-2",
      name: "Mission",
      description: "mission description 2",
    },
    {
      nick: "cool-mission-3",
      name: "Mission",
      description: "mission description 3",
    },
  ];
  return (
    <div>
      <h1>ToDo</h1>
      {missions.map((mission) => {
        return (
          <div key={mission.nick}>
            <h2>{mission.name}</h2>
            <p>{mission.description}</p>
          </div>
        );
      })}
    </div>
  );
};
