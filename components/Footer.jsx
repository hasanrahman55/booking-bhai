const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand Name */}
          <div className="text-lg font-bold">Booking Bhai</div>

          {/* Navigation Links */}
          <nav className="space-x-4">
            <a
              href="#"
              className="text-sm hover:text-gray-300 transition duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-300 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-300 transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-300">
          &copy; 2024 Booking Bhai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
