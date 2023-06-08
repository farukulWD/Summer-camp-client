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
                <th> Class and instructor Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {enroll.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cls.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{cls.class_name}</div>
                        <div className="text-sm opacity-50">
                          {cls.instructor}
                        </div>
                      </div>
                    </div>
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
