"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="50"
      width="50"
      src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
    />
  );
};

export default Logo;
