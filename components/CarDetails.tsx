import { CarProps } from "@/types";
import { Fragment } from "react";
import Image from "next/image";
import { Dialog,Transition } from "@headlessui/react";
interface CarDetailsProps{
    isOpen:boolean;
    closeModel:()=>void;
    car:CarProps;
}
const CarDetails = ({isOpen,closeModel,car}:CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>

      </Transition>
    </>
  )
}

export default CarDetails
