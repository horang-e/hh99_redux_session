// aciton type
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// action creator (action creator는 dispatch()의 인자로 들어갈 구성요소 입니다.)
export const addTodo = (payload) => {
  // payload : 새로운 Todo 데이터
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  // payload : 삭제하고자 하는 Todo의 아이디
  return {
    type: DELETE_TODO,
    payload,
  };
};

// initial state (todos 모듈 state의 구조이자, 초기 값 입니다.)
const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ],
};

// reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
