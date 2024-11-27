import React from 'react';
import { Layout } from './components/Layout';
import { TaskForm } from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Task Management</h1>
          <p className="mt-2 text-gray-600">
            Manage and track your team's tasks efficiently
          </p>
        </div>
        <TaskForm />
        <TaskList />
      </div>
    </Layout>
  );
}

export default App;