import { Options } from "@/enums/options-navigation";

interface ButtonNavigationInterface {
  type: Options;
  Icon: any;
  handleClick: Function;
  isSelectedButton: boolean;
}

const ACTIVE_COLOR = "text-gray-300";

export default function ButtonNavigation({
  type,
  Icon,
  handleClick,
  isSelectedButton,
}: ButtonNavigationInterface) {
  const activeButton = isSelectedButton
    ? "border-l-2 border-l-gray-300 pr-[2px]"
    : "";
  const activeIconColor = isSelectedButton ? ACTIVE_COLOR : "text-gray-600";

  return (
    <button
      className={`flex w-full items-center justify-center border-0 bg-transparent py-3  ${activeButton}`}
      onClick={() => handleClick(type)}
    >
      <Icon size={28} className={`${activeIconColor} hover:${ACTIVE_COLOR}`} />
    </button>
  );
}
