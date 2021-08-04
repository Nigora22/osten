import "./Production.css";
import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faInstagramSquare,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
const Production = () => {
  return (
    <div className="body">
      <div className="container1">
        <p className="modern">Производство</p>
      </div>
      <div className="container2">
        <h1 className="fw-bold d-flex justify-content-center pt-5">
          Производство
        </h1>
        <p className=" d-flex justify-content-center">
          ______________________________
        </p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Пассажирские лифты</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Лифт для коттеджей</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Больничный лифт</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Грузовой лифт</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className="fw-bold">Пассажирские лифты</p>
                  <p>
                    Пассажирский лифт – это подъемный механизм, без которого
                    почти невозможно представить себе высотное здание, а первый
                    такой подъемник был установлен в Нью-Йорке еще в 1857 году.
                    Устройство безопасности для лифтов Э.Г. Отиса, в сочетании с
                    использованием стальных каркасов зданий, дало возможность
                    строить высотные здания. С тех пор лифты постоянно
                    совершенствуются и улучшаются, но для регулярных тестов
                    требуются специальные высотные сооружения. Одним из таких
                    сооружений является испытательная башня OSTEN.
                  </p>
                  <p className="fw-bold">Пассажирский лифт-профиль</p>
                  <p>
                    В небольшом машинном отделении, пассажирский лифт Osten
                    имеет только около 65% - 70% от традиционного машинного
                    отделения. Это значи- тельно экономит строительное
                    пространство и материал. Шкаф управления в машинном
                    отделении выполнен в однослойной компоновке. Основная
                    опорная балка может также использоваться в качестве сцепной
                    пластины, что в значительной степени экономит пространство
                    машинного отделения. По сравнению с традиционными лифтами,
                    при условии обеспечения рабочего пространства,
                    предусмотренного национальным стандартом, он эффективно
                    контролирует высоту машинного отделения. Интенсивный эффект
                    пространства дает больше свободы для архитекто- ров. Это
                    предоставляет более широкое использова- ние пространства для
                    строительства. Прекрасно сочетается с архитектурным стилем.
                  </p>
                  <img
                    src="https://osten.vercel.app/images/diff/img.jpg"
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className="fw-bold">Лифт для коттеджей</p>
                  <p>
                    Лифты Osten, предназначенные для коттеджей, придерживаются
                    идеи дизайна защиты окружающей среды и энергосбережения, а
                    также в настоящее время объединяются с новейшей лифтовой
                    технологией для обеспечения безопасности и надежности
                    продуктов компании. Элегантно спроектированная кабина лифта,
                    тонкая и изысканная техника демонстрируют выдающуюся
                    производительность лифтов Osten данной серии.
                  </p>
                  <img
                    src="https://osten.vercel.app/images/diff/img3.jpg"
                    alt=""
                  />
                  <img
                    src="https://osten.vercel.app/images/diff/img4.jpg"
                    alt=""
                    className="img3"
                  />
                  <img
                    src="https://osten.vercel.app/images/diff/img5.jpg"
                    alt=""
                    className="img3"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className="fw-bold">Больничный лифт</p>
                  <p>
                    Больничный лифт часто используется в огромных лечебных
                    заведениях, современных лечебных центрах, санаториях,
                    центрах медикосанитарной помощи и т. д., где лечение больных
                    и спасение умирающих является основной обязанностью. Серия
                    больничных лифтов Osten придерживается гуманного подхода,
                    применяет технологию группового наблюдения из экспертной
                    системы, а также сокращает время ожидания пациентов до
                    минимума.
                  </p>
                  <img
                    src="https://osten.vercel.app/images/diff/img6.jpg"
                    alt=""
                  />
                  <img
                    src="https://osten.vercel.app/images/diff/img7.jpg"
                    alt=""
                    className="img3"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p className="fw-bold">Грузовой лифт</p>
                  <p>
                    Грузовой лифт Osten использует передовую технологию
                    синхронного безредукторного тягового усилия с постоянными
                    магнитами, без машинного отделения. Тяговая машина имеет
                    преимущество в малом весе, малом объеме, экономит
                    архитектурное пространство, значительно повышает
                    производительность и качество, снижает энергопотребление,
                    частоту отказов. Грузовой лифт Osten с меньшей высотой вала,
                    уменьшает высоту конструкции фабрик и других зданий, может
                    отвечать фактическим потребностям коммерческой. Самый лучший
                    выбор для перевозки товаров на фабриках, складах,
                    универмагах, центрах недвижимости, библиотек и т.д.
                  </p>
                  <img
                    src="https://osten.vercel.app/images/diff/img8.jpg"
                    alt=""
                  />
                  <img
                    src="https://osten.vercel.app/images/diff/img9.jpg"
                    alt=""
                    className="img3"
                  />
                  <img
                    src="https://osten.vercel.app/images/diff/img10.jpg"
                    alt=""
                    className="img3"
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <div className="footer-class px-3">
        <Row>
          <Col sm="4" className="py-5 px-3">
            <h3>О НАС</h3>
            <br />
            <p>
              «Osten» — уникальный производитель, лифтов и эскалаторов в Средней
              Азии Компания «Osten» была основана в 2019 году!
            </p>
            <h3>МЫ В СОЦ.СЕТЯХ:</h3>
            <div className="d-flex ">
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="mx-2 fs-4"
              />
              <FontAwesomeIcon icon={faInstagramSquare} className="mx-2 fs-4" />
              <FontAwesomeIcon icon={faTelegramPlane} className="mx-2 fs-4" />
            </div>
          </Col>
          <Col sm="4" className="py-5 px-3">
            <h3>ПОСЛЕДНИЕ НОВОСТИ</h3>
            <br />
            <p>Построен новый лифт</p>
            <hr />
            <p>РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</p>
            <hr />
            <p>ДИСПЕТЧЕРИЗАЦИЯ</p>
          </Col>
          <Col sm="4" className="py-5 px-3">
            <h3> КОНТАКТЫ</h3> <br />
            <p>
              <b>Номер телефона:</b> +998 (93) 511-11-17 +998 (91) 791-51-15
            </p>
            <p>
              <b>Электронная почта:</b> info@uzlift.uz
            </p>
            <p>
              <b>Адрес:</b> 100077, город Ташкент, улица Мухаммад Юсуф 1А.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Production;
