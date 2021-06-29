const { fromJS, Map } = require("immutable");

const map = Map({
  todos: [
    {
      todo: 'Play basketball',
      isComplete: false
    },
    {
      todo: 'Go shooping',
      isComplete: true
    }
  ]
});


console.log('map', map.getIn(['todos', 0]));

// fromJS: 每一层都转化为immutable的数据结构
const fromJs = fromJS({
  todos: [
    {
      todo: 'Play basketball',
      isComplete: false
    },
    {
      todo: 'Go shooping',
      isComplete: true
    }
  ]
});

console.log('fromJS', fromJs.getIn(['todos', 0]));