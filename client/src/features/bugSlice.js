import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bugList: [],
  currentBug: {},
  isCreate: false,
  isEdit: false,
};

const sortPrio = {
  Critical: 3,
  High: 2,
  Normal: 1,
  Low: 0,
};

export const bugSlice = createSlice({
  name: 'bug',
  initialState,
  reducers: {
    selectBug: (state, action) => {
      state.currentBug = { ...action.payload };
    },
    addBug: (state, action) => {
      state.bugList.push(action.payload);
      state.bugList = state.bugList.sort(
        (a, b) => sortPrio[b.priority] - sortPrio[a.priority]
      );
      state.bugList = state.bugList
        .filter((bug) => bug.status !== 'Closed')
        .concat(state.bugList.filter((bug) => bug.status === 'Closed'));
    },
    getBug: (state, action) => {
      state.bugList = action.payload;
      state.bugList = state.bugList.sort(
        (a, b) => sortPrio[b.priority] - sortPrio[a.priority]
      );
      state.bugList = state.bugList
        .filter((bug) => bug.status !== 'Closed')
        .concat(state.bugList.filter((bug) => bug.status === 'Closed'));
    },
    deleteBug: (state, action) => {
      state.bugList = state.bugList.filter(
        (bug) => bug._id !== action.payload._id
      );
    },
    updateBug: (state, action) => {
      let idx = state.bugList.findIndex(
        (bug) => bug._id === action.payload._id
      );
      state.bugList[idx] = action.payload;
    },
    openCreate: (state) => {
      state.isCreate = true;
    },
    closeCreate: (state) => {
      state.isCreate = false;
    },
    openEdit: (state) => {
      state.isEdit = true;
    },
    closeEdit: (state) => {
      state.isEdit = false;
    },
  },
});

export const {
  selectBug,
  addBug,
  getBug,
  deleteBug,
  updateBug,
  openCreate,
  closeCreate,
  openEdit,
  closeEdit,
} = bugSlice.actions;

export default bugSlice.reducer;
