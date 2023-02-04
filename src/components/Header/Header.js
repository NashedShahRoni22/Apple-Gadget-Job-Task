import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-black py-5">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <div className="bar bg-white h-0.5 w-8"></div>
        <div className="bar bg-white h-0.5 w-8"></div>
        <div className="bar bg-white h-0.5 w-8"></div>
      </div>
      <div>
        <Image src="/logo.webp" height={48} width={100} alt="" />
      </div>
      <div>
        <Image src="/search-icon.png" height={36} width={36} alt="" />
      </div>
      </div>
    </nav>
  );
};

export default Header;
