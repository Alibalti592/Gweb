import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/prisma-example", label: "prisma" },
  { href: "/tasks", label: "tasks" },
];

const Navbar = () => {
  return (
    <nab>
      <div className="navbar bg-neutral text-neutral-content flex justify-between">
        <button className="btn btn-ghost text-xl mr-3">
          <Link href={"/"}>Gweb</Link>
        </button>

        <div className=" mx-4 px-4">
          <button className=" btn btn-ghost">
            <Link href={"/register"}>Créer un compte</Link>
          </button>
          <button className="btn-neutral border-2  rounded-xl p-2">
            <Link href={"/signIn"}>Se connecter</Link>
          </button>
        </div>
      </div>
    </nab>
  );
};

export default Navbar;
