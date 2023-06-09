import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { loading } = useAuth();
  const { data: users, refetch } = useQuery({
    queryKey: "users",
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/users");
      return res.data;
    },
  });

  const makeAdmin = (user) => {
    axios
      .patch(`http://localhost:5000/users/admin/${user?._id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const makeInstructor = (user) => {
    const instructor = {
      name: user?.name,
      number_of_students: 0,
      number_of_classes: 0,
      ratings: 4.8,
      picture: user?.image,
      email: user?.email,
    };

    axios
      .patch(`http://localhost:5000/users/instructor/${user?._id}`, instructor)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase font-bold">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users &&
              users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="uppercase font-bold">{user?.name}</div>
                  </td>
                  <td className="uppercase font-bold">{user?.email}</td>
                  <td className="uppercase font-bold">{user?.role}</td>

                  <th>
                    <button
                      onClick={() => makeAdmin(user)}
                      disabled={user?.role == "admin"}
                      className={
                        user?.role == "admin"
                          ? "bg-[#008e48] btn btnDisabled text-white"
                          : "btn  hover:bg-[#008e48] hover:text-white"
                      }
                    >
                      Make admin
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => makeInstructor(user)}
                      disabled={
                        user?.role == "instructor" || user?.role == "admin"
                      }
                      className={
                        user?.role == "instructor"
                          ? "bg-[#008e48] btn btnDisabled text-white"
                          : "btn  hover:bg-[#008e48] hover:text-white"
                      }
                    >
                      Make instructor
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
