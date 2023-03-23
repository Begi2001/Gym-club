import React from "react";
import "./reg.scss";

const Reg = () => {
  return (
    <div className="wrapper-reg">
      <div className="reg-div">
        <h3>Остались вопросы?</h3>
        <h4>
          Оставьте Ваш номер телефона и мы{" "}
          <span>обязательно с Вами свяжемся</span>
        </h4>
        <input className="inp-name" type="text" placeholder="Введите имя" />
        <input
          className="inp-phone"
          type="text"
          placeholder="Введите телефон"
        />
        <div className="btn-div">
          <p>Получить консультацию</p>
        </div>
        <p>Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности</p>
      </div>
    </div>
  );
};

export default Reg;
