import Image from "next/image";
import Link from "next/link"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
        <Link href ='/'>
        <Image src=".../public/logo.png" alt="imagem logo" height={32} width={32}/>
        </Link>
      </div>
      
      <div className="w-[86%] md:w-[92%] lg:w-[85%] xl:w-[86%] bg-blue-200">r</div>

</div>  
)}
