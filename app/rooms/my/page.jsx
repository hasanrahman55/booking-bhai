import React from "react";
import getMyRooms from "@/app/actions/getMyRooms";
import Heading from "@/components/Heading";
import MyRoomCard from "@/components/MyRoomCard";

async function MyRooms() {
  const rooms = await getMyRooms();
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Page Heading */}
        <Heading title="My Rooms" />

        {/* Rooms Section */}
        <div className="mt-6">
          {rooms.length > 0 ? (
            <div className="grid grid-cols-2 gap-6">
              {rooms.map((room) => (
                <MyRoomCard key={room.$id} room={room} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-10">
              <h3 className="text-lg font-semibold text-gray-800">
                No rooms found
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Try adding a new room to see it here.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyRooms;
