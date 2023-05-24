import { useState } from "react";

import { ChevronRight } from "lucide-react";

import NavigationFiles from "../explorer/navigation-files";

export default function Explorer() {
  const [isOpen, setIsOpen] = useState(false);

  const classNameOpenArrow = isOpen
    ? "animation: rotate-45 0.5s linear; rotate-90"
    : "";

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-w-[10vw] max-w-[70vw] pt-1">
      <button
        className="mt-4 flex h-6 w-full items-center border-0 bg-transparent"
        onClick={handleClickOpen}
      >
        <ChevronRight
          size={16}
          className={`ease delay=150 text-gray-300 transition ${classNameOpenArrow}`}
        />
        <h2 className="text-center text-xs font-bold uppercase leading-tight text-gray-100">
          MY-PORTFOLIO
        </h2>
      </button>

      <NavigationFiles isOpen={isOpen} />
    </div>
  );
}
