import React from "react";
import style from "./Menu.module.css";
import Image from "next/image";
import HandiBiryani from "../Assets/biryani_handi.png";
import HandiTwoBiryani from "../Assets/biryani_two_handi.jpg";
import noodles2 from "../Assets/noodles2.png";
import roll from "../Assets/chicken_roll.png";
import chicken_lollypop from "../Assets/chicken_lollypop.png";
import lachhaParatha from "../Assets/lachha_paratha.png";

export default function Menu() {
  return (
    <div className={style.Menu_main_container}>
      <div className={style.first_container}>
        <div>
          <img src="https://freesvg.org/img/1531813273.png" alt="" />
        </div>
        <div>
          <img
            src="https://www.pngkit.com/png/full/261-2619388_big-image-egg-veg-or-non-veg.png"
            alt=""
          />
        </div>
      </div>
      <div className={style.second_container}>
        <div class={style.menu_card_div}>
          <div class={style.image_container}>
            <Image src={HandiBiryani} alt="Biryani" />
          </div>
          <div class={style.content_container}>
            <h2>Chicken Biryani</h2>
            <div class={style.additional_content}>
              <p>Price: $10</p>
              <p>Veg/Non-veg: Non-veg</p>
              <div class={style.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button class={style.read_more}>Read More</button>
            </div>
          </div>
        </div>

        <div class={style.menu_card_div}>
          <div class={style.image_container}>
            <Image src={roll} alt="roll" />
          </div>
          <div class={style.content_container}>
            <h2>Chicken Roll</h2>
            <div class={style.additional_content}>
              <p>Price: $10</p>
              <p>Veg/Non-veg: Non-veg</p>
              <div class={style.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button class={style.read_more}>Read More</button>
            </div>
          </div>
        </div>
        <div class={style.menu_card_div}>
          <div class={style.image_container}>
            <Image src={lachhaParatha} alt="paratha" />
          </div>
          <div class={style.content_container}>
            <h2>Lachha Paratha</h2>
            <div class={style.additional_content}>
              <p>Price: $10</p>
              <p>Veg/Non-veg: Non-veg</p>
              <div class={style.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button class={style.read_more}>Read More</button>
            </div>
          </div>
        </div>
        <div class={style.menu_card_div}>
          <div class={style.image_container}>
            <Image src={chicken_lollypop} alt="lollypop" />
          </div>
          <div class={style.content_container}>
            <h2>Chicken Lollypop</h2>
            <div class={style.additional_content}>
              <p>Price: $10</p>
              <p>Veg/Non-veg: Non-veg</p>
              <div class={style.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button class={style.read_more}>Read More</button>
            </div>
          </div>
        </div>
        <div class={style.menu_card_div}>
          <div class={style.image_container}>
            <Image src={noodles2} alt="Noodles" />
          </div>
          <div class={style.content_container}>
            <h2>Noodles</h2>
            <div class={style.additional_content}>
              <p>Price: $10</p>
              <p>Veg/Non-veg: Non-veg</p>
              <div class={style.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button class={style.read_more}>Read More</button>
            </div>
          </div>
        </div>
        <div class={style.menu_card_div}>
          <div class={style.image_container}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9IBVThF1JWRDjOw1DeMIJp80rQxG3sGElA&usqp=CAU"
              alt="biryani"
            />
          </div>
          <div class={style.content_container}>
            <h2>Chicken Biryani</h2>
            <div class={style.additional_content}>
              <p>Price: $10</p>
              <p>Veg/Non-veg: Non-veg</p>
              <div class={style.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button class={style.read_more}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
