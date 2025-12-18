import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import API from '../services/api';

const Tasks = ({ onClose }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const { data } = await API.get('/tasks');
      setTasks(data);
    } catch (err) {
      console.error('Error loading tasks');
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    
    try {
      await API.post('/tasks', { text: newTask });
      setNewTask('');
      loadTasks();
    } catch (err) {
      alert('Error adding task');
    }
  };
 
  const toggleTask = async (id) => {
    try {
      await API.patch(`/tasks/${id}`);
      loadTasks();
    } catch (err) {
      alert('Error updating task');
    }
  };

  return (
    <div className="side-panel">
      <div className="panel-header">
        <h3 className="panel-title">Tasks</h3>
        <button onClick={onClose} className="icon-btn" style={{ color: '#374151' }}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        {tasks.map(task => (
          <div key={task._id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task._id)}
              className="task-checkbox"
            />
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task..."
        className="panel-input"
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
      />
      <button onClick={addTask} className="btn-add-task">
        Add Task
      </button>
    </div>
  );
};

export default Tasks;