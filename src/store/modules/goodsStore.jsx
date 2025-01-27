import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// 创建分片
const goodsStore = createSlice({
  name: 'goods',
  initialState: {
    // 商品列表
    goodsList: [],
    // 当前查找的商品
    goodDetail: {},
  },
  reducers: {
    // 商品列表
    setGoodsList(state, action) {
      state.goodsList = action.payload
    },
    // 获取单个商品
    getGoodDetail(state, action) {
      state.goodDetail = action.payload
    },
  }
})

const { setGoodsList, getGoodDetail } = goodsStore.actions

// 异步获取数据部分
// 1. 点击标签切换选项卡
const fetchGoodsList = (tabKey) => {
  return async (dispatch) => {
    // 编写异步逻辑
    const res = await axios.get(`http://localhost:8888/${tabKey}`)
    dispatch(setGoodsList(res.data))
  }
}

// 2. 获取单个商品详情
const fetchGoodDetail = (category, id) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:8888/${category}/${id}`)
    dispatch(getGoodDetail(res.data))
  }
}





export { fetchGoodsList, fetchGoodDetail }

const reducer = goodsStore.reducer

export default reducer