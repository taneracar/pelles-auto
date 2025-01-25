const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Pelle's Automotive All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
