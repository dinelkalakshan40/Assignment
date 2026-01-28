
export default function UserList({ users, onDelete }) {
  if (!users || users.length === 0) return <p>No users found</p>;

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      {users.map((user) => {
        if (!user) return null; 
        return (
          <div
            key={user.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
