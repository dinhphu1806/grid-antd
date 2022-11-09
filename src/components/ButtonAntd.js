import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

const ButtonAntd = () => {

  const [ loading, setLoading ] = useState(false)

  const handleClick = () => {
    console.log('okoko')
    setTimeout(() => {
      setLoading(!loading)
    }, 2000);
  }
  return (
    <div>
      <Button
        type='primary'
        block
        loading = {loading}
        onClick={handleClick}
      >
        Click me
      </Button>
    </div>
  )
}

export default ButtonAntd