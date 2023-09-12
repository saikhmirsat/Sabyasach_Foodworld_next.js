import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image"; // Import next/image
import logo from "../Assets/logo.jpg"; // Make sure this path is correct

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginCheck = JSON.parse(localStorage.getItem("userData"));
      if (loginCheck) {
        setIsAuthUser(loginCheck.isAuthUser);
        console.log({ isAuthUser: loginCheck.isAuthUser });
      }
    }
  }, []);

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
        {isAuthUser ? (
          <Link href="/UserProfile/UserProfile">Profile</Link>
        ) : (
          <>
            <Link href="/LoginAndRegister/Login">Login</Link>
            <Link href="/LoginAndRegister/Register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
