import Header from "@/components/welcome/header";
import WelcomeText from "@/components/welcome/welcome-text";
import RecentPages from "@/components/welcome/recent-pages";
import CodeSkills from "@/components/welcome/code-skills";

export default function Home() {
  return (
    <section className="flex h-full flex-col px-32 pb-4 pt-28">
      <Header />
      <div className="mt-8 grid grid-cols-2">
        <section className="flex flex-col gap-6 pr-16">
          <WelcomeText />

          <RecentPages />
        </section>

        <CodeSkills />
      </div>
    </section>
  );
}
