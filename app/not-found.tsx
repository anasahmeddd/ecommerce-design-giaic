import Link from "next/link";

// app/not-found.js
export default function NotFound() {
    return (
        <div >
        <nav aria-label="Breadcrumb" className="flex mt-4 sm:ml-10 ml-20 flex-wrap gap-3 items-center self-start text-sm ">
          <Link href={'/'} className="self-stretch my-auto opacity-50">Home /</Link>
          <Link href={'/404'} className="self-stretch my-auto text-black opacity-50"><span className="text-black">404 Error</span></Link>
        </nav>
        <div className='flex flex-col justify-center gap-12 items-center min-h-[70vh]'>
          <h1 className='text-7xl font-semibold'>404 Not Found</h1>
          <p className='font-normal text-lg'>Your visited page not found. You may go to home page</p>
          <button className='bg-red-500 text-white px-5 py-3'>Back to Home Page</button>
        </div>
      </div>
    );
  }
  