import Hobby from './Hobby';

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div className="HobbyList">
      <h3>Hobby List</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <Hobby key={index} content={hobby} />
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
