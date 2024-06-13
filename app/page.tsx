import Image from "next/image";
import { Spacing } from "./Spacing";

export default function Home() {
  return (
    <main className="text-black">
      <section className="max-w-2xl px-4 m-auto">
        <h1 className="text-center">
          Welcome, Are you looking for a{" "}
          <span className="line-through text-lg font-bold hover:underline decoration-4">
            web developer
          </span>{" "}
          warrior?
        </h1>
      </section>

      <Spacing />

      <section className="max-w-2xl px-4 m-auto">
        <div className="nes-container with-title is-centered bg-blue-200">
          <p className="title">About Me ?</p>
          <p>
            I&apos;m Mihajatiana, a guy who is passionate about technology and
            indeed about creative design.
          </p>
        </div>
      </section>

      <Spacing />

      <section className="max-w-2xl px-4 m-auto">
        <div className="nes-container is-rounded bg-white flex flex-col items-center">
          <Image
            width={100}
            height={100}
            src={"/axe-and-shield.webp"}
            alt="a shield image"
          />

          <p className="text-center">These are my skills:</p>

          <div className="flex items-center justify-center flex-wrap gap-2">
            <a href="#" className="nes-badge">
              <span className="is-warning">Javascript</span>
            </a>
            <a href="#" className="nes-badge">
              <span className="is-error">PHP</span>
            </a>
            <a href="#" className="nes-badge">
              <span className="is-primary">TypeScript</span>
            </a>

            <a href="#" className="nes-badge">
              <span className="is-dark">Shadcn</span>
            </a>
            <a href="#" className="nes-badge">
              <span className="is-primary">React</span>
            </a>

            <a href="#" className="nes-badge">
              <span className="is-error">Laravel</span>
            </a>
          </div>
        </div>
      </section>

      <Spacing />

      <section className="max-w-2xl px-4 m-auto flex gap-3">
        <div className="nes-container is-rounded">
          <p>Good morning. Thou hast had a good night&apos;s sleep, I hope.</p>
        </div>
        <div className="nes-container is-rounded">
          <p>Good morning. Thou hast had a good night&apos;s sleep, I hope.</p>
        </div>
      </section>

      <Spacing />
    </main>
  );
}
