  import { configureStore } from "@reduxjs/toolkit";
  import { modifyFruitsSlice } from "./modifyFruitsSlice";

  export  const store=configureStore(modifyFruitsSlice);