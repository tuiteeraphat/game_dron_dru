import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerId: "",
    time_practice: 60,
    time_end: 30,
    time_real: 60,
    is_practice: true,
    is_real: false,
    is_real_end: false,
    round: 1,
    score: 0,
    totalTargets: 45,
    myTargets: 0,
  },
  reducers: {
    setTotalTargets: (state, action) => {
      state.totalTargets = action.payload;
    },
    setMyTargets: (state) => {
      state.myTargets += 1;

      switch (state.round) {
        case 1:
          state.score += 5;
          break;
        case 2:
          state.score += 10;
          break;
        case 3:
          state.score += 15;
          break;
      }
    },
    practiceCountdown: (state) => {
      if (state.time_practice === 1) {
        state.is_practice = false;
        state.is_real = true;
      }

      state.time_practice -= 1;
    },
    endCountdown: (state) => {
      if (state.time_end === 1) {
        state.is_practice = false;
        state.is_real = true;
        state.is_real_end = false;
      }

      state.time_end -= 1;
    },
    realCountdown: (state) => {
      if (state.time_real === 1) {
        state.round += 1;

        switch (state.round) {
          case 2:
            state.time_real = 45;
            break;
          case 3:
            state.time_real += 35;
            break;
        }

        if (state.round <= 3) {
          state.is_real = false;
          state.is_real_end = true;
          state.time_end = 30;
        } else {
          state.is_real = false;
          state.is_real_end = true;
          state.time_real = 0;
          state.time_end = 0;
        }
      }

      state.time_real -= 1;
    },
  },
});

export const {
  practiceCountdown,
  realCountdown,
  setMyTargets,
  setTotalTargets,
  endCountdown,
} = gameSlice.actions;
export default gameSlice.reducer;
