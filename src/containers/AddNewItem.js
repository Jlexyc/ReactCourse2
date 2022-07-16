import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button } from '@mui/material';

import { addNewItem } from '../rdx/todoList/actions'

export const AddNewItem = () => {
  const [name, setName] = useState('')
  const [assignee, setAssignee] = useState('')

  const dispatch = useDispatch();

  const onNameChanged = useCallback((event) => {
    setName(event.target.value);
  }, [setName])

  const onAssigneeChanged = useCallback((event) => {
    setAssignee(event.target.value);
  }, [setAssignee])

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch(addNewItem({
      name,
      assignee
    }))
  }, [name, assignee, dispatch])

  return (
    <div>
      <TextField
        onChange={onNameChanged}
        value={name}
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
        variant="standard"
      />
      <br />
      <br />
      <TextField
          onChange={onAssigneeChanged}
          value={assignee}
          helperText="Please enter assignee"
          id="demo-helper-text-misaligned"
          label="Assignee"
          variant="standard"
        />
      <br />
      <br />
      <Button variant="contained" onClick={onSubmit}>Save</Button>
    </div>
  )
}


