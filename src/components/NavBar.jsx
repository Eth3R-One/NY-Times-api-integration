function NavBar() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-center gap-x-6">
        <button className="p-2 rounded bg-blue-400 text-white shadow-black">
          Nav bar
        </button>
        <button className="bg-white p-2 rounded">Nav bar</button>
      </div>
    </nav>
  );
}

export default NavBar;
