import Image from "next/image";

import vsCodeLogo from "../../assets/vs-code.icon.svg";

export default function Header() {
  return (
    <header className="flex h-10 w-full flex-row border-b border-gray-950 bg-gray-900 px-4">
      <Image src={vsCodeLogo} alt="VS Code icon" width={24} priority />
    </header>
  );
}
