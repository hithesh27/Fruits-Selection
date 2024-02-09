import DisplayList from "./DisplayList";
import DisplaySelectedList from "./DisplaySelectedList";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";
import {fruitsActions} from './store';
function App() {
  const dispatch=useDispatch();
  const [search, setSearch] = useState("");
  const fruits= useSelector((state)=>state);
  console.log(fruits.listFruits);
  function onRemoveListHandler(id) {


    dispatch(fruitsActions.removeFruitsList(id));

    /*var selectedFruit;
    for (let i = 0; i < listFruits.length; i++) {
      if (id === listFruits[i].id) {
        selectedFruit = listFruits[i];
      }
    }
    const modifiedList = listFruits.filter((ele) => ele.id !== id);
    const modifiedSelectedList = [selectedFruit, ...selectedList];
    setSelectedList(modifiedSelectedList);
    setListFruits(modifiedList);*/
  }
  function onAddListHandler(id) {
  
    dispatch(fruitsActions.addFruitsList(id));
  
    /*  var selectedFruit;
    for (let i = 0; i < selectedList.length; i++) {
      if (id === selectedList[i].id) {
        selectedFruit = selectedList[i];
      }
      const modifiedSelectedList = selectedList.filter((ele) => ele.id !== id);
      const modifiedList = [selectedFruit, ...listFruits];
      setSelectedList(modifiedSelectedList);
      setListFruits(modifiedList);
    }*/
    
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
          listFruits={fruits.listFruits}
          onRemoveListHandler={onRemoveListHandler}
          requiredSuffix={search}
        ></DisplayList>
      </div>
      <div className="selected-list">
        <DisplaySelectedList
          selectedList={fruits.selectedList}
          onAddListHandler={onAddListHandler}
        ></DisplaySelectedList>
      </div>
    </div>
  );
}
export default App;
