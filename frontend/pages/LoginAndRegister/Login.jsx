import React, { useState } from "react";
import style from "./Login.module.css";
import noodles from "../Assets/noodles.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      email,
      password,
    };
    console.log("Form Data:", obj);
  };

  return (
    <div className={style.Register_main_container}>
      <div>
        <div>
          <Image
            className={style.register_noodeles_image}
            src={noodles}
            alt="noodles"
          />
          <img
            className={style.smoke_register}
            src="http://www.animationsoftware7.com/img/agifs/smoke01.gif"
            alt=""
          />
        </div>
        <div className={style.Register_form_container}>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            <br />
            <Link
              href="/LoginAndRegister/Forgetpassword"
              className={style.folgetPassBTN}
            >
              Forget Password
            </Link>
            <p>
              If you dodn't have account{" "}
              <Link href={"/LoginAndRegister/Register"}>Click</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
