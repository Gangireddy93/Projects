import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function create() {
  const [values, setvalues] = useState({
    Rollno: "",
    Name: "",
    branch: "",
    Email: "",
    phone: "",
    collegeName: "",
  });
  const navigate = useNavigate();
  const handelsubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container mt-4 ">
        <div className="w-50 mx-auto">
          <h1> This is create Studentdata:</h1>
          <form onSubmit={handelsubmit}>
            <div>
              <label>Rollno:</label>
              <input
                type="number"
                placeholder="Enter Rollno"
                onChange={(e) =>
                  setvalues({ ...values, Rollno: e.target.value })
                }
              />
            </div>
            <div>
              <label>ID:</label>
              <input
                type="text"
                placeholder="Enter ID"
                onChange={(e) => setvalues({ ...values, id: e.target.value })}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) =>
                  setvalues({ ...values, Email: e.target.value })
                }
              />
            </div>
            <button className="bg-blue-700">Submit</button>
            <Link to="/" className="bg-gray-600">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
