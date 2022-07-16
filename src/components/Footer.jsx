import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <footer class="footer-container typefooter-1">
        <div class="container">
          <div class="row footer-middle">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-10 col-style">
              <div class="box-footer box-infos">
                <div class="module">
                  <h3 class="modtitle">Наши контакты</h3>
                  <div class="modcontent">
                    <ul class="list-icon">
                      <li>
                        <span class="icon pe-7s-map-marker"></span>
                        Бишкек
                      </li>
                      <li>
                        <span class="icon pe-7s-call"></span>
                        <a className="forText" href="tel:+996504253345">
                          +996 (504) 253-345
                        </a>
                      </li>
                      <li>
                        <a className="forText" href="tel:+996880253545">
                          +996 (880) 253-545
                        </a>
                      </li>
                      <li>
                        <a className="forText" href="tel:+996221253545">
                          +996 (221) 253-545
                        </a>
                      </li>
                      <li>
                        <span class="icon pe-7s-mail"></span>
                        <a href="mailto:coautoray312@gmail.com">
                          autoray312@gmail.com
                        </a>
                      </li>
                      <li>
                        <span class="icon pe-7s-alarm"></span>
                        10-00 / 18-00
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-style">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div class="box-information box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Информация</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="#">О нас</a>
                          </li>
                          <li>
                            <a href="#">Контакты</a>
                          </li>
                          <li>
                            <a href="#">Гарантии</a>
                          </li>
                          <li>
                            <a className="forText" href="tel:+996501081998">
                              Поддержка 24/7
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div class="box-account box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Основные партнеры</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="#">BMW</a>
                          </li>
                          <li>
                            <a href="#">Mercedes</a>
                          </li>
                          <li>
                            <a href="#">Audi</a>
                          </li>
                          <li>
                            <a href="#">Toyota</a>
                          </li>
                          <li>
                            <a href="#">Chevrolet</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-clear">
                  <div class="box-service box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Категории</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="#">Тормозная система</a>
                          </li>
                          <li>
                            <a href="#">Бачки, Патрубки,воздуховоды</a>
                          </li>
                          <li>
                            <a href="#">Системы Кондиционироания</a>
                          </li>
                          <li>
                            <a href="#">Топливная система</a>
                          </li>
                          <li>
                            <a href="#">Стекла</a>
                          </li>
                          <li>
                            <a href="#">Электроника</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="copyright col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p>
                  Autoray © 2022. All Rights Reserved. Designed by
                  <a class="pixel" href="http://pixeldevs.club/">
                    pixeldevs.club
                  </a>
                </p>
              </div>
              <div class="payment-w col-lg-4 col-md-4 col-sm-12 col-xs-12">
                {/* <img src="image/catalog/demo/payment/payment.png" alt="imgpayment"> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div class="back-to-top">
          <i class="fa fa-angle-up"></i>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
