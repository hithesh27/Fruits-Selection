export default function DisplayList({
  listFruits,
  requiredSuffix,
  onRemoveListHandler,
}) {
  let filteredListFruits = [];

  for (const fruits of listFruits) {
    if (fruits.name.length < requiredSuffix.length) {
      continue;
    }
    let flag = 0;
    for (let j = 0; j < requiredSuffix.length; j++) {
      if (fruits.name[j].toLowerCase() !== requiredSuffix[j].toLowerCase())
        flag = 1;
    }
    if (flag === 0) {
      filteredListFruits.push(fruits);
    }
  }
  if (requiredSuffix.length === 0) {
    filteredListFruits = listFruits;
  }
  return (
    <div>
      <h1>Available listFruits</h1>
      {filteredListFruits.map((fruit) => {
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
