import { usePathname, useRouter } from "next/navigation";
import { usePagesHook } from "@/hooks/pages";

import Image from "next/image";

import { ROUTES } from "@/constants/routes";

import reactIcon from "../../assets/react.icon.svg";

interface NavigationFilesInterface {
  isOpen: boolean;
}

export default function NavigationFiles({ isOpen }: NavigationFilesInterface) {
  const heightControl = isOpen ? "h-auto" : "h-0";

  const { addPage } = usePagesHook();
  const router = useRouter();
  const pathname = usePathname();

  function handleClickLink(href: string, route: string) {
    addPage(href, route);

    router.push(href);
  }

  function renderRoutes() {
    return Object.keys(ROUTES).map((route, index) => {
      const { href, name } = ROUTES[route];
      const controlActiveLink =
        pathname === href ? "bg-gray-800 text-gray-100" : "";

      return (
        <button
          onClick={() => handleClickLink(href, route)}
          className={`flex items-center gap-1.5 px-1 py-[2px] pl-4 text-sm text-gray-300 hover:bg-gray-800 hover:text-gray-100 ${controlActiveLink} w-full`}
          key={`route-${index}`}
        >
          <Image src={reactIcon} alt="react.js icon" height={14} />
          {name}.tsx
        </button>
      );
    });
  }

  return (
    <nav
      className={`transition-height overflow-hidden duration-500 ${heightControl} pt-1`}
    >
      {renderRoutes()}
    </nav>
  );
}
