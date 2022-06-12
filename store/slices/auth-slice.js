import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosWithAuth as axios } from "../../utils";

const initialState = {
  user: {},
  loggedIn: false,
  loading: false,
  error: {
    message: ''
  }
}

export const login = createAsyncThunk(
  'auth/login',
  async ({credentials}, { rejectWithValue }) => {
    try {
      const res = await axios().post('/auth/login', credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue({error: { message: err.response.data.message} });
    }
  }
);

export const requestRegister = createAsyncThunk(
  'auth/requestRegister',
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await axios().post('/auth/register/request', {email: email.trim()});
      return res.data;
    } catch (err) {
      return rejectWithValue({error: { message: err.response.data.message} });
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios().get('/auth/logout');
      return res.data;
    } catch (err) {
      return rejectWithValue({error: { message: err.response.data.message} });
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.error.message = '';
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.loggedIn = true;
      state.error.message = '';
      state.user = payload.user;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error.message = payload.error.message;
    },
    [logout.pending]: (state) => {
      state.loading = true;
      state.error.message = initialState.error.message;
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.loggedIn = initialState.loggedIn;
      state.error.message = initialState.error.message;
      state.user = initialState.user;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error.message = payload.error.message;
    },
    [requestRegister.pending]: (state) => {
      state.loading = true;
      state.error.message = '';
    },
    [requestRegister.fulfilled]: (state) => {
      state.loading = false;
      state.error.message = '';
    },
    [requestRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error.message = payload.error.message;
    },
  }
});

// export const {  } = authSlice.actions;