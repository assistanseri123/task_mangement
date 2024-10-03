// src/components/TaskForm.js
import React, { useState } from 'react';
import { useTasks } from '../contexts/TaskContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { taskSchema } from '../validationSchemas';



const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const { addTask, updateTask } = useTasks();
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [category, setCategory] = useState(taskToEdit ? taskToEdit.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      category,
      completed: false,
    };const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
        const handleSubmit = (values) => {
          // Handle task creation or update logic here
          console.log(values);
          setTaskToEdit(null); // Reset after submission
        };
      

    if (taskToEdit) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTitle('');
    setCategory('');
    setTaskToEdit(null);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>

    
  );};
  <Formik
      initialValues={{
        title: taskToEdit ? taskToEdit.title : '',
        description: taskToEdit ? taskToEdit.description : '',
      }}
      validationSchema={taskSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Title:</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label>Description:</label>
            <Field as="textarea" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <button type="submit">Submit Task</button>
        </Form>
      )}
    </Formik>
}
export default TaskForm;
