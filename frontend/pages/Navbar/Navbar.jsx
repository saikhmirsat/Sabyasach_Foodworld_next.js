import Link from "next/link";
import React from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image"; // Import next/image
import logo from "../Assets/logo.jpg"; // Make sure this path is correct


export default function Navbar() {
  return (
    <div className={style.Navbar}>
      <div className={style.Nav_left_item}>
        {/* <Image src={logo} alt="Logo" width={100} height={100} />{" "} */}
        <Link href="/">Food World</Link>
      </div>
      <div className={style.Nav_Right_items}>
        <Link href="/Page/Menu"> Menu</Link>
        <Link href="/Page/About">About</Link>
        <Link href="/Page/Contact">Contact</Link>
        <Link href="/LoginAndRegister/Login">Login</Link>
        <Link href="/LoginAndRegister/Register">Register</Link>
      </div>
    </div>
  );
}
