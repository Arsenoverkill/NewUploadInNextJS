import Link from "next/link";
import scss from "./Header.module.scss";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/contacts",
    name: "Contacts",
  },
];

const Header = () => {
  return (
    <div className={scss.HeaderPage}>
      {links.map((el, idx) => (
        <Link key={idx} href={el.href}>
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default Header;
