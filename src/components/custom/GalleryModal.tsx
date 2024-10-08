"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import GalleryIcon from "@/app/images/Icons/GalleryIcon.svg";

interface MediaItem {
  type: "image" | "video";
  src: string | StaticImageData;
  thumbnail: string;
  description: {
    title: string;
    content: string;
  };
  alt: string;
}

interface GalleryModalProps {
  mediaItems: MediaItem[];
  ModalTitle: string;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  mediaItems,
  ModalTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(mediaItems);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : mediaItems.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < mediaItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="transition-all duration-150 px-3 bg-green-200 hover:bg-green-300"
          variant="outline"
        >
          <Image
            src={GalleryIcon as StaticImageData}
            height={20}
            width={20}
            alt="GalleryIconHere"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full font-[family-name:var(--font-geist-sans)]">
        <h1 className="tracking-tight font-bold text-2xl">{`${ModalTitle} Project Gallery`}</h1>
        <div className="flex flex-col h-full">
          <div className="relative flex-grow">
            {currentItem.type === "image" ? (
              <Image
                src={currentItem.src as StaticImageData}
                alt={currentItem.alt}
                className="w-full h-[45vh] object-contain"
              />
            ) : (
              <div className="w-full h-full">
                <video
                  src={currentItem.src as string}
                  controls
                  className="w-full h-full object-contain"
                  style={{ maxHeight: "50vh" }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col gap-1 mt-4 overflow-x-auto py-2">
            <p className="font-semibold text-xl ">{`${mediaItems[currentIndex].description.title}`}</p>
            <p className="text-sm">{`${mediaItems[currentIndex].description.content}`}</p>
          </div>
        </div>
        <p className=" flex justify-center">
          <p>{`${currentIndex + 1}/${mediaItems.length}`}</p>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
