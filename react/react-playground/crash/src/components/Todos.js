import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types'

class Todos extends Component {    

    render() {
        // console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} 
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}    
            />
        ))
    }
}

// Props Types - good practice to do
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,

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

