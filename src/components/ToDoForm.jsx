import { useState } from 'react'
import styled from 'styled-components'
const Form = styled.section`
    & input {
      padding: 14px 32px 14px 16px;
      border-radius: 4px 0 0 4px;
      border: 2px solid #5d0cff;
      outline: none;
      background: transparent;
    }
    & button {
      padding: 16px 7px;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      outline: none;
      background: linear-gradient(
        90deg,
        rgba(93, 12, 255, 1) 0%,
        rgba(155, 0, 250, 1) 100%
      );
      color: #fff;
      text-transform: capitalize;
      box-sizing: border-box;
    }
    
    `
function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
     
        <form onSubmit={handleSubmit}>
          <Form>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение..."
            />        
            <button>Сохранить</button></Form>
        </form>
    )
}

export default ToDoForm