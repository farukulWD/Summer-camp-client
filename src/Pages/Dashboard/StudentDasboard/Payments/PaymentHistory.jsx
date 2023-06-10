import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Container from "../../../../Components/Container";
import moment from "moment/moment";
import useSecure from "../../../../Hooks/useSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useSecure();
  const { user } = useAuth();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/myPaymentHistory?email=${user?.email}`).then((res) => {
      setHistory(res.data);
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
                <th> Transaction Id</th>
                <th> Class Name</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {history.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{index + 1}</th>
                  <td>
                    <p>{cls.transactionId}</p>
                  </td>
                  <td>
                    <p>{cls.class_name}</p>
                  </td>
                  <td>
                    <p>${cls.price}</p>
                  </td>
                  <td>
                    <p>{moment(cls.date).format("MMMM Do YYYY, h:mm:ss a")}</p>
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

export default PaymentHistory;
