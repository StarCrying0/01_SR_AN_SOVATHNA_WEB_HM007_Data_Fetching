import Link from "next/link";
function NavBar() {
  return (
    <>
      <header className="flex p-4 justify-between px-6 items-start absolute w-full top-0 ">
        <Link href="/">
          <img
            className="ml-2"
            src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
            alt=""
          />
        </Link>
        <nav className="w-[50%]">
          <ul className="flex gap-6 items-center font-semibold justify-end text-white">
            <li className="bg-white py-2 px-4 text-black rounded-md">
              <a href="#">Home</a>
            </li>
            <li className="hover:bg-white py-2 px-4 hover:text-black hover:rounded-md">
              <a href="#">Popular</a>
            </li>
            <li className="hover:bg-white py-2 px-4 hover:text-black hover:rounded-md">
              <a href="#">Romance</a>
            </li>
            <li className="hover:bg-white py-2 px-4 hover:text-black hover:rounded-md">
              <a href="#">Anime</a>
            </li>
            <input
              type="text"
              name=""
              className="text-black p-2 px-4 rounded-md text-sm focus:outline-none focus:border-black"
              placeholder="Type to search..."
            />
          </ul>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
