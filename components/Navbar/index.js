import Link from "next/link";

const Navbar = () => {
  // render <UI>
  return (
    <div className="w-full bg-indigo-700 shadow-md">
      <div className="flex justify-between w-9/12 m-auto py-3 text-white">
        <Link href="/" passHref>
          <a className="font-bold"> My blog</a>
        </Link>
        <div className="grid grid-cols-2 gap-6">
          <Link href="/all-articles" passHref>
            <a className="hover:underline"> All articles</a>
          </Link>

          <Link href="/contacts" passHref>
            <a className="hover:underline"> All contacts</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
