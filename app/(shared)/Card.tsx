
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;

  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
 
  isSmallCard = false,
  isLongForm = false,
}: Props) => {


  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        href={``}
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
         { /*<Image
            fill
            alt="tech"
        
            src={"/public/assets/ad-1.jpg"}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vw,
                  33vw"
            style={{ objectFit: "cover" }}
  />*/}
        </div>
      </Link>
      <div className="basis-full">
        <Link href={``}>
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
           title
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">author</h5>
          <h6 className="text-wh-300 text-xs">formattedDate</h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          snippet
        </p>
      </div>
    </div>
  );
};

export default Card;