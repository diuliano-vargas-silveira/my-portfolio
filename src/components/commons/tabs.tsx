"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { usePagesHook } from "@/hooks/pages";
import { usePages } from "@/providers/pages-provider";

import { RoutesInterface } from "@/constants/routes";
import { X } from "lucide-react";

import reactIcon from "../../assets/react.icon.svg";
import { MouseEvent } from "react";

export default function Tabs() {
  const [pages] = usePages();

  const { removePage } = usePagesHook();
  const router = useRouter();
  const pathname = usePathname();

  function handleClicktab(href: string, isCurrentPage: boolean) {
    if (!isCurrentPage) {
      router.push(href);
    }
  }

  function renderTabs() {
    return pages.map((page: RoutesInterface, index: number) => {
      const { href, name } = page;
      const isCurrentPage = pathname === href;

      const selectedTabCloseButton = isCurrentPage
        ? "text-gray-300"
        : "text-transparent";
      const selectedTabButton = isCurrentPage
        ? "pb-1.5  border-b-gray-500 border-b-2"
        : "";

      return (
        <div
          className={`group flex h-full cursor-pointer items-center justify-center gap-2 border-r-[1px] border-r-gray-950 px-4 py-2 ${selectedTabButton}`}
          onClick={() => handleClicktab(href, isCurrentPage)}
          key={`tab-${name}`}
        >
          <Image src={reactIcon} alt="react.js icon" height={12} />
          <p className="text-sm text-gray-300">{name}.tsx</p>

          <button
            className="relative z-10 rounded-[4px] p-[1px] hover:bg-gray-700"
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
              removePage(href);
              event.stopPropagation();
            }}
          >
            <X
              size={16}
              className={`${selectedTabCloseButton} group-hover:text-gray-300`}
            />
          </button>
        </div>
      );
    });
  }

  return (
    <header className="flex h-8 w-full flex-row border border-r-0 border-gray-950 bg-gray-900">
      {renderTabs()}
    </header>
  );
}
