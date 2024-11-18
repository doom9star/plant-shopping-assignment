import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, { item: action.payload, quantity: 1 }];
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },

    deleteItem: (state, action) => {
      const item = state.items.find((i) => i.item.name === action.payload.name);
      state.items = [
        ...state.items.filter((i) => i.item.name !== action.payload.name),
      ];
      state.totalItems -= item.quantity;
      state.totalPrice -= item.item.price * item.quantity;
    },

    incrementItem: (state, action) => {
      const itemIdx = state.items.findIndex(
        (i) => i.item.name === action.payload.name
      );
      state.items[itemIdx] = {
        ...state.items[itemIdx],
        quantity: state.items[itemIdx].quantity + 1,
      };
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },

    decrementItem: (state, action) => {
      const itemIdx = state.items.findIndex(
        (i) => i.item.name === action.payload.name
      );
      state.items[itemIdx] = {
        ...state.items[itemIdx],
        quantity: state.items[itemIdx].quantity - 1,
      };
      state.totalItems -= 1;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addItem, deleteItem, incrementItem, decrementItem } =
  globalSlice.actions;

export default globalSlice.reducer;
