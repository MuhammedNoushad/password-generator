import { Separator } from "@/components/ui/separator.jsx";
import { PasswordGeneratorForm } from "./GeneratorForm";

function Body() {
  return (
    <div className="w-full max-w-md p-6 rounded-lg bg-white bg-clip-padding flex flex-col items-center">
      <img className="rounded-md h-11 mt-4" src="/logo.png" alt="site logo" />

      <h1 className="text-3xl font-bold mt-4">Password Generator</h1>

      <p className="text-center text-gray-500 mt-2 text-sm">
        🔑 Treat your password like a toothbrush: 🪥 Dont let anybody else use
        it 🚫 and get a new one every six months 🔄.
      </p>
      <Separator className="my-4" orientation="horizontal" decorative />

      <PasswordGeneratorForm />
    </div>
  );
}

export default Body;
