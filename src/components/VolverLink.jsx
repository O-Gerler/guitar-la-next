import Link from "next/link";


const VolverLink = ({ href }) => {
  return (
    <div className="container mx-auto my-10">
      <Link
        href={href}
        className="font-bold bg-black rounded-sm px-8 uppercase py-4 text-lg text-white hover:bg-orange-500 transition-colors"
      >
        Volver
      </Link>
    </div>
  );
};

export default VolverLink;
