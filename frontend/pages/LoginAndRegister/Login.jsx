import React, { useState } from "react";
import style from "./Login.module.css";
import noodles from "../Assets/noodles.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      email,
      password,
    };

    try {
      fetch(`http://localhost:8080/users/login`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);

          console.log(res);
          if (res.status == true) {
            alert(res.message);
            localStorage.setItem("userData", JSON.stringify(res.user));

            router.push("/");
          } else {
            alert(res.message);
          }
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
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
            <button type="submit">
              {loading ? (
                <img
                  style={{ width: "20px", height: "100%" }}
                  src="https://i.gifer.com/ZKZg.gif"
                  alt="loading.gif"
                />
              ) : (
                "Login"
              )}
            </button>
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
