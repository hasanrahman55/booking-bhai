import Heading from "@/components/Heading";
import BookedRoomCard from "@/components/BookedRoomCard";
import getMyBookings from "../actions/getMyBooking";

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-6">
      {/* Page Heading */}
      <Heading title="My Bookings" />

      {/* Bookings Section */}
      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-lg text-gray-700">
            You have no bookings at the moment.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Explore our rooms and start booking your next stay.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          {bookings.map((booking) => (
            <BookedRoomCard key={booking.$id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingsPage;
