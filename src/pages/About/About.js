import "./About.css";
import { Row, Col, Container, List, Card } from "reactstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faInstagramSquare,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

// install Swiper modules
SwiperCore.use([Pagination]);
const About = () => {
  return (
    <div className="body">
      <div className="container1">
        <p className="modern">MODERN LIFT SYSTEMS</p>
        <p className="big">Крупная лифтостроительная компания в Узбекистане!</p>
      </div>
      <div className="container2">
        <h1 className="fw-bold d-flex justify-content-center pt-5">О нас</h1>
        <p className=" d-flex justify-content-center">
          ______________________________
        </p>
        <Container>
          <Row>
            <Col xs="6">
              <p className="fw-bold">
                Современная, динамично развивающаяся, следую- щая международным
                стандартам качества, при этом настроенная на максимальную
                доступность продукции для всех слоёв населения. «Osten» —
                уникальный производитель, лифтов и эскалаторов в Средней Азии.
              </p>
              <p>
                В настоящее время в условиях ускоренного разви- тия экономики
                Республики Узбекистан и растущей динамики строительства жилых
                многоэтажных домов, торгово-развлекательных комплексов и бизнес
                центров. Возрос спрос на грузоподъемное оборудование отвечающим
                современным требо- ваниям эргономики и удобства эксплуатации.
              </p>
              <p>
                Принимая во внимание факторы, приведенные выше, а также в целях
                организации производства конкурентоспособной продукции в
                Республике Узбе- кистан, предлагается освоение производства лиф-
                тов и эскалаторов.
              </p>
              <p>
                Цели реализации данного проекта : џ производство
                конкурентоспособной продукции; џ обеспечение строительных
                компаний надёжным и качественным подъемным оборудованием; џ
                создание новых рабочих мест (200 ч.).
              </p>
              <img
                src="https://osten.vercel.app/images/about/osten.png"
                alt=""
                className="img1 my-3"
              />
              <img
                src="https://osten.vercel.app/images/about/osten2.png"
                alt=""
                className="img2 my-3"
              />
              <img
                src="https://osten.vercel.app/images/about/osten3.png"
                alt=""
                className="img3 my-3"
              />
            </Col>
            <Col xs="6">
              <p>
                Испытательная башня OSTEN возвышается на высоту 60 метров и
                является одной из самых высоких испытательных центров в средней
                Азии. Испытательный центр предназначен для проведения испытаний
                узлов безопасности и сертификации лифтов. Испытания лифтовых
                узлов безопасности проводят технически компетентные сотрудники
                лаборатории, занимающиеся лифтовым оборудованием и несущие
                ответственность за качество испытаний и объективность
                результатов. После окончания проверки оформляется отчет о
                техническом состоянии лифта и его соответствии требованиям ТУ,
                ГОСТ и EN. Для защиты жизни и здоровья людей, лифты перед
                введением в эксплуатацию проходят обязательную процедуру
                лабораторных испытаний.
              </p>
              <p>
                Для получения сертификата на лифт проверяются следующие
                устройства безопасности, входящие в лифтовое оборудование:
              </p>
              <List type="unstyled">
                <ul>
                  <li>Ограничители скорости</li>
                  <li>Замки дверей шахт</li>
                  <li>Буферы</li>
                  <li>Ловители</li>
                  <li>Гидроаппаратура безопасности</li>
                </ul>
              </List>
              <p>
                Испытания лифтовых узлов безопасности проводят технически
                компетентные сотрудники лабораторий, занимающихся лифтовым
                оборудованием и несущие ответственность за качество испытаний и
                объективность результатов. После окончания проверки оформляется
                отчет о техническом состоянии лифта и его соответствии
                требованиям ТУ, ГОСТ и EN.
              </p>
              <p>
                Лабораторией называют изолированное помещение, в котором
                находятся специальные измерительные приборы для тестирования
                отдельных узлов и элементов лифта. Также лабораторией считаются
                большие испытательные центры или ИЦ, имеющие испытательную
                башню, шахту и стенды для испытаний. К испытательным центрам
                выдвигаются высокие требования, соответствия текущей системе
                сертификации для аттестации и получения допуска к испытаниям,
                чтобы иметь возможность тестировать оборудование на высоком
                уровне, обеспечивать точность и объективность проводимых р
              </p>
              <p>
                На высоте 56 метров расположена, самая высокая в стране,
                смотровая производственный потенциал и масштабность ООО
                «ТЕХНОПАРК».
              </p>
              <p>
                Испытательный центр служит как для тестирования лифтов, так и
                для исследовательской работы и совершенствования систем
                безопасности лифта и лифтового оборудования.
              </p>
              <p>
                Строительство 60-метровой испытательной башни началось в 2019
                году и будет окончено в кратчайшие сроки в течении 6 месяцев в
                2020 году, наличие испытательной башни в производственном
                комплексе ООО «ТЕХНОПАРК» даст толчок к развитию
                лифтостроительной отросли в Республике Узбекистан. Позволить
                применять только высококачественные конструкции лифтов, что
                обеспечит высокую степень безопасности населения в Республике.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="kontainer3">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card className="card">
              <img
                src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                alt=""
                className="cardimg"
              />
              <h3 className="cfooter">osten L1</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card">
              <img
                src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
                alt=""
                className="cardimg"
              />
              <h3 className="cfooter">osten l3</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card">
              <img
                src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                alt=""
                className="cardimg"
              />
              <h3 className="cfooter">osten l2</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card">
              <img
                src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                alt=""
                className="cardimg"
              />
              <h3 className="cfooter">osten L3</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card">
              <img
                src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
                alt=""
                className="cardimg"
              />
              <h3 className="cfooter">osten l3</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card">
              <img
                src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                alt=""
                className="cardimg"
              />
              <h3 className="cfooter">OSTEN l3</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card">
              <img
                src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
                alt=""
                className="cardimg"
              />
              <h3 className="cfooter">OSTEN L3</h3>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" footer-class px-3">
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

export default About;
