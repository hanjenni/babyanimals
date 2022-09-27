
import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';


export default function AddPost(props) {
    const [state, setState] = useState({
        caption: '',
    })

    const [selectFile, setSelectedFile] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', selectFile);
        formData.append('caption', state.caption);
        props.handleAddPost(formData);
        

    }

    function handleFileInput(e){
        console.log(e.target.files, '<-e.target.files')
        setSelectedFile(e.target.files[0]);
    }

    function handleChange(e){
        setState({
            caption: e.target.value,
        })
    }

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    className='form'
                    name='caption'
                    value={state.caption}
                    onChange={handleChange}
                    required
                />
            <Form.Field>
                <Form.Input
                    type='file'
                    name='photo'
                    placeholder='add an image'
                    onChange={handleFileInput}
                />    
                </Form.Field>
                <Button type='submit' className='btn'>
                    ADD BABY ANIMAL
                </Button>
            </Form>
        </Segment>
    )
}