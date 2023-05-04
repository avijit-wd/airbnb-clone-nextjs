"use client";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="20"
      width="20"
      alt="Avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5cbkMfHUf6aq6lZVXwMIgRIuBP4vU6gIsmG3jL7RhTJo589X7gkIE2Qb9ZmLqpPzeQc&usqp=CAU"
    />
  );
};

export default Avatar;
