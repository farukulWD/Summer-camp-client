import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Container";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";

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
        `http://localhost:5000/myclass?email=${user?.email}`
      );
      return res.data;
    },
  });
  console.log(myClasses);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/myclass/${id}?email=${user?.email}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };

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
                      <p>OOPS Till now {cls.status} </p>
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
                    <button
                      onClick={() => handleDelete(cls?._id)}
                      className="btn"
                    >
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
