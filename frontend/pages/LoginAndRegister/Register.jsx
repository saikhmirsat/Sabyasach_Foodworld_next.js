import React, { useState } from "react";
import style from "./Register.module.css";
import noodles from "../Assets/noodles.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    let obj = {
      firstName,
      lastName,
      email,
      mobile,
      gender,
      password,
    };

    try {
      fetch(`http://localhost:8080/users/register/`, {
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
            router.push("/LoginAndRegister/Login");
            setEmail("");
            setFirstName("");
            setLastName("");
            setGender("");
            setMobile("");
            setPassword("");
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
            <h2>Register</h2>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
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
            <div>
              <label htmlFor="mobile">Mobile:</label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit">
              {loading ? (
                <img
                  style={{ width: "20px", height: "100%" }}
                  src="https://i.gifer.com/ZKZg.gif"
                  alt="loading.gif"
                />
              ) : (
                "Register"
              )}
            </button>
            <p>
              If you have already register{" "}
              <Link href={"/LoginAndRegister/Login"}>Click</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
