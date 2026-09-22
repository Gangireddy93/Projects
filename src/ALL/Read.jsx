import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function read() {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setData(res.data)
  })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <h1> This is read:</h1>
      <div className="container mt-5">
        <div className="card shadow p-4 w-50 mx-auto">
          <h2 className="text-primary mb-4">User Details</h2>

          <p>
            <b>ID:</b> {data.id}
          </p>

          <p>
            <b>Rollno:</b> {data.Rollno}
          </p>

          <p>
            <b>Name:</b> {data.Name}
          </p>

          <p>
            <b>Email:</b> {data.Email}
          </p>

          <p>
            <b>Phone:</b> {data.phone}
          </p>
          <Link to={`/update/${id}`} className="bg-gray-500">
            Edit
          </Link>

          <Link to="/">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
