import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

const initialState = {
  todos: [],
  filters: "ALL",
  search: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filters: state.filters,
        search: state.search,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filters: state.filters,
        search: state.search,
      };
    default:
      break;
  }
};

export default todoReducer;
