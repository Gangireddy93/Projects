import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function update() {
  //   const [data, setData] = useState([]);
  const [values, setvalues] = useState({
    Rollno: "",
    id: "",
    Name: "",
    branch: "",
    Email: "",
    phone: "",
    collegeName: "",
    image: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setvalues(res.data);
        // navigate("/");
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handelsubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleImage = (e) => {
    const file = e.target.files[1];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setvalues({
        ...values,
        image: imageUrl,
      });
    }
  };
  return (
    <>
      <h1> This is update:</h1>
      <div className="container mt-4 ">
        <div className="w-50 mx-auto">
          <h1> This is create Studentdata:</h1>
          <form onSubmit={handelsubmit}>
            <div>
              <div>
                <label>ID:</label>
                <input
                  type="number"
                  placeholder="Enter Rollno"
                  value={values.id}
                  onChange={(e) => setvalues({ ...values, id: e.target.value })}
                />
              </div>
              <label>Rollno:</label>
              <input
                type="number"
                placeholder="Enter Rollno"
                value={values.Rollno}
                onChange={(e) =>
                  setvalues({ ...values, Rollno: e.target.value })
                }
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                placeholder="Enter Email"
                value={values.Email}
                onChange={(e) =>
                  setvalues({ ...values, Email: e.target.value })
                }
              />
            </div>
            <div>
              <label>image:</label>
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>
            <button className="bg-blue-700">Update</button>
            <Link to="/" className="bg-gray-600">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
