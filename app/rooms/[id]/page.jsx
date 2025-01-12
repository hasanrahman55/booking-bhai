import getSignleRooms from "@/app/actions/getSingleRoom";
import BookingForm from "@/components/BookingForm";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

async function RoomPage({ params }) {
  const { id } = await params;

  const room = await getSignleRooms(id);

  if (!room) {
    return <Heading title="Room Not Founds" />;
  }

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BUCKET;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : "/images/no-image.jpg";

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Heading title={room?.name} />

          <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-gray-800 mb-6 transition duration-200"
            >
              <i className="fa fa-chevron-left"></i>
              <span className="ml-2 font-medium">Back to Rooms</span>
            </Link>

            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {/* Room Image */}
              <Image
                width={400}
                height={300}
                src={imageSrc}
                alt={room.name}
                className="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-sm"
              />

              {/* Room Details */}
              <div className="mt-6 sm:mt-0 sm:flex-1">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {room.description}
                </p>

                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-900 w-24">
                      Size:
                    </span>
                    {room.sqft} sq ft
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-900 w-24">
                      Availability:
                    </span>
                    {room.availability}
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-900 w-24">
                      Price:
                    </span>
                    ${room.price_per_hour}/hour
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold text-gray-900 w-24">
                      Address:
                    </span>
                    {room.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Book This Room
            </h3>
            <BookingForm room={room} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomPage;
