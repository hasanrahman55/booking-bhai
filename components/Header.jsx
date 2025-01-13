"use client";
import Link from "next/link";
import destroySession from "@/app/actions/destroySession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  async function handleLogout() {
    const { error, success } = await destroySession();
    console.log("Logged out");
    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      toast.error(error);
    }
  }

  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/">
                <h1 className="text-2xl font-bold text-white">Booking Bhai</h1>
              </Link>
              <div className="hidden md:flex">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* Logged In Only */}
                  {isAuthenticated && (
                    <>
                      <Link
                        href="/bookings"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-600"
                      >
                        Bookings
                      </Link>
                      <Link
                        href="/rooms/add"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-600"
                      >
                        Add Room
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side Menu */}
            <div className="ml-auto">
              <div className="flex items-center space-x-4">
                {/* Logged Out Only */}
                {!isAuthenticated && (
                  <>
                    <Link
                      href="/login"
                      className="text-white hover:text-gray-200"
                    >
                      <i className="fa fa-sign-in"></i> Login
                    </Link>
                    <Link
                      href="/register"
                      className="text-white hover:text-gray-200"
                    >
                      <i className="fa fa-user"></i> Register
                    </Link>
                  </>
                )}

                {/* Logged In Only */}
                {isAuthenticated && (
                  <>
                    <Link
                      href="/rooms/my"
                      className="text-white hover:text-gray-200"
                    >
                      <i className="fa fa-building"></i> My Rooms
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-white hover:text-gray-200"
                    >
                      <i className="fa fa-sign-out"></i> Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden bg-blue-600">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
            >
              Rooms
            </Link>
            {/* Logged In Only */}
            {isAuthenticated && (
              <>
                <Link
                  href="/bookings"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
                >
                  Bookings
                </Link>
                <Link
                  href="/rooms/add"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
                >
                  Add Room
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
