import React, { type FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import CommonDropdown from '../../common/commonDropdown';
import { time, type } from '../data';
import { useMutation } from '@apollo/client';
import mutation from '../mutations/addTask';
import query from '../query/getTasks';
import './addNewItem.css';

type AddNewItemProps = {
    show: boolean;
    onSubmit: () => void;
    onHide: () => void;
};

type FormDataProps = {
    time: string;
    heading: string;
    content: string;
    type: string;
}

const AddNewItem: FC<AddNewItemProps> = (props) => {
    const [formData, setFormData] = useState<FormDataProps>({
        time: '',
        heading: '',
        content: '',
        type: '',
    });
    const [showError, setShowError] = useState(false);

    // onchange handler of all the dropdown fields and it creats an todolist object
    const handleChange = (e: React.FormEvent<HTMLSelectElement>, key: string) => {
        e.preventDefault();
        let obj = { ...formData, [key]: (e.target as HTMLInputElement).value };
        setFormData(obj)
    };

    const handleChangeFormControlEle = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        e.preventDefault();
        let obj = { ...formData, [key]: e.target.value };
        setFormData(obj)
    };

    const [updateTask] = useMutation(mutation, {
        variables: {
            time: formData.time,
            heading: formData.heading,
            content: formData.content,
            type: formData.type,
        },
        refetchQueries: [{ query }]
    })

    //onsubmit handler and it trigger the callback function
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.keys(formData).length === 4) {
            props.onSubmit()
            updateTask();
            setShowError(false)
        } else {
            setShowError(true)
        }
    };

    const handleClose = () => {
        props.onHide();
        setShowError(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Todo List
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        {showError && <p className='errorTxt'> All Fields are required</p>}
                        <CommonDropdown
                            label='time'
                            options={time}
                            options_config={{
                                firstOption: 'Select the planned time'
                            }}
                            events={{
                                handleChange
                            }}
                            hint='Approximately select the time you have planned to start the activity' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Heading</Form.Label>
                        <Form.Control data-testid='headingField' type="text" placeholder="Enter the task heading" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeFormControlEle(e, 'heading')} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control data-testid='contentField' as="textarea" rows={5} placeholder="Enter the task content" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeFormControlEle(e, 'content')} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <CommonDropdown
                            label='type'
                            options={type}
                            options_config={{
                                firstOption: 'Select the task type'
                            }}
                            events={{
                                handleChange
                            }}
                            hint="Select the type of the task you' ve planned to perform"
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        className='submitButton'
                        data-testid='submitBtn'
                        onClick={handleSubmit}
                        type="button"
                    >
                        Submit
                    </Button>
                    <Button
                        variant="secondary"
                        data-testid='cancelBtn'
                        onClick={handleClose}
                        type="button"
                    >
                        Cancel
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewItem;
