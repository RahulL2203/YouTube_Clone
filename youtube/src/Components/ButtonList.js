import React from 'react';
import Button from './Button';


//const list = ["All","Live", "News"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name ="All"/>
      <Button name ="Gaming"/>
      <Button name ="News"/>
      <Button name ="Live"/>
      <Button name ="Sports"/>
      <Button name ="Music"/>
      <Button name ="Shorts"/>
      <Button name ="Movies"/>
      <Button name ="News"/>
      <Button name ="Live"/>
      <Button name ="Sports"/>
    </div>
  )
}

export default ButtonList;