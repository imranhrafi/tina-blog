import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchInput() {
  return (
    <div className='relative flex w-full max-w-sm items-center rounded-lg border border-gray-300'>
      <Input
        className='w-full h-10 rounded-lg'
        placeholder='Search'
        type='search'
      />
      <SearchIcon className='h-4 w-4 ml-2.5 mr-2.5 cursor-pointer' />
    </div>
  );
}
