import React from 'react';
import './todoLists.css';

// component to show the list of added todolists in separate cards
const TodoLists = (props) => {
    const { todoItems } = props;
    console.log('asdas', todoItems)
    return (
        todoItems?.tasks?.map((item, index) => {
            return (
                <div className='todolistContainer todoTasksList col-md-3' key={item.id}>
                    <p className='taskIndex'> <span className='taskHeading'>Task Heading:</span> {item.heading}
                    </p>
                    <p className='taskIndex' > <span className='taskHeading'>Task Execution Time:</span> {item.time} </p>
                    <p className='taskIndex' > <span className='taskHeading'>Task Summary:</span> {item.content} </p>
                    <p className='taskIndex' > <span className='taskHeading'>Task Type:
                    </span> {item.type} </p>
                </div>
            )
        }))
}

export default TodoLists;
