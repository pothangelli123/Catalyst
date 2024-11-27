import React from 'react';
import { useTaskStore } from '../store/taskStore';
import { TaskCard } from './TaskCard';
import { Task } from '../types/task';

const TaskList: React.FC = () => {
  const { tasks, updateTask } = useTaskStore();

  const tasksByStatus = {
    todo: tasks.filter((task) => task.status === 'todo'),
    'in-progress': tasks.filter((task) => task.status === 'in-progress'),
    completed: tasks.filter((task) => task.status === 'completed'),
  };

  const handleStatusChange = (taskId: string, newStatus: Task['status']) => {
    updateTask(taskId, { status: newStatus });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {(['todo', 'in-progress', 'completed'] as const).map((status) => (
        <div key={status} className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 capitalize">
            {status.replace('-', ' ')}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({tasksByStatus[status].length})
            </span>
          </h2>
          <div className="space-y-4">
            {tasksByStatus[status].map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onStatusChange={(newStatus) => handleStatusChange(task.id, newStatus)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;