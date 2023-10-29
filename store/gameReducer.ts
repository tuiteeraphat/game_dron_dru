import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerId: "",
    time_practice: 15,
    time_real: 60,
    is_practice: true,
    is_real: false,
    is_real_end: false,
    score: 0,
    totalTargets: 0,
    myTargets: 0,
  },
  reducers: {
    setTotalTargets: (state, action) => {
      state.totalTargets = action.payload;
    },
    setMyTargets: (state) => {
      state.myTargets += 1;
    },
    practiceCountdown: (state) => {
      if (state.time_practice === 1) {
        state.is_practice = false;
        state.is_real = true;
      }

      state.time_practice -= 1;
    },
    realCountdown: (state) => {
      if (state.time_real === 1) {
        state.is_real = false;
        state.is_real_end = true;
      }

      state.time_real -= 1;
    },
  },
});

export const { practiceCountdown, realCountdown } = gameSlice.actions;
export default gameSlice.reducer;
