import React from 'react'
import ReactDOM from 'react-dom';

class MyFirstComponent extends React.Component
{
    constructor() {
        super();

        this.state = {
            todoText: '',
            todos: []
        }
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" value={this.state.todoText} 
                            onChange={e => this.setState({
                                todoText: e.target.value
                            })}
                            className="form-control" />
                        </div>
                        <div className="form-group">
                            <button id="btn" 
                            onClick={() => {
                                this.setState({
                                    todos: this.state.todos.concat(this.state.todoText),
                                    todoText: ''
                                })
                            }}
                            className="btn btn-primary">
                                Add todo
                            </button>
                        </div>
                    </div>
                <div className="col-md-6">
                    <ul className="list-group">
                        {
                            this.state.todos.map(t => {
                                return  <li className="list-group-item">{t}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<MyFirstComponent /> ,document.querySelector('#app'))