"use client";

import pictureProfile from "@/components/image/profile-picture.png";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function Picture3d() {
  return (
    <CardContainer className="w-full flex justify-center items-center">
      <CardBody className="flex justify-center items-center">
        <CardItem translateZ="100" className="flex justify-center items-center">
          <Image
            src={pictureProfile}
            alt="picture of me"
            className=" z-10 relative rounded-full dark:hover:shadow-2xl dark:hover:shadow-lime-300/[0.5] max-sm:w-24 sm:w-32 md:w-52"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
