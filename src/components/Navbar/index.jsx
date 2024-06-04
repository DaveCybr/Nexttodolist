import Link from "next/link";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white shadow-sm">
        <div className="mx-auto px-2 bg-neutral text-neutral-content">
          <div className="flex justify-between items-center">
            <div className="flex space-x-7">
              <Link href="/" className="font-bold text-2xl py-4 px-2">
                NEXTTOD
              </Link>
            </div>
            <UserActionButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
