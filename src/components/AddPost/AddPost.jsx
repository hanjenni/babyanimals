import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

export default function AddPost() {
    const [state, setState] = useState({
        caption: '',
    })

    const [selectFile, setSelectedFile] = useState('');

    

    return (
        <Segment>
            <Form>
                <Form.Input
                    className='form'
                    name='caption'
                    value=''
                    onChange=''
                    required
                />
            <Form.Field>
                <Form.Input
                    type='file'
                    name='photo'
                    onChange=''
                />    
                </Form.Field>
                <Button type='submit' className='btn'>
                    ADD BABY ANIMAL
                </Button>
            </Form>
        </Segment>
    )
}