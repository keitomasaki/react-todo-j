const ADD = "ADD";
const DEL = "DEL";
const FIND = "FIND";

const find = (text) => {
  return {
    type: FIND,
    payload: text,
  };
};

const del = (num) => {
  return {
    type: DEL,
    payload: num,
  };
};

const add = (text) => {
  return {
    type: ADD,
    payload: text,
  };
};

const initialState = {
  data: [
    {
      message: "sample data",
    },
  ],
  fdata: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      let data = { message: action.payload };
      let newdata = state.data.slice();
      newdata.push(data);
      console.log("data", state);
      return {
        data: newdata,
        fdata: [],
      };
    case DEL:
      let newdata2 = state.data.slice();
      newdata2.splice(action.payload, 1);
      console.log("payload", action.payload);
      console.log("newdata2", newdata2);
      return {
        data: newdata2,
        fdata: [],
      };
    case FIND:
      let f = action.payload;
      let fdata = [];
      state.data.forEach((value) => {
        if (value.message.indexOf(f) >= 0) {
          fdata.push(value);
        }
      });
      console.log(fdata);
      return {
        data: state.data,
        fdata: fdata,
      };
    default:
      return state;
  }
};

export { add, del, find };
export default reducer;
