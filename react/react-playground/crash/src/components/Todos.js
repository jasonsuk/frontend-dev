import React, { Component } from 'react';
import TodoItem from './Todoitem';

class Todos extends Component {    
    render() {
        // console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ))
    }
}

export default Todos;

// function Todos() {
//   return (
//     <div>
//       <h1>Todos</h1>
//     </div>
//   );
// }

// export default Todos;

