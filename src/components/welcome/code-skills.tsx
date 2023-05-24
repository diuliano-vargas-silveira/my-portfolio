import Image from "next/image";

import { TECHNOLOGIES } from "@/constants/tecnologies";

export default function CodeSkills() {
  function renderCodeSkills() {
    return Object.keys(TECHNOLOGIES).map((technologyName: string, index) => {
      const { image, alt, name } = TECHNOLOGIES[technologyName];

      return (
        <li
          className="item-center mb-1 flex flex-row gap-2"
          key={`technology-${index}`}
        >
          <Image src={image} alt={alt} width={16} height={16} />
          <span className="text-sm leading-relaxed text-gray-600">{name}</span>
        </li>
      );
    });
  }

  return (
    <section className="flex flex-col">
      <h2 className="text-lg leading-relaxed text-gray-400">Code Skills</h2>
      <ul className="flex list-none flex-col">{renderCodeSkills()}</ul>
    </section>
  );
}
