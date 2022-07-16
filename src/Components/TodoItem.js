import { useCallback } from 'react';
import { Card, CardActions, CardContent, Button, Box } from '@mui/material';
import './TodoItem.css'

export const TodoItem = ({task, onDelete}) => {
  const onDeleteCallback = useCallback((e) => {
    onDelete((task.id));
  }, [onDelete, task])

  return (
    <Box sx={{ minWidth: 150, margin: '10px' }}>
      <Card variant="outlined">
        <CardContent>
          <div>{task.id}</div>
          <div>{task.name}</div>
          <div>{task.assignee}</div>
          <CardActions>
            <Button
              onClick={onDeleteCallback}
              size="small"
            >Remove</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  )
}
