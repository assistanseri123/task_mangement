import React from 'react';
import { useTasks } from '../contexts/TaskContext';

const TaskItem = ({ task, setTaskToEdit }) => {
  const { deleteTask, markComplete } = useTasks();

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.title}</h3>
      <p>{task.category}</p>
      <button onClick={() => setTaskToEdit(task)}>Edit</button>
      <button onClick={() => markComplete(task.id)}>Complete</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;