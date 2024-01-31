export default function DisplayList({ listFruits, onRemoveListHandler }) {
  return (
    <div>
      <h1>Available listFruits</h1>
      {listFruits.map((fruit) => {
        return (
          <div key={fruit.id}>
            <p>{fruit.name}</p>
            <button onClick={() => onRemoveListHandler(fruit.id)}>add</button>
          </div>
        );
      })}
    </div>
  );
}