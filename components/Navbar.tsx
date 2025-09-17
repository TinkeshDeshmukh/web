import Link from "next/link";

export default function Navbar(){
    return(
        <div className="w-screen  ">
            <div className="flex justify-end Nav opacity-0">
                <div className="w-[18%] h-[3vw] bg-amber-50 flex items-end justify-center " >
                    <Link href="/Hero" className="text-[1.4vw] font-semibold text-center text-black z-30">Home</Link>    
                </div>
                <div className="w-[18%] h-[5vw] bg-amber-50 flex items-end justify-center  " >
                     <Link href="/projects" className="text-[1.4vw] font-semibold text-center text-black z-30">Projects</Link>
                </div>
                <div className="w-[18%] h-[7vw] bg-amber-50 flex items-end justify-center " >
                     <Link href="/about" onClick={() => console.log("click")} className="text-[1.4vw] font-semibold text-center text-black z-30">About</Link>
                </div>

            </div>
        </div>
    )
}