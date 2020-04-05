import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'


const Login = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async data => {
    console.log('data',data)
    reset()
  }

  const LoginForm = (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control type="text" name="username"
      placeholder="Username" ref={register} />
      <Form.Control type="password" name="password"
      placeholder="Password" ref={register} />
      <Button type="submit" className="Form">Log In</Button>
    </Form>
  )
  
  const LogoutButton = (
    <Button className="Form">Log Out</Button>
  )

  return LoginForm
}

export default Login