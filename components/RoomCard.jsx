import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

function RoomCard({ room }) {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BUCKET;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : "/images/no-image.jpg";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-6 flex flex-col items-start">
      <Image
        width={400}
        height={250}
        src={imageSrc}
        alt={room.name}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <div className="text-start space-y-3">
        <h4 className="text-xl font-bold text-gray-800">{room.name}</h4>
        <p className="text-sm text-gray-600 flex items-center gap-3">
          <MdOutlineLocationOn />
          {room.address}
        </p>
        <p className="text-sm text-gray-600 flex items-center gap-3">
          <IoTimeOutline />
          {room.availability}
        </p>
      </div>
      <div className="flex justify-between items-center mt-6 w-full">
        <Link
          href={`/rooms/${room.$id}`}
          className="flex items-center gap-3 bg-[#0d0407] text-white px-6 py-3 rounded-lg text-center text-sm font-medium hover:bg-[#0d0407]/80 transition duration-200"
        >
          View Room
          <BsArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-sm text-gray-600">${room.price_per_hour}/hour</p>
      </div>
    </div>
  );
}

export default RoomCard;
