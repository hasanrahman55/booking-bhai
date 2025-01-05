import React from "react";
import getMyRooms from "@/app/actions/getMyRooms";
import Heading from "@/components/Heading";

async function MyRooms() {
  const rooms = await getMyRooms();
  return (
    <>
      <Heading title="My Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <h1>{room.name}</h1>)
      ) : (
        <h3>No rooms found</h3>
      )}
    </>
  );
}

export default MyRooms;
