import { useState } from "react";

export default function UserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-10 rounded-md shadow space-y-7"
    >
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white py-2 w-full rounded">
        Add User
      </button>
    </form>
  );
}
