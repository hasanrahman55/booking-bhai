import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="bg-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  className="h-12 w-12"
                  src={logo}
                  alt="Booking Bhai Logo"
                  priority={true}
                />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Rooms
                  </Link>
                  {/* <!-- Logged In Only --> */}
                  <Link
                    href="/bookings"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Bookings
                  </Link>
                  <a
                    href="/room/add"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Add Room
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Right Side Menu --> */}
            <div className="ml-auto">
              <div className="ml-4 flex items-center md:ml-6">
                {/* <!-- Logged Out Only --> */}
                <Link
                  href="login"
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <i className="fa fa-sign-in"></i> Login
                </Link>
                <Link
                  href="register"
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <i className="fa fa-user"></i> Register
                </Link>
                <Link href="room/my">
                  <i className="fa fa-building"></i> My Rooms
                </Link>
                <Link
                  href="login"
                  className="mx-3 text-gray-800 hover:text-gray-600"
                >
                  <i className="fa fa-sign-out"></i> Sign Out
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Mobile menu --> */}
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Rooms
            </Link>
            {/* <!-- Logged In Only --> */}
            <Link
              href="/bookings"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Bookings
            </Link>
            <Link
              href="/room/add"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Add Room
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
