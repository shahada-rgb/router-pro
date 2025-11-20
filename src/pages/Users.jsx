import { Link } from "react-router-dom";

const usersList = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

function Users() {
  return (
    <div>
      <h1>Users List</h1>
      <ul className="border text-center mt-5">
        {usersList .map((u) => (
          <li key={u.id} className="border  hover:bg-gray-200 transition">
            <Link to={`/users/${u.id}`} className="   font-semibold hover:underline text-blue-400 ">{u.name}</Link> - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
