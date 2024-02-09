import { createSlice,configureStore } from "@reduxjs/toolkit";

const fruits={
    listFruits:[
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
  ],
   selectedList:[
    ]};

  const modifyFruitsSlice=createSlice({
    name :'addFruitsList',
    initialState :fruits,
    reducers :{
        addFruitsList(state,action){
            var selectedFruit;
    for (let i = 0; i < state.selectedList.length; i++) {
      if (action.payload === state.selectedList[i].id) {
        selectedFruit = state.selectedList[i];
      }
    }
      state.selectedList = state.selectedList.filter((ele) => ele.id !== action.payload);
      state.listFruits = [selectedFruit, ...state.listFruits];
        },
        removeFruitsList(state,action){
            var selectedFruit;
    for (let i = 0; i < state.listFruits.length; i++) {
      if (action.payload === state.listFruits[i].id) {
        selectedFruit = state.listFruits[i];
      }
    }
    state.listFruits= state.listFruits.filter((ele) => ele.id !== action.payload);
    state.selectedList = [selectedFruit, ...state.selectedList];
        }
    }
  })

 export  const store=configureStore(modifyFruitsSlice);

export const fruitsActions=modifyFruitsSlice.actions;