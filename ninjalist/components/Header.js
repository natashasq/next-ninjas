import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
 // const { push } = useRouter();
  return (
    <div style={{ display: "flex", width: "100%" , justifyContent: "space-around", padding: "20px"}}>
      <Link href="/new-in">
        <div style={{cursor: "pointer"}}>New in</div>
      </Link>
      <Link href="/inspo">
        <div style={{cursor: "pointer"}}>Inspo</div>
      </Link>
      <Link href="/shop">
        <div style={{cursor: "pointer"}}>Shop</div>
      </Link>
      <Link href="/">
        <div style={{cursor: "pointer"}}>LOGO</div>
      </Link>
      <Link href="/outlet">
        <div style={{cursor: "pointer"}}>Outlet</div>
      </Link>
      <Link href="/about">
        <div style={{cursor: "pointer"}}>About</div>
      </Link>
      <div style={{display: "flex"}}>
        <Link href="/wishlist">
          <div style={{cursor: "pointer"}}>HeartIcon</div>
        </Link>
        <Link href="/cart">
          <div style={{cursor: "pointer"}}>CartIcon</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
