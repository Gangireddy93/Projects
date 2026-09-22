import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  // GET DATA
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // DELETE DATA
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Do you want to delete this student?");

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          setData(data.filter((student) => student.id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {/* MAIN HEADING */}
      <h1 className="text-2xl font-bold text-center mt-4">This is Home</h1>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col items-center mt-5">
        {/* TITLE */}
        <h2 className="text-xl font-bold mb-4">List of Student Data</h2>

        {/* TABLE CONTAINER */}
        <div className="w-full max-w-6xl px-2">
          {/* ADD BUTTON */}
          <div className="flex justify-end mb-3">
            <Link
              to="/create"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm"
            >
              ADD
            </Link>
          </div>

          {/* RESPONSIVE TABLE */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-xs border-collapse border border-gray-400">
              {/* HEADER */}
              <thead>
                <tr className="bg-fuchsia-600 text-white">
                  <th className="border border-gray-400 px-2 py-2">ID</th>

                  <th className="border border-gray-400 px-2 py-2">RollNo</th>

                  <th className="border border-gray-400 px-2 py-2">Name</th>

                  <th className="border border-gray-400 px-2 py-2">Branch</th>

                  <th className="border border-gray-400 px-2 py-2">College</th>

                  <th className="border border-gray-400 px-2 py-2">Email</th>

                  <th className="border border-gray-400 px-2 py-2">Phone</th>

                  <th className="border border-gray-400 px-2 py-2">Image</th>

                  <th className="border border-gray-400 px-2 py-2">Action</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {data.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-100">
                    {/* ID */}
                    <td className="border border-gray-400 px-2 py-2 text-center">
                      {student.id}
                    </td>

                    {/* ROLL NO */}
                    <td className="border border-gray-400 px-2 py-2 text-center">
                      {student.Rollno}
                    </td>

                    {/* NAME */}
                    <td className="border border-gray-400 px-2 py-2">
                      {student.Name}
                    </td>

                    {/* BRANCH */}
                    <td className="border border-gray-400 px-2 py-2">
                      {student.branch}
                    </td>

                    {/* COLLEGE */}
                    <td className="border border-gray-400 px-2 py-2">
                      {student.collegeName}
                    </td>

                    {/* EMAIL */}
                    <td className="border border-gray-400 px-2 py-2">
                      {student.Email}
                    </td>

                    {/* PHONE */}
                    <td className="border border-gray-400 px-2 py-2">
                      {student.phone}
                    </td>

                    {/* IMAGE */}
                    <td className="border border-gray-400 px-2 py-2 text-center">
                      <img
                        src={student.image}
                        alt={student.Name}
                        className="w-10 h-10 object-cover rounded mx-auto"
                      />
                    </td>

                    {/* ACTION */}
                    <td className="border border-gray-400 px-2 py-2">
                      <div className="flex gap-1 justify-center">
                        {/* READ */}
                        <Link
                          to={`/read/${student.id}`}
                          className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 py-1 rounded text-xs"
                        >
                          Read
                        </Link>

                        {/* EDIT */}
                        <Link
                          to={`/update/${student.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs"
                        >
                          Edit
                        </Link>

                        {/* IMAGE */}
                        <Link
                          to={`/update/${student.id}`}
                          className="bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded text-xs"
                        >
                          Image
                        </Link>

                        {/* DELETE */}
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
