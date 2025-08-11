import EditorClient from "@/components/EditorClient";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <h1 className="text-2xl font-semibold mt-2">NextJS, Shadcn UI, Editor.js</h1>
      <EditorClient />
      <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      <div><Button>Click Me</Button></div>
    </main>
  );
}
