import React, { Fragment, useState, Suspense } from 'react';
import { Button } from 'react-bootstrap';
import query from '../query/getTasks';
import { useQuery } from '@apollo/client';
import './TodoListsDashboard.css';

const AddNewItem = React.lazy(() => import('../addNewItem'));
const TodoLists = React.lazy(() => import('../TodoLists'));

const TodoListsDashboard = () => {
    const [showModal, setShowModal] = useState(false);

    const { loading, data, error } = useQuery(query);

    if (loading) return null;
    if (error) return <div> Something wrong...</div>

    const handleSelection = () => {
        setShowModal(!showModal);
    };

    const handleSubmit = () => {
        setShowModal(!showModal);
    }

    return (
        <Suspense>
            <Fragment>
                <div className='container'>
                    <h1 className='header'> Todo Items</h1><br />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='todolistContainer'>
                            <Button data-testid='addTodoBtn' className='todoCardBtn' onClick={handleSelection} >
                                Add Todo
                            </Button>
                        </div>
                    </div>
                </div>
                <br />
                {data?.tasks?.length > 0 &&
                    <div className='container'>
                        <div className='row'>
                            <TodoLists todoItems={data} />
                        </div>
                    </div>
                }
                {showModal &&
                    <AddNewItem
                        show={showModal}
                        onHide={handleSelection}
                        onSubmit={handleSubmit}
                    />}
            </Fragment>
        </Suspense>
    )
};

export default TodoListsDashboard;
