import Image from "next/image";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-items-center p-8 sm:p-20">
      <main className="">
        <h1 className="text-center text-5xl">Botsito</h1>
        <div className="app-section">
          <Form />
        </div>
      </main>
    </div>
  );
}
