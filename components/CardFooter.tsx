import Image from "next/image";
import Link from "next/link";
import Linkedin from "/public/linkedin.svg";
import Twitter from "/public/twitter.svg";
const LinkedinLink = process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/gramoai";
const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || "https://www.x.com/gramoai";

const CardFooter = () => {
  return (
    <div>
      {/* Social Media */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <Link href={LinkedinLink} className="relative w-[22px] h-[22px]">
          <Image src={Linkedin} alt="Linkedin" fill />
        </Link>
        <Link href={TwitterLink} className="relative w-[22px] h-[22px]">
          <Image src={Twitter} alt="Twitter" fill />
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;
