
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const markComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };
  const paginateTasks = () => {
    const startIndex = (currentPage - 1) * tasksPerPage;
    return tasks.slice(startIndex, startIndex + tasksPerPage);
  };



  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, markComplete,currentPage, setCurrentPage, paginateTasks }}>
      {children}
    </TaskContext.Provider>
    
  );
};
