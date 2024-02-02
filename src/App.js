import DisplayList from "./DisplayList";
import DisplaySelectedList from "./DisplaySelectedList";
import "./App.css";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [listFruits, setListFruits] = useState([
    {
      name: "Banana",
      id: 1,
    },
    {
      name: "Watermelon",
      id: 2,
    },
    {
      name: "Apple",
      id: 3,
    },
    {
      name: "Mango",
      id: 4,
    },
    {
      name: "Orange",
      id: 5,
    },
    {
      name: "Mosambi",
      id: 6,
    },
  ]);
  const [selectedList, setSelectedList] = useState([]);
  function onRemoveListHandler(id) {
    var selectedFruit;
    for (let i = 0; i < listFruits.length; i++) {
      if (id === listFruits[i].id) {
        selectedFruit = listFruits[i];
      }
    }
    const modifiedList = listFruits.filter((ele) => ele.id !== id);
    const modifiedSelectedList = [selectedFruit, ...selectedList];
    setSelectedList(modifiedSelectedList);
    setListFruits(modifiedList);
  }
  function onAddListHandler(id) {
    var selectedFruit;
    for (let i = 0; i < selectedList.length; i++) {
      if (id === selectedList[i].id) {
        selectedFruit = selectedList[i];
      }
      const modifiedSelectedList = selectedList.filter((ele) => ele.id !== id);
      const modifiedList = [selectedFruit, ...listFruits];
      setSelectedList(modifiedSelectedList);
      setListFruits(modifiedList);
    }
  }
  function onSearchHandler(event) {
    setSearch(event.target.value);
  }
  console.log(search);
  return (
    <div className="container">
      <div className="list">
        search
        <input type="text" value={search} onChange={onSearchHandler}></input>
        <DisplayList
          listFruits={listFruits}
          onRemoveListHandler={onRemoveListHandler}
          requiredSuffix={search}
        ></DisplayList>
      </div>
      <div className="selected-list">
        <DisplaySelectedList
          selectedList={selectedList}
          onAddListHandler={onAddListHandler}
        ></DisplaySelectedList>
      </div>
    </div>
  );
}
export default App;
