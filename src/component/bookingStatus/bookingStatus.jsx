import React from "react";
import "./bookingStatus.scss";

const BookingStatus = ({ status, sttList, handleStatusChange }) => {
  const statusList = sttList.slice(1)
  
  let cl = "";
  switch (status) {
    case "Ongoing":
      cl = "#7A87D7";
      break;
    case "Overdue":
      cl = "#D0AA48";
      break;
    case "Cancelled":
      cl = "#D75050";
      break;
    case "Complete":
      cl = "#51BE55";
      break;

    default:
      break;
  }
  return (
    <select
      name="status"
      className="bookingStatus"
      style={{ borderColor: cl, color: cl }}
      value={status}
      onChange={(e) => handleStatusChange(e.target.value)}
    >
      {statusList.map((stt) => (
        <option key={stt} value={stt}>
          {stt}
        </option>
      ))}
    </select>
  );
};

export default BookingStatus;