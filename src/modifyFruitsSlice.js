    import { createSlice} from "@reduxjs/toolkit";
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

    export const modifyFruitsSlice=createSlice({
        name :'addFruitsList',
        initialState :fruits,
        reducers :{
            addFruitsList(state,action){
            var selectedFruit=state.selectedList.find((fruit)=>fruit.id===action.payload);
        state.selectedList = state.selectedList.filter((ele) => ele.id !== action.payload);
        state.listFruits = [selectedFruit, ...state.listFruits];
            },
            removeFruitsList(state,action){
            var selectedFruit=state.listFruits.find((fruit)=>fruit.id===action.payload);
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

    export const fruitsActions=modifyFruitsSlice.actions;