"use client";

import { useState } from "react";

import ButtonNavigation from "./button-navigation";
import Explorer from "./explorer";

import { Files, Search, Github } from "lucide-react";
import { Options } from "@/enums/options-navigation";

export default function NavigationBar() {
  const [selectedButton, setSelectedButton] = useState(Options.NONE);

  const handleClickButtonNavigation = (option: Options) => {
    if (option === selectedButton) {
      setSelectedButton(Options.NONE);
      return;
    }
    setSelectedButton(option);
  };

  const renderSideMenu = () => {
    if (selectedButton === Options.EXPLORER) {
      return <Explorer />;
    }
    return;
  };

  return (
    <aside className="flex min-h-screen border border-l-0 border-gray-950">
      <div className="w-16">
        <ButtonNavigation
          type={Options.EXPLORER}
          Icon={Files}
          handleClick={handleClickButtonNavigation}
          isSelectedButton={selectedButton === Options.EXPLORER}
        />
        <ButtonNavigation
          type={Options.SEARCH}
          Icon={Search}
          handleClick={handleClickButtonNavigation}
          isSelectedButton={selectedButton === Options.SEARCH}
        />
        <ButtonNavigation
          type={Options.GITHUB}
          Icon={Github}
          handleClick={handleClickButtonNavigation}
          isSelectedButton={selectedButton === Options.GITHUB}
        />
      </div>
      {selectedButton !== Options.NONE && (
        <div className="min-w-[15vw] max-w-[70vw] pt-3">
          <header className="pl-4 text-xs uppercase leading-tight text-gray-600">
            {selectedButton}
          </header>
          {renderSideMenu()}
        </div>
      )}
    </aside>
  );
}
