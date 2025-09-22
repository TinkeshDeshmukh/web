import { Github, Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Connect() {
  return (
    <div className="connect flex gap-4 justify-between  w-[80%] md:w-[25%]">
      {/* GitHub */}
      <Link href="https://github.com/TinkeshDeshmukh" target="_blank">
        <Github className="icon opacity-0 size-8 drop-shadow-xl hover:drop-shadow-[0_0_5px_#facc15] transition duration-300" />
      </Link>

      {/* LinkedIn */}
      <Link href="https://www.linkedin.com/in/tinkesh-deshmukh-87a704259/" target="_blank">
        <Linkedin className="icon opacity-0 size-8 drop-shadow-md hover:drop-shadow-[0_0_5px_#87ceeb] transition duration-300" />
      </Link>

      {/* Mail */}
      <Link href="mailto:anuragdeshmukh108@gmail.com">
        <MailIcon className="icon opacity-0 size-8 drop-shadow-md hover:drop-shadow-[0_0_5px_#EA4335] transition duration-300" />
      </Link>
    </div>
  );
}
