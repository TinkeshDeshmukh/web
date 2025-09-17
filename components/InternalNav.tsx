import Link from "next/link";
interface InternalNavProps {
  name: string;
  link: string;
}
export default function InternalNav({name,link}:InternalNavProps) {
  return (
    <div className=" internalNav w-screen flex justify-end z-50 fixed top-5 right-[7%] px-5">
      <div className="flex justify-between gap-12 ">
        <Link
          href="/Hero"
          className="internalNav_Links items-center justify-center  
          border-2 border-green-300 text-white w-[6vw] h-[2.4vw] text-[1.2vw] text-center rounded-lg shadow-lg hover:bg-green-400/40  transition-all duration-300"
        >
          Home
        </Link>
                <Link
          href={link}
          className="internalNav_Links items-center justify-center 
          border-2 border-green-300 text-white w-[6vw] h-[2.4vw] text-[1.2vw] text-center rounded-lg shadow-lg hover:bg-green-400/40 transition-all duration-300"
        >
          {name}
        </Link>
      </div>
    </div>
  );
}
