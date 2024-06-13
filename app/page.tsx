import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <button type="button" className="nes-btn is-primary">
          Primary
        </button>
        <button type="button" className="nes-btn is-success">
          Success
        </button>
        <button type="button" className="nes-btn is-warning">
          Warning
        </button>
      </div>
    </main>
  );
}
