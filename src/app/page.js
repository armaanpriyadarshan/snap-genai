import Image from "next/image";
import { Input } from "antd";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 gap-4">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={200}
          height={200}
        />
        <h1 className="text-6xl font-nunito text-center">AI Workflow Generator for Research</h1>
        <p className="text-2xl font-sourceSans text-center m-4">A project for the SNAP Lab to leverage generative AI for the scientific process</p>
        <Input
          placeholder="What are you working on?"
          style={{
            width: 200,
          }}
        />
      </div>
    </main>
  );
}
