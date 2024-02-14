import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function LeadSection() {
  return (
    <section className='w-full  bg-background'>
      <div className='container px-4 md:px-6 mb-32'>
        <div className='grid gap-6 items-center'>
          <div className='flex flex-col justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent'>
                Get upates of our latest blog!
              </h1>
              <p className='max-w-[600px]  md:text-xl  mx-auto text-foreground'>
                Join us and take control of your inbox. Fast, secure,
                and designed for modern life.
              </p>
            </div>
            <div className='w-full max-w-sm space-y-2 mx-auto'>
              <form className='flex space-x-2'>
                <Input
                  className='max-w-lg flex-1 bg-gray-200 text-white border-gray-900'
                  placeholder='Enter your email'
                  type='email'
                />
                <Button className='' type='submit'>
                  Subscribe
                </Button>
              </form>
              <p className='text-xs text-foreground'>
                Get ready to redefine your email experience.
                <Link
                  className='underline underline-offset-2 text-primary'
                  href='#'
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
