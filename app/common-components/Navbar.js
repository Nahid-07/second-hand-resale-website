const Navbar = () => {
  return (
    <div className="flex justify-between p-6 h-14 shadow-md items-center">
      <header>
        <h1 className="text-2xl font-semibold">Resale.Bd</h1>
      </header>
      <nav>
        <div>
          <ul className="flex space-x-6 text-lg">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Blog</li>
            <li>Log in</li>
            <li>Log out</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
