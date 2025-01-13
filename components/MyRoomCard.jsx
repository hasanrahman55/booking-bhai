import Link from "next/link";
import { FaEye } from "react-icons/fa";
import DeleteRoomButton from "./DeleteRoomButton";

const MyRoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-4 flex flex-col sm:flex-row justify-between items-center hover:shadow-xl transition-shadow duration-300">
      {/* Room Info */}
      <div className="flex flex-col">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h4>
        <p className="text-sm text-gray-500">Room ID: {room.$id}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-4 mt-4 sm:mt-0">
        {/* View Button */}
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-300"
        >
          <FaEye className="inline mr-2" /> View
        </Link>

        {/* Delete Button */}
        <DeleteRoomButton roomId={room.$id} />
      </div>
    </div>
  );
};

export default MyRoomCard;
