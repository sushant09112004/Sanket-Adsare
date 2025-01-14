import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      First page 
      write all the things to do here 
      this page will be on starting the app at localhot 3000

      to  start the server run "npm run dev"
      <Link href="/about">Navigat eto the next page</Link>

      <Link href="/contact" className="text-red-600 text-bold bg-green-500">contact pagee</Link>
    </div>
  );
}
