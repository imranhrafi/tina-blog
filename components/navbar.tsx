import { SearchInput } from "@/components/search-input";
import { PackageIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className='w-full py-4 md:py-6 flex items-center justify-between px-4 md:px-6'>
      <Link
        className='flex space-x-2 items-center font-semibold'
        href='/'
      >
        <PackageIcon className='h-6 w-6' />
      </Link>
      <div className='flex-1 ml-4 md:ml-6 justify-center items-center'>
        <nav className='hidden space-x-4 md:flex'>
          <Link className='font-medium' href='/about'>
            About
          </Link>
          <Link className='font-medium' href='posts'>
            BLog
          </Link>
        </nav>
      </div>
      <div className='ml-auto'>
        <SearchInput />
      </div>
    </nav>
  );
}
