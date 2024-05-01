import React from 'react';
import './todoLists.css';

// component to show the list of added todolists in separate cards

type FormDataProps = {
    tasks: {
        id: number;
        time: string;
        heading: string;
        content: string;
        type: string;
    }[]
}

type TaskItemProps = {
    id: number;
    time: string;
    heading: string;
    content: string;
    type: string;
}

type TodoListsProps = {
    todoItems: FormDataProps
}
const TodoLists = (props: TodoListsProps) => {
    const { todoItems } = props;
    console.log('asdas', todoItems)
    return (
        todoItems?.tasks?.map((item: TaskItemProps, index: number) => {
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
