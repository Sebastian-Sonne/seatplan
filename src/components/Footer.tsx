
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-5">
      <div className="container mx-auto px-4">
        <p className="flex justify-center items-center">
          Empowering educators with easy-to-use tools for classroom management.
        </p>
        <div className="mt-4 text-center">
          <p>&copy; {new Date().getFullYear()} <a href="https://github.com/sebastian-sonne">Seatplan.xyz</a>. All rights reserved.</p>
          {/*
          <div className="mt-2">
            <a href="#" className="hover:underline text-gray-400">Privacy Policy</a> |
            <a href="#" className="hover:underline text-gray-400">Terms of Service</a>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
