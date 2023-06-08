import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Container";
import { ImBin } from "react-icons/im";

// TODO cart system

const MyClasses = () => {
  const { user, loading } = useAuth();
  const {
    isLoading,
    refetch,
    data: myClasses = [],
  } = useQuery({
    queryKey: ["myClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/myclass?email=${"example@gmail.com"}`
      );
      return res.data;
    },
  });
  console.log(myClasses);

  return (
    <div className="w-full h-screen mt-10">
      <Container>
        <p className="text-center my-5">
          <Link className="btnPrimary" to="/dashboard/addclass">
            add Class
          </Link>
        </p>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Total Enrolled</th>
                <th>Status</th>
                <th>Action</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myClasses.map((cls) => (
                <tr key={cls._id}>
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
                    <p>{cls.instructor}</p>
                  </td>
                  <td>
                    <p>${cls.price}</p>
                  </td>
                  <td>
                    {cls.status == "pending" || cls.status == "denied" ? (
                      ""
                    ) : (
                      <p>{cls.totalEnrolled}</p>
                    )}
                  </td>
                  <td>
                    <p>{cls.status}</p>
                    {cls.status == "denied" && (
                      <p>
                        <span className="font-bold text-warning">
                          Feedback:
                        </span>{" "}
                        {cls.feedback}
                      </p>
                    )}
                  </td>

                  <td>
                    <button className="btn">
                      <ImBin></ImBin>
                    </button>
                  </td>
                  <td>
                    <Link className="btn"> Update</Link>
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

export default MyClasses;
