import React from "react";
import style from "@/pages/Home/Home.module.css";
import HandiBiryani from "../Assets/biryani_handi.png";
import HandiTwoBiryani from "../Assets/biryani_two_handi.jpg";
import noodles2 from "../Assets/noodles2.png";
import roll from "../Assets/chicken_roll.png";
import chicken_lollypop from "../Assets/chicken_lollypop.png";
import lachhaParatha from "../Assets/lachha_paratha.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={style.Home_container}>
      <div className={style.Home_main_container}>
        <div className={style.Home_child_1}>
          <img
            className={style.smoke_image}
            src="https://media4.giphy.com/media/xT9IgqjmZ870vakg4E/giphy.gif?cid=6c09b9525gmhqxerd4vvlbw7pa7ihg4oemcneamcwdl6ffua&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
            alt="smoke"
          />
          <Image
            className={style.Handi_biryani}
            src={HandiBiryani}
            alt="HandiBiryani_image"
          />
        </div>
        <div className={style.Home_child_2}>
          <div>
            <h4>WELCOME TO</h4>
            <h1>Food World Biryani</h1>
            <p>
              Sabyasachi Food World, born during the lockdown, is a culinary gem
              created by Saikh Isahaque. Our menu is a symphony of flavors,
              featuring Special Biryani, mouthwatering rolls, aromatic chaumin,
              crispy chicken pakoda, and more. Each bite is an adventure in
              taste. Join us for a memorable culinary journey, where passion
              meets innovation, and food is a celebration of life's moments.
            </p>

            <button className={style.orderNowHome}>Order Now</button>
          </div>
        </div>
      </div>
      <Image
        className={style.two_hand_biryani_img}
        src={HandiTwoBiryani}
        alt={HandiTwoBiryani}
      />

      {/* <div className={style.About}>
        <div className={style.background_image_about}>
          <div className={style.fixed_container_about}></div>
        </div>
        <div className={style.aboutContent}>
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div></div>
        </div>
      </div> */}
      <div className={style.noodle_img_container}>
        <div>
          <Image src={noodles2} alt="Noodles Image" />
        </div>
        <div className={style.noodles_second_child}>
          <div>
            <h1>Tasty Noodles</h1>
            <p>
              Experience the ultimate noodle adventure with us! From steaming
              bowls of ramen that warm your heart to stir-fried wonders that
              dance on your palate, our noodles are a delightful journey through
              flavors and textures. Join us on a whimsical ride of noodle
              ecstasy, where every slurp tells a story.
            </p>
          </div>
        </div>
      </div>
      <div className={style.noodle_img_container}>
        <div className={style.noodles_second_child}>
          <div>
            <h1>Golden Crispy Chicken Roll</h1>
            <p>
              Introducing our{" "}
              <b style={{ color: "orangered" }}>
                {" "}
                "Golden Crispy Chicken Roll"
              </b>{" "}
              - a harmonious blend of seasoned chicken, crisp veggies, and a
              tantalizing sauce, all tightly wrapped in a soft tortilla. Each
              bite is a burst of flavor, offering a satisfying combination of
              textures and tastes. Elevate your taste buds with this delightful
              chicken roll that's perfect for a quick, flavorful meal on the go!
            </p>
          </div>
        </div>
        <div>
          <Image src={roll} alt="Roll Image" />
        </div>
      </div>

      <div className={style.noodle_img_container}>
        <div>
          <Image src={chicken_lollypop} alt="Chicken lollypop Image" />
        </div>
        <div className={style.noodles_second_child}>
          <div>
            <h1>Chicken Lollipops</h1>
            <p>
              Savor the succulence of our{" "}
              <b style={{ color: "orangered" }}> "Chicken Lollipops"</b> , where
              tender, marinated chicken drumettes are transformed into
              irresistible bite-sized delights. Coated in a flavorful blend of
              spices and crisped to perfection, these lollipops are a
              mouthwatering sensation. Dip them into your favorite sauce for a
              truly delightful experience that's sure to satisfy your cravings.
              Bite, savor, repeat!
            </p>
          </div>
        </div>
      </div>

      <div className={style.noodle_img_container}>
        <div className={style.noodles_second_child}>
          <div>
            <h1> Crispy Lachha Paratha</h1>
            <p>
              Lachha Paratha, a beloved Indian flatbread, is a delectable fusion
              of crispy, crunchy layers that shatter with every bite. Its flaky
              texture and buttery aroma make it an irresistible accompaniment to
              a variety of dishes. Whether paired with spicy curries or relished
              with a dollop of yogurt and pickles, Lachha Paratha offers a
              delightful culinary experience that's sure to satisfy your
              cravings.
            </p>
          </div>
        </div>
        <div>
          <Image src={lachhaParatha} alt="Lachha Image" />
        </div>
      </div>
    </div>
  );
}
