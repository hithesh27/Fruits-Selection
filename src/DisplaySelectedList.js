export default function DisplaySelectedList({
  selectedList,
  onAddListHandler,
}) {
  return (
    <div>
      <h1>selected Fruits</h1>
      {selectedList.map((fruit) => {
        return (
          <div key={fruit.id}>
            <p>{fruit.name}</p>
            <button onClick={() => onAddListHandler(fruit.id)}>remove</button>
          </div>
        );
      })}
    </div>
  );
}
