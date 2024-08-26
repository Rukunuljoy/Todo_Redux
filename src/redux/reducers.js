import  {ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_TODO } from './actionTypes'

const initialState = {
  todos:[],
  filter:"All",
  search:""
}

const todoReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ADD_TODO:
      return{
        todos: [state.todos, {text: action.payload.text, completed: false}],
        filter: state.filter,
        search: state.search
      }

      case TOGGLE_TODO:
        return{
          todos: state.todos.map((todo, index)=> index === action.payload.id ? {...todo, completed: !todo.completed}: todo),
          filter: state.filter,
          search: state.search
        }

        case REMOVE_TODO:
          return {
            todos: state.todos.map((todo,index)=> index !==action.payload.id),
            filter: state.filter,
            search: state.search
          }

        case MARK_COMPLETED:
          return{
            todos: state.todos.map((todo, index)=> index === action.payload.id ? {...todo, completed: true}: todo),
            filter: state.filter,
            search:state.search
          }

        case MARK_INCOMPLETE:
          return{
            todos: state.todos.map((todo, index)=> index === action.payload.id ? {...todo, completed:false} : todo),
            filter: state.filter,
            search: state.search
          }

        case FILTER_TODO:
          return {
            todos: state.todos,
            filter: action.payload.filter,
            search: state.search
          }

        case MARK_ALL_COMPLETED:
          return{
            todos: state.todos.map((todo)=> ({...todo, completed:true})),
            filter: state.filter,
            search: state.search
          }
  
        case UPDATE_TODO:
          return{
            todos: state.todos,
            filter: state.filter,
            search: action.payload.search
          }
  
    default:
      return state;
  }
}

export default todoReducer;