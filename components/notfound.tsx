import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh] space-y-4'>
      <div className='text-center space-y-2'>
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
          404 Error
        </h1>
        <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
          The page you were looking for could not be found.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <Link href='#' passHref>
          <a className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300'>
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
}
