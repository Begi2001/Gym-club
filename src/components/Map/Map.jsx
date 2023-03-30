import React from "react";
import "./map.scss";
import LocationImg from "../../assets/location2.png";
import ClockImg from "../../assets/clock.png";
import PhoneImg from "../../assets/phone.png";
import InstaImg from "../../assets/instagram.png";
import VkImg from "../../assets/vk.png";

export const dataContacts = [
  {
    id: 1,
    img: LocationImg,
    title: "г. Орехово-Зуево, ул. Ленина 84",
  },
  {
    id: 2,
    img: ClockImg,
    title: "Ежедневно с 8:00 до 23:00",
  },
  {
    id: 3,
    img: PhoneImg,
    title: `+7 (496) 416-19-16, +7 (925) 881-21-70
    `,
  },
];

const Map = () => {
  return (
    <div className="wrapper-map">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56439.114811424726!2d72.31805563446709!3d40.777836266629976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2sAndijan%2C%20Uzbekistan!5e0!3m2!1sen!2sbd!4v1678947053831!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="myFrame"
      ></iframe>
      <div className="wrapper-contact">
        <h2>Контакты</h2>
        {dataContacts.map((res) => (
          <div className="contacts" key={res.id}>
            <img src={res.img} alt="" />
            <p>{res.title}</p>
          </div>
        ))}
        <p className="title-subsc">Подписывайтесь на наши соц.сети</p>
        <div className="social-apps">
          <img src={InstaImg} alt="" className="insta" />
          <img src={VkImg} alt="" className="vk" />
        </div>
      </div>
    </div>
  );
};

export default Map;
