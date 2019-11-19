import React, { useState, useEffect, useRef } from 'react'
import { Form, Input,  Button } from 'element-react'

export default () => {
  const [form, setform] = useState({name:'', pass:''}) 
  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();

  formRef.current.validate((valid) => {
    if(valid) console.log(form)
  });
  }

  const onChange = (key, v) => {
    setform({...form, [key]: v})
  }
  return (
    <div style={{width:'50%'}}>
    <Form ref={ref => formRef.current = ref} model={form} labelWidth="100">
      <Form.Item label="用户名" prop="name" required>
        <Input value={form.name} onChange={v => onChange('name',v)} autoComplete="off" />
      </Form.Item>
      <Form.Item label="密码" prop="pass" required>
        <Input type="password" value={form.pass} onChange={v => onChange('pass',v)} autoComplete="off" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>确定</Button>
      </Form.Item>
    </Form>
    </div>
  )
}