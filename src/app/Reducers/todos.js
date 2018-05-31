import {
  ADD_TODO,
  TOGGLE_TODO
} from '../Actions'

const initState = [{
    id: 1,
    text: 'Some new task',
    completed: true
  },
  {
    id: 2,
    text: 'get some fruits',
    completed: false
  }
]

const todos = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

export default todos;