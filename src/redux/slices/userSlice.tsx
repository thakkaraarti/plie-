import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  username: '',
  favourites: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    toggleFavourite: (state, action) => {
      const event = action.payload;

      const index = state.favourites.findIndex(
        item => item.event_id === event.event_id
      );

      if (index === -1) {
        // ➕ Add to favourites
        state.favourites.push(event);
      } else {
        // ➖ Remove from favourites
        state.favourites.splice(index, 1);
      }
    },
   
    resetUserCredentials: state => {
      state.username = '';
      
    },
  },
});

export const {
 setToken,
 toggleFavourite,
 setUsername
} = userSlice.actions;
export default userSlice.reducer;
