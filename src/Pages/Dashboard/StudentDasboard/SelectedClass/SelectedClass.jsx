import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import Container from "../../../../Components/Container";
import useSecure from "../../../../Hooks/useSecure";

const SelectedClass = () => {
  const [axiosSecure] = useSecure();
  const { user } = useAuth();

  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClass?email=${user?.email}`);
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
        axiosSecure.delete(`/selectedDelete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
          refetch();
        });
      }
    });
  };

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
                <th>Action</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {selectedClasses.map((cls, index) => (
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
                  <td>
                    <button
                      onClick={() => handleDelete(cls._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </td>
                  <th>
                    <Link to={`/dashboard/payment/${cls._id}`}>
                      <button className="btn btn-ghost">Pay</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default SelectedClass;
