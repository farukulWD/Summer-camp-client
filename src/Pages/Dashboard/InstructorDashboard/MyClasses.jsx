import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Container";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import useSecure from "../../../Hooks/useSecure";

const MyClasses = () => {
  const [axiosSecure] = useSecure();
  const { user, loading } = useAuth();
  const { refetch, data: myClasses = [] } = useQuery({
    queryKey: ["myClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myclass?email=${user?.email}`);
      return res.data;
    },
  });

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
        axiosSecure
          .delete(`/myclass/${id}?email=${user?.email}`)
          .then((res) => {
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
                <th>Available seats</th>
                <th>Status</th>
                <th>Feedback</th>
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
                    <p>{cls.available_seats}</p>
                  </td>
                  <td>
                    <p>{cls.status}</p>
                  </td>
                  <td>
                    <p>{cls.feedback}</p>
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
                    <Link to={`/dashboard/update/${cls?._id}`} className="btn">
                      {" "}
                      Update
                    </Link>
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
