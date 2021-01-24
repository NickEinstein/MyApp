import React from 'react'
import "antd/dist/antd.css";
import { Button } from 'antd';
import './index.css';

function Practice(){
    return(
  <ul> 
  <li>BOss</li>
  <li>BOss</li>
  <li>BOss</li>
  <Button  type="primary" className = "one">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </ul>
  )  
  }
  

export default Practice
