import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function UserProfile() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    // Check if window object (client side) is defined
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("userData"));
      setId(user._id);
      // Use loginCheck here...
    }
  }, []);
  const router = useRouter();

  const LogoutFunc = () => {
    try {
      fetch(`http://localhost:8080/users/logout/${id}`, {
        method: "POST",
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
            localStorage.removeItem("userData");

            router.push("/LoginAndRegister/Login");
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
      UserProfile
      <button onClick={LogoutFunc}>
        {loading ? (
          <img
            style={{ width: "20px", height: "100%" }}
            src="https://i.gifer.com/ZKZg.gif"
            alt="loading.gif"
          />
        ) : (
          "Logout"
        )}
      </button>
    </div>
  );
}
