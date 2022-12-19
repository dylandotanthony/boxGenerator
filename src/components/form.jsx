import React, { useState } from  'react';
import { Form, Col, Row }  from 'react-bootstrap';

const ColorForm = (props) => {

    const {boxColorArray, setBoxColorArray} = props;
    const [color, setcolor] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setBoxColorArray( [ ...boxColorArray, color]);
        console.log(color)
    }
    const onChangeHandler = (e) => {
        setcolor(e.target.value)
    }
    return( 
        <Form className="col-md-5 mx-auto m-5" onSubmit={ onSubmitHandler }>
            <Form.Group as={Row} className="mb-3">
                <Form.Label  column sm="4"> 
                Color 
                </Form.Label>
                <Col sm="8">
                    <Form.Control  
                    type="text" 
                    name="color" 
                    id="color"
                    value={color.color}
                    onChange={ onChangeHandler }
                    />
                </Col>
            </Form.Group>
            <button type="submit"> Add </button>
        </Form>
    );
}

export default ColorForm;