// 组合store
import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from './modules/goodsStore'

const store = configureStore({
  reducer: {
    goods: goodsReducer
  }
})

export default store