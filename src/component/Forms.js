import React from 'react'
import { Form } from 'react-bootstrap'
import InputField from './InputField'
import {CONSTANT} from '../constant'
const Forms = ({onChange,value}) => {
    
  return (
    <Form>
        {CONSTANT.USER_INPUT_VALUE.map((item,i)=>(
            <InputField key={i} type={item.type} onChange={onChange} value={value[item.name]} name={item.name}/>
        ))}  
    </Form>
  )
}
export default Forms;