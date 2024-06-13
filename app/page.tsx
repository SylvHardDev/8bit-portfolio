export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <section className="max-w-4xl px-4 m-auto">
        <h1>
          Welcome, Are you looking for a{" "}
          <span className="line-through text-lg font-bold hover:underline">
            frontend
          </span>{" "}
          developer !
        </h1>
      </section>
      <section className="max-w-4xl px-4 m-auto">
        <div className="nes-container with-title is-centered bg-blue-200">
          <p className="title">About Me ?</p>
          <p>
            I&apos;m Mihajatiana, a guy who is passionate about technology and
            indeed about creative design.
          </p>
        </div>
      </section>
      <section className="max-w-4xl px-4 m-auto">
        <div className="nes-container is-rounded bg-white">
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
      <section className="max-w-4xl px-4 m-auto flex gap-3">
        <div className="nes-container is-rounded">
          <p>Good morning. Thou hast had a good night&apos;s sleep, I hope.</p>
        </div>
        <div className="nes-container is-rounded">
          <p>Good morning. Thou hast had a good night&apos;s sleep, I hope.</p>
        </div>
      </section>
    </main>
  );
}
