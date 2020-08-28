import { createStore } from 'redux'
import reducer from '../Redux/reducers'

const Initialstate = {
  todos: [
    {
      id: 1,
      title: 'کار پیش فرض',
      content: 'این یه کاره پیش فرضه',
      completed: false
    },

  ]
}

const store = createStore(
  reducer,
  Initialstate,

)

export default store