import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [showModal, setShowModal] = useState(false);
  const [classId, setClassId] = useState(null);
  const { data: allClass, refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/allClass");
      return res.data;
    },
  });

  const handleSendFeedback = (id) => {
    setClassId(id);
    setShowModal(true);
  };

  const blurStyle = showModal
    ? { backdropFilter: "blur(8px)", backgroundColor: "rgba(0, 0, 0, 0.6)" }
    : {};

  const makeApproved = (id) => {
    axios.patch(`http://localhost:5000/allClass/approved/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "This is Class is approved",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const showFeedbackSuccess = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Feedback has been send",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const makeDeny = (id) => {
    axios.patch(`http://localhost:5000/allClass/denied/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "This is Class is Denied",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  return (
    <div
      className="w-full  h-screen mt-10  transition-all duration-500"
      style={blurStyle}
    >
      <Container>
        <p className="text-center my-5 textPrimary">All Classes Here</p>

        <div className="fixed z-50 top-[20%] left-[35%]">
          {showModal && (
            <FeedbackModal
              id={classId}
              showFeedbackSuccess={showFeedbackSuccess}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>

        <div
          className={
            showModal ? "hidden" : "max-h-[calc(100vh-100px)]  overflow-x-auto"
          }
        >
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Instructor email</th>
                <th>Price</th>
                <th>Total Enrolled</th>
                <th>Status</th>
                <th>Approved</th>
                <th> Deny</th>
                <th>Send Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allClass &&
                allClass.map((cls) => (
                  <>
                    <tr key={cls?._id}>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={cls?.picture}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>{cls?.class_name}</p>
                      </td>
                      <td>
                        <p>{cls?.instructor}</p>
                      </td>
                      <td>
                        <p>{cls?.instructor_email}</p>
                      </td>
                      <td>
                        <p>${cls?.price}</p>
                      </td>
                      <td>
                        {cls?.status == "pending" || cls?.status == "denied" ? (
                          <p>OOPS Till now {cls?.status} </p>
                        ) : (
                          <p>{cls?.totalEnrolled}</p>
                        )}
                      </td>
                      <td>
                        <p>{cls?.status}</p>
                      </td>

                      <td>
                        <button
                          onClick={() => makeApproved(cls?._id)}
                          disabled={
                            cls?.status === "approved" ||
                            cls?.status === "denied"
                          }
                          className="btn"
                        >
                          Approved
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => makeDeny(cls?._id)}
                          disabled={
                            cls?.status === "approved" ||
                            cls?.status === "denied"
                          }
                          className="btn"
                        >
                          Deny
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleSendFeedback(cls?._id)}
                          className="btn"
                        >
                          Send Feedback
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ManageClasses;
