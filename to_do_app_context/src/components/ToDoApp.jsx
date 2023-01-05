import React, { useContext} from 'react'
import { MainContext } from '../context/ContextProvider';
import "./../App.css";

function ToDoApp() {
    const { items, setItems, newItem, setNewItem } = useContext(MainContext)
    function addItem() {

        if (!newItem) {
            alert(" you entered an item");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        };

        setItems((oldList) => [...oldList, item]);
        setNewItem("");
    }

    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return (
        <div className='div'>
            <form onSubmit={(e) => {
                e.preventDefault();
                addItem();
            }}>
                <input
                    id='input-form'
                    type="text"
                    placeholder='Add an Item...'
                    value={newItem}
                    onChange={e => { setNewItem(e.target.value) }}
                />
                <button className='addBtn' onClick={(e) => addItem()}>Add List</button>
            </form>
            <div className='container'>
                <ul>
                    {items.map(item => {
                        return (<li key={item.id}>
                            {item.value}
                            {/* {/* <button  onClick={(e) => checkItem(e)} className = 'checkItem' > check</button> * /} */}
                            < input style={{ width: "25px" }} type="checkbox" />
                            <button className='deleteItem' onClick={e => deleteItem(item.id)}>X</button>
                        </li>)
                    })}
                </ul>
            </div>
        </div >
    )
}

export default ToDoApp