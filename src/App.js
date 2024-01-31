import DisplayList from "./DisplayList";
import DisplaySelectedList from "./DisplaySelectedList";
import "./App.css";
import { useState } from "react";
function App() {
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
  return (
    <div className="container">
      <div className="list">
        <DisplayList
          listFruits={listFruits}
          onRemoveListHandler={onRemoveListHandler}
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
