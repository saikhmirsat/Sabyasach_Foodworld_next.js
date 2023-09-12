import React, { useState } from "react";

export default function Forgetpassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const ForgetFunc = async () => {
    const obj = {
      email,
    };
    try {
      await fetch(`http://localhost:8080/users/forgetpassword/`, {
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
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={ForgetFunc}>
        {loading ? (
          <img
            style={{ width: "20px", height: "100%" }}
            src="https://i.gifer.com/ZKZg.gif"
            alt="loading.gif"
          />
        ) : (
          "Forget"
        )}
      </button>
    </div>
  );
}
