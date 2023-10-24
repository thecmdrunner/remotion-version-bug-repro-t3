import RenderButton from "./_components/RenderButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Remotion Version bug reproduction
        </h1>

        <p>
          Click on the button below to trigger a render request. It should print
          out the Render ID.
          <br />
          To reproduce the bug, comment out line 8 and uncomment line 7 in
          `src/server/api/routers/render.ts`, and then press the Render button
          again.
        </p>

        <RenderButton />
      </div>
    </main>
  );
}
