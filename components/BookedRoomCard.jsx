import React from "react";
import Link from "next/link";
import CancelBookingButton from "./CancelBookingButton";

function BookedRoomCard({ booking }) {
  const { room_id: room } = booking;

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get month
    const options = { month: "short" };
    const month = date.toLocaleString("en-US", options, { timeZone: "UTC" });

    // Get day
    const day = date.getUTCDate();

    // Format time in UTC 12-hour
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };

    const time = date.toLocaleString("en-US", timeOptions);

    // Final formatted string
    return `${month} ${day} at ${time}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      {/* Room Info */}
      <div>
        <h4 className="text-2xl font-bold text-gray-900">{room.name}</h4>
        <p className="text-sm text-gray-700 mt-2">
          <strong className="font-semibold text-gray-800">Check In:</strong>{" "}
          {formatDate(booking.check_in)}
        </p>
        <p className="text-sm text-gray-700 mt-1">
          <strong className="font-semibold text-gray-800">Check Out:</strong>{" "}
          {formatDate(booking.check_out)}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-4 mt-4 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 shadow-sm"
        >
          View Room
        </Link>
        <CancelBookingButton
          bookingId={booking.$id}
          className="mt-3 sm:mt-0 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 transition duration-200 shadow-sm"
        />
      </div>
    </div>
  );
}

export default BookedRoomCard;
