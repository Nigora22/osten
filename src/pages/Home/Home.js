import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faPencilAlt,
  faServer,
  faShoppingBag,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import {
  faFacebookMessenger,
  faInstagramSquare,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
const Home = () => {
  return (
    <div>
      <div className="container home">
        <div>
          <h1 className="text-1">
            «Osten» — уникальный производитель, лифтов и эскалаторов в Средней
            Азии
          </h1>
          <p className="text-2">Компания «Osten» была основана в 2019 году!</p>
          <Button color="warning">
            <h5 className="text-white">ПОДРОБНЕЕ</h5>
          </Button>
        </div>
      </div>

      <div className="container text-center section1 mt-4 mb-5">
        <h1 className="text-3">Наши услуги</h1>
        <hr />

        <Row>
          <Col sm="3" className="py-5">
            <Card body>
              <CardTitle tag="h5">
                <FontAwesomeIcon icon={faPencilAlt} className="my-3" />
              </CardTitle>
              <CardText>
                <h5 className="mb-4">ПРОЕКТИРОВАНИЕ</h5>
              </CardText>
              <p>Подробно про проектирование</p>
            </Card>
          </Col>
          <Col sm="3" className="py-5">
            <Card body>
              <CardTitle tag="h5">
                <FontAwesomeIcon icon={faShoppingBag} className="my-3" />
              </CardTitle>
              <CardText>
                <h5 className="mb-4">ПРОЕКТИРОВАНИЕ</h5>
              </CardText>
              <p>Подробно про проектирование</p>
            </Card>
          </Col>
          <Col sm="3" className="py-5">
            <Card body>
              <CardTitle tag="h5">
                <FontAwesomeIcon icon={faCircle} className="my-3" />
              </CardTitle>
              <CardText>
                <h5 className="mb-4">ПРОЕКТИРОВАНИЕ</h5>
              </CardText>
              <p>Подробно про проектирование</p>
            </Card>
          </Col>
          <Col sm="3" className="py-5">
            <Card body>
              <CardTitle tag="h5">
                <FontAwesomeIcon icon={faServer} className="my-3" />
              </CardTitle>
              <CardText>
                <h5 className="mb-4">ПРОЕКТИРОВАНИЕ</h5>
              </CardText>
              <p>Подробно про проектирование</p>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="container text-center my-5">
        <div className="section2">
          <h1 className="text-3">Результаты</h1>
          <hr />
          <Row className="mx-4">
            <Col sm="4" className="py-5">
              <FontAwesomeIcon icon={faSortAmountUp} />
              <div className="text-1">300</div>
              <div className="text-2">лифтов в год</div>
            </Col>
            <Col sm="4" className="py-5">
              <FontAwesomeIcon icon={faSortAmountUp} />
              <div className="text-1">300</div>
              <div className="text-2">лифтов в год</div>
            </Col>
            <Col sm="4" className="py-5">
              <FontAwesomeIcon icon={faSortAmountUp} />
              <div className="text-1">300</div>
              <div className="text-2">лифтов в год</div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container3">
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

export default Home;
