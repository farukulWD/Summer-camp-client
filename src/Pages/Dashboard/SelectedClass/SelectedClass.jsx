import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Container from "../../../Components/Container";

const SelectedClass = () => {
  const { user } = useAuth();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass?email=${user?.email}`
      );
      return res.json();
    },
  });
  console.log(selectedClasses);
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
                    <button className="btn">Delete</button>
                  </td>
                  <th>
                    <button className="btn btn-ghost">Pay</button>
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
