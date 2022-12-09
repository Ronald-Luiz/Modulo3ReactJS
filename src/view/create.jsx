import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import css from './css/create.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  let history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const sendDataToAPI = () => {
    axios.post(`https://js0n-server.vercel.app/GPU`, {
      firstName,
      lastName
    }).then(() => {
      history.push('/read')
    })
  }
  return (
    <div>
      <Form>
        <Form.Field className='nome'>
          <label>First Name</label>
          <input name="fname" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
        </Form.Field>
        <Form.Field className='sobrenome'>
          <label>Last Name</label>
          <input 
          name="lname" 
          placeholder='Last Name' 
          onChange={(e) => setLastName(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}