import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Setpassword() {
  const router = useRouter();

  const [password, setPassword] = useState("");

  const { id, token } = router.query;

  const PasswordUpdateFunc = async () => {
    console.log(password);
    if (password === "") {
      alert("Please check password");
    }
    try {
      const obj = { password };

      await fetch(`http://localhost:8080/users/setpassword/${id}/${token}`, {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert(res.message);
          router.push("/LoginAndRegister/Login");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Set your password</h1>
      <div className="Input_forget_pass">
        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={PasswordUpdateFunc}>Submit</button>
      </div>
    </div>
  );
}
