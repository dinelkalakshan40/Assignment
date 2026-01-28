import { useEffect, useState } from 'react'

import './App.css'
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { createUser, deleteUser, getUsers } from './services/userService';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  const addUser = async (data) => {
    try {
      const res = await createUser(data);
      console.log(res.data);
      setUsers((prev) => [...prev, res.data.data]);
      loadUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      loadUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
     <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        User Management System
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <UserForm onAdd={addUser} />
      </div>

      <div className="max-w-4xl mx-auto">
        <UserList users={users} onDelete={removeUser} />
      </div>
    </div>
  );
}

export default App;
