import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Container from "../../../../Components/Container";

const MyEnrolled = () => {
  const { user } = useAuth();
  const [enroll, setEnrol] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myenrolled?email=${user?.email}`)
      .then((res) => {
        setEnrol(res.data);
      });
  }, []);
  return (
    <div className="w-full">
      <Container>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {enroll.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{cls.class_name}</p>
                  </td>
                  <td>
                    <p className="text-sm opacity-50">{cls.instructor}</p>
                  </td>
                  <td>
                    <p>${cls.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MyEnrolled;
