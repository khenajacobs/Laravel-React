import React from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ReactTestComponentProps {
  todos: Todo[];
}

export const ReactTestComponent: React.FC<ReactTestComponentProps> = ({ todos }) => {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold mb-2">Todo List</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td className="py-2 px-4 border-b">{todo.id}</td>
              <td className="py-2 px-4 border-b">{todo.title}</td>
              <td className="py-2 px-4 border-b">{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};