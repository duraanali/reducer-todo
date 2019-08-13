import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Todo.css'


const TodoForm = props => {


    const [state, setState] = useState({ item: '' })

    const handleChanges = e => {
        setState({
            [e.target.name]: e.target.value

        });

    };

    const submitItem = e => {
        e.preventDefault();
        props.addItem(state.item);
    };


    return (

        <form onSubmit={submitItem}>
            <div className="input-group mb-3">
                <input
                    className="form-control title"
                    type="text"
                    value={props.item}
                    placeholder="Write Here..."
                    name="item"
                    onChange={handleChanges}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-success">Add</button>
                </div>
            </div>
        </form>

    );
}

export default TodoForm;