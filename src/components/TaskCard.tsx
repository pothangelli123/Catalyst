import React from 'react';
import { Calendar, Clock, User, MoreVertical } from 'lucide-react';
import { Task } from '../types/task';
import { format } from 'date-fns';
import { useTaskStore } from '../store/taskStore';

interface TaskCardProps {
  task: Task;
  onStatusChange: (status: Task['status']) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange }) => {
  const { employees } = useTaskStore();
  const assignedEmployee = employees.find((emp) => emp.name === task.assignedTo);

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  const statusOptions: Task['status'][] = ['todo', 'in-progress', 'completed'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
          <div className="relative group">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <MoreVertical size={16} />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
              <div className="py-1">
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    onClick={() => onStatusChange(status)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Move to {status.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          {assignedEmployee && (
            <img
              src={assignedEmployee.avatar}
              alt={assignedEmployee.name}
              className="w-6 h-6 rounded-full"
            />
          )}
          <span>{task.assignedTo}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{format(new Date(task.dueDate), 'MMM dd, yyyy')}</span>
        </div>
      </div>
    </div>
  );
};