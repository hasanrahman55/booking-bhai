import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getAllRooms from "./actions/getAllRooms";

async function Home() {
  const rooms = await getAllRooms();

  return (
    <>
      <Heading title="Available" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.$id} room={room} />)
      ) : (
        <h3>No rooms found</h3>
      )}
    </>
  );
}

export default Home;
