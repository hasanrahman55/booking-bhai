import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";

function Home() {
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
