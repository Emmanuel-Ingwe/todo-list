import React, { Component } from 'react';

class Todo extends Component {
    handleRemove() {
        this.props.removeTodo();
    }
    render() {
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.task}</li>
            </div>
        );
    }
}

export default Todo;