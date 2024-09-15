import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

import EcellOne from "@/app/images/cocurricularImages/EcellOne.jpg";
import EcellTwo from "@/app/images/cocurricularImages/EcellTwo.jpg";
import EcellThree from "@/app/images/cocurricularImages/EcellThree.jpg";
import EcellFour from "@/app/images/cocurricularImages/EcellFour.jpg";
import EcellFive from "@/app/images/cocurricularImages/EcellFive.jpg";
import EcellSix from "@/app/images/cocurricularImages/EcellSix.jpg";
import Image, { StaticImageData } from "next/image";

const images = [EcellOne, EcellTwo, EcellThree, EcellFour, EcellFive, EcellSix];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const imageFirstRow = images.slice(0, images.length / 2);
const imageSecondRow = images.slice(0, images.length / 2);

const ImageCard = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return (
    <div className="relative w-64 h-40 mx-2 overflow-hidden rounded-lg">
      <Image
        src={src as StaticImageData}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
  );
};
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeTestimonialBento() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export function MarqueeCocurricularBento() {
  return (
    <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee className="[--duration:40s]" vertical>
        {imageFirstRow.map((img, index) => (
          <ImageCard key={index} src={img} alt={`Ecell Image ${index + 1}`} />
        ))}
      </Marquee>
      <Marquee className="[--duration:40s]" vertical reverse>
        {imageSecondRow.map((img, index) => (
          <ImageCard key={index} src={img} alt={`Ecell Image ${index + 1}`} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
