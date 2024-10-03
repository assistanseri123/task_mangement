// src/components/TaskList.js
import React from 'react';
import { useTasks } from '../contexts/TaskContext';
import TaskItem from './TaskItem';

const TaskList = ({ setTaskToEdit }) => {
    const { tasks, paginateTasks, currentPage, setCurrentPage, } = useTasks();

    const totalPages = Math.ceil(tasks.length / 10); // assuming tasksPerPage is 10

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} setTaskToEdit={setTaskToEdit} />
            ))}

            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default TaskList;


