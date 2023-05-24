import { usePages } from "@/providers/pages-provider";
import { usePathname, useRouter } from "next/navigation";

import { ROUTES, RoutesInterface } from "@/constants/routes";

export function usePagesHook() {
  const [pages, setPages] = usePages();
  const router = useRouter();
  const pathname = usePathname();

  function addPage(href: string, route: string) {
    const isOpened = pages.some((page: RoutesInterface) => page.href === href);

    router.push(href);

    if (isOpened) {
      return;
    }

    setPages([...pages, ROUTES[route]]);
  }

  function removePage(href: string) {
    let removedPage = 0;
    const filteredPages = pages.filter(
      (page: RoutesInterface, index: number) => {
        removedPage = index;

        return page.href !== href;
      }
    );

    setPages(filteredPages);

    if (!filteredPages.length) {
      router.push("");

      return;
    }

    if (removedPage > 0) {
      removedPage -= 1;
    }

    const isCurrentPage = pathname === href;

    if (!isCurrentPage) {
      return;
    }

    const linkRedirect = filteredPages[removedPage].href;

    router.push(linkRedirect);
  }

  return {
    addPage,
    removePage,
  };
}
