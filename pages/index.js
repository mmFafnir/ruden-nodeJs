

const indexHTML = () => {
    return (
        `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Сантехника RUDEN</title>
            <meta name="description" content="Закажите гидромассаж и ванну по отличной цене в Санкт-Петербурге Телефон  +7 (950) 226 88 22.">
            <link rel="stylesheet" href="https://ruden-design.ru/css/simplebar.css">
            <link rel="stylesheet" href="https://ruden-design.ru/css/style.css">
            <link rel="stylesheet" href="https://ruden-design.ru/css/normalize.css">
            <link rel="stylesheet" href="https://ruden-design.ru/css/adaptiv.css">
            <link rel="stylesheet" href="https://ruden-design.ru/css/adaptiv.css">
            <link rel="stylesheet" href="https://ruden-design.ru/css/animation.css">
            <link rel="stylesheet" href="https://ruden-design.ru/css/animate.css">
            <style>
                nav ul li:nth-child(1) a{
                    color: black;
                }
                nav ul li:nth-child(2) a{
                    color: black;
                }
                nav ul li:nth-child(3) a{
                    color: black;
                }
                nav ul li:nth-child(4) a{
                    color: white;
                }
                nav ul li:nth-child(5) a{
                    color: white;
                }
                nav ul li:nth-child(6) a{
                    color: white;
                }
            </style>
        </head>
        <body>
        
            <div class="wrapper">
             <header class="header">
               <div class="header__wrapper">
                  <a href="index.html" class="logo">
                    
                  </a>
                  <nav>
                      <ul class="menu">
                          <li><a href="index.html">Главная</a></li>
                          <li><a href="catalod.html">Ассортимент</a></li>
                          <li><a href="works.html">Наши работы</a></li>
                          <li><a href="accordion.html">Гидромассаж</a></li>
                          <li><a href="basket.html"><i>Корзина</i><span class="cart__quantity">0</span></a></li>
                          <li><a class=" modal-open" data-modal="search" href="#">Поиск</a></li>
                      </ul>
                  </nav>
                  <div class="number">
                      <p>+7 (950) 226 88 22</p>
                  </div>
                  <div class="burger-menu">
                    <div class="burger-menu__nav">
                      <a href="index.html" class="burger-menu__link">Главнaя</a>
                      <a href="catalod.html" class="burger-menu__link">Ассортимент</a>
                      <a href="works.html" class="burger-menu__link">Наши работы</a>
                      <a href="accordion.html" class="burger-menu__link">Гидромассаж</a>
                      <a href="basket.html" class="burger-menu__link">Корзина</a>
                    </div>
                    <div class="burger-menu__footer">
                      <div class="burger-menu__footer_block">
        
                      </div>
                      <p class="burger-menu__footer_tel">+7 (950) 226 88 22</p>
                    </div>
                  </div>
                  <div class="burger-icon burger-icon__header"><span></span></div>
               </div>
        
            </header>
              <article class="hat" id="hat">
        
                <div class="first-block"></div>
        
        
                <div class="content">
        
                    <div class="hat_content">
        
                        <div class="hat_box res-text">
                            <h1 class="hat_content-title">Салон сантехники RUDEN</h1>
                            <h3 class="hat_content-text">Закажите гидромассаж и ванну по отличной цене в Санкт-Петербурге</h3>
                            <a class="button" href="catalod.html"><div >Подробнее</div></a>
                        </div>
        
                        <div class="picture">
                           <img class="massage-img" src="https://ruden-design.ru/img/massageMain/4+2+2.png" alt="">
                            <img loading="lazy" src="https://ruden-design.ru/img/square.png" srcset="https://ruden-design.ru/img/square.png" alt="square" >
                        </div>
        
                    </div>
        
                    <div class="icon_ball">
                        <div class="component_line">
                            <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4L1 3ZM72 4L77 6.38676L77 0.613253L72 3L72 4ZM1 4L72.5 4L72.5 3L1 3L1 4Z" fill="#145B7A"/>
                            </svg>
                        </div>
        
                        <div class="component_circle active_circle" data-title="Главное">
                            <a href="#hat">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                                </svg>
                            </a>
                        </div>
                        <div class="component_circle" data-title="Преимущества">
                            <a href="#benefits">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                                </svg>
                            </a>
                        </div>
                        <div class="component_circle" data-title="Рекомендуем">
                            <a href="#recommend">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                                </svg>
                            </a>
                        </div>
                        <div class="component_circle" data-title="О нас">
                            <a href="#about">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                                </svg>
                            </a>
                        </div>
                        <div class="component_circle" data-title="Вопрос - ответ">
                            <a href="#FAQ">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                                </svg>
                            </a>
                        </div>
                        <div class="component_circle" data-title="Контакты">
                            <a href="#contact">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                                </svg>
                            </a>
                        </div>
        
                        <div class="component_line">
                            <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3L1.60608e-07 0.613249L-1.60608e-07 6.38675L5 4L5 3ZM76 4C76.2761 4 76.5 3.77615 76.5 3.5C76.5 3.22386 76.2761 3 76 3L76 4ZM4.5 4L76 4L76 3L4.5 3L4.5 4Z" fill="#145B7A"/>
                            </svg>
                        </div>
                    </div>
        
                    <div class="icon_vk">
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                    </div>
        
                </div>
        
                <div class="absolute_hat">
        
                    <div class="absolute_small-ball1">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="1.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="1.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="1.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="1.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="1.5" r="1.5" fill="black"/>
                        </svg>
                    </div>
        
                    <div class="absolute_big-ball">
                        <svg width="500" height="544" viewBox="0 0 500 544" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="326" cy="186" r="22" fill="#F4F4F4"/>
                            <circle cx="478" cy="186" r="22" fill="#F4F4F4"/>
                            <circle cx="174" cy="354" r="22" fill="#F4F4F4"/>
                            <circle cx="22" cy="354" r="22" fill="#F4F4F4"/>
                            <circle cx="326" cy="354" r="22" fill="#F4F4F4"/>
                            <circle cx="478" cy="354" r="22" fill="#F4F4F4"/>
                            <circle cx="174" cy="522" r="22" fill="#F4F4F4"/>
                            <circle cx="22" cy="522" r="22" fill="#F4F4F4"/>
                            <circle cx="326" cy="522" r="22" fill="#F4F4F4"/>
                            <circle cx="478" cy="522" r="22" fill="#F4F4F4"/>
                            <circle cx="174" cy="22" r="22" fill="#F4F4F4"/>
                            <circle cx="22" cy="22" r="22" fill="#F4F4F4"/>
                            <circle cx="326" cy="22" r="22" fill="#F4F4F4"/>
                            <circle cx="478" cy="22" r="22" fill="#F4F4F4"/>
                            <circle cx="174" cy="186" r="22" fill="#F4F4F4"/>
                            <circle cx="22" cy="186" r="22" fill="#F4F4F4"/>
                        </svg>
                    </div>
        
                    <div class="absolute_small-ball2">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="34.5" r="1.5" fill="black"/>
                            <circle cx="1.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="23.5" r="1.5" fill="black"/>
                            <circle cx="1.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="12.5" r="1.5" fill="black"/>
                            <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                            <circle cx="12.5" cy="1.5" r="1.5" fill="black"/>
                            <circle cx="23.5" cy="1.5" r="1.5" fill="black"/>
                            <circle cx="34.5" cy="1.5" r="1.5" fill="black"/>
                        </svg>
                    </div>
                    <div>
                        <div class="absolute_text absolute_baden">RUDEN</div>
                        <!--<div class="absolute_text absolute_baden-left">RUDEN</div>-->
                    </div>
        
                </div>
        
            </article>
        
            <div class="div_benefits">
                    <article class="benefits" id="benefits">
        
                    <div class="absolute_benefits">
        
                        <div class="absolute_text text-a absolute_advantages">преимущества</div>
                        <div class="absolute_big-ball benefits_big-ball">
                            <svg width="500" height="544" viewBox="0 0 500 544" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="326" cy="186" r="22" fill="#F4F4F4"/>
                                <circle cx="478" cy="186" r="22" fill="#F4F4F4"/>
                                <circle cx="174" cy="354" r="22" fill="#F4F4F4"/>
                                <circle cx="22" cy="354" r="22" fill="#F4F4F4"/>
                                <circle cx="326" cy="354" r="22" fill="#F4F4F4"/>
                                <circle cx="478" cy="354" r="22" fill="#F4F4F4"/>
                                <circle cx="174" cy="22" r="22" fill="#F4F4F4"/>
                                <circle cx="22" cy="22" r="22" fill="#F4F4F4"/>
                                <circle cx="326" cy="22" r="22" fill="#F4F4F4"/>
                                <circle cx="478" cy="22" r="22" fill="#F4F4F4"/>
                                <circle cx="174" cy="186" r="22" fill="#F4F4F4"/>
                                <circle cx="22" cy="186" r="22" fill="#F4F4F4"/>
                            </svg>
                        </div>
                        <div class="benefits_small-ball1">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="1.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="1.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="1.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="1.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="1.5" r="1.5" fill="black"/>
                            </svg>
                        </div>
                        <div class="benefits_small-ball2">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="34.5" r="1.5" fill="black"/>
                                <circle cx="1.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="23.5" r="1.5" fill="black"/>
                                <circle cx="1.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="12.5" r="1.5" fill="black"/>
                                <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                                <circle cx="12.5" cy="1.5" r="1.5" fill="black"/>
                                <circle cx="23.5" cy="1.5" r="1.5" fill="black"/>
                                <circle cx="34.5" cy="1.5" r="1.5" fill="black"/>
                            </svg>
                        </div>
                    </div>
        
                    <div class="benefits__wrapper">
                      <div class="benefits-left">
        
                          <h3 class="benefits_title wow animate__flipInX">
                              <span>Преимущества</span> гидромассажа
                          </h3>
                          <h4 class="benefits_text wow animate__flipInX">
                              ВСЕГДА В НАЛИЧИИ БОЛЕЕ <span>430</span> НАИМЕНОВАНИЙ
                          </h4>
        
                          <div class="benefits_box">
                              <div class="benefits-modal">
                                  <div class="benefits-modal__close"></div>
                                  <div class="benefits-modal__content"></div>
        
                              </div>
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">1</div><div class="benefits_position-text">Предложим лучшие варианты</div>
                                  <div class="benefits_position__desc">- представлены ведущие бренды ванна (акриловые,квариловые, мраморные и чугунные) <br/>
                                    - в более 20 варинтах комплектаций гидромассажа<br/>
                                    - в четырех цветовых исполнениях (хром, бронза, золото, черный цвет)</div>
                              </div>
        
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">2</div><div class="benefits_position-text">Покажем в действии</div>
                                  <div class="benefits_position__desc">На демонстрационной ванне Вы увидете в работе все видымассажа и других систем. Это позволит более точноопределиться в выборе опций для своей будущей ванны.</div>
                              </div>
        
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">3</div><div class="benefits_position-text">Примерьте перед покупкой</div>
                                  <div class="benefits_position__desc">Огромный размерный ряд ванн может запутать любого
        покупателя. Почему бы не подобрать то, что нужно именин
        Вам.</div>
                              </div>
        
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">4</div><div class="benefits_position-text">Персональные решения</div>
                                  <div class="benefits_position__desc">именно для вашей ванной
        комнаты, начиная от цвета и материала ванны с
        гидромассажем, заканчивая размерами</div>
                              </div>
        
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">5</div><div class="benefits_position-text">Возможность выбора</div>
                                  <div class="benefits_position__desc"> среди партнеров наших салонов
        огромное множество различных ванн</div>
                              </div>
        
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">6</div><div class="benefits_position-text">Реальные гарантии</div>
                                  <div class="benefits_position__desc">у нас минимальное количество
        обращений, поэтому вы получаете ... года гарантии</div>
                              </div>
        
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">7</div><div class="benefits_position-text">Профессионализм команды</div>
                                  <div class="benefits_position__desc">на каждом этапе, от
        консультации персонального менеджера до
        непосредственной установки и сервисного обслуживания</div>
                              </div>
        
                              <div class="benefits_position wow animate__backInLeft">
                                  <div class="benefits_position-number">8</div><div class="benefits_position-text">Декоративные элементы</div>
                                  <div class="benefits_position__desc"> 
                                     более 20 варинтах комплектаций гидромассажа<br/>
                                     в четырех цветовых исполнениях (хром, бронза, золото, черный цвет)
                                  </div>
                              </div>
        
                          </div>
                      </div>
        
                      <div class="benefits-right">
                          <div class="benefits_img wow animate__zoomIn">
                              <img loading="lazy" src="https://ruden-design.ru/img/magazine.png" alt="">
        
                              <div class="benefits_box-more">
                                  <div class="benefits_canvas canvas-3 wow animate__rotateIn"></div>
                                  <div class="benefits_canvas canvas-4 wow animate__rotateInUpLeft"></div>
                                  <div class="top_canvas wow animate__rotateInDownRight">
                                      <div class="canvas-2 wow animate__fadeInUp">
                                      </div>
                                      <div class="canvas-1 wow animate__fadeInDown">
                                           <h4 class="benefits_canvas-title wow animate__fadeInTopLeft">
                                              Заказать ванну
                                          </h4>
                                          <hr>
                                          <p class="benefits_canvas-text wow animate__fadeInTopRight">
                                              Вы можете сделать свой индивидуальный гидромассаж под себя
                                          </p>
                                          <hr>
                                          <a class="button wow animate__fadeInDown" href="accordion.html" ><div href="catalod.html">Подробнее</div></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
        
                    </div>
        
                </article>
                <div class="benefits_icon-ball icon-ball">
                    <div class="component_line">
                        <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4L1 3ZM72 4L77 6.38676L77 0.613253L72 3L72 4ZM1 4L72.5 4L72.5 3L1 3L1 4Z" fill="#145B7A"/>
                        </svg>
                    </div>
        
                    <div class="component_circle" data-title="Главное">
                        <a href="#hat">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle active_circle" data-title="Преимущества">
                        <a href="#benefits">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="Рекомендуем">
                        <a href="#recommend">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="О нас">
                        <a href="#about">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="Вопрос - ответ">
                        <a href="#FAQ">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="Контакты">
                        <a href="#contact">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
        
                    <div class="component_line">
                        <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3L1.60608e-07 0.613249L-1.60608e-07 6.38675L5 4L5 3ZM76 4C76.2761 4 76.5 3.77615 76.5 3.5C76.5 3.22386 76.2761 3 76 3L76 4ZM4.5 4L76 4L76 3L4.5 3L4.5 4Z" fill="#145B7A"/>
                        </svg>
                    </div>
                </div>
            </div>
        
        
            <article class="recommend" id="recommend">
               <div class="bg-img">
                 <img loading="lazy" src="https://ruden-design.ru/img/bg-img.svg" alt="">
               </div>
                <div class="absolute_text absolute_recommends text-a wow animate__fadeInLeft">Рекомендуем</div>
        
                <h3 class="recommend_title wow animate__fadeInUp">Рекомендуем</h3>
                <hr>
                <h4 class="recommend_h4 wow animate__fadeInDown">Выберите ванну, которая Вам подходит</h4>
        
                 <div class="box_card">
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://spb.shop-roca.ru/upload/resize_cache/iblock/d6f/535_450_1/vanna_roca_easy_170x75_pryamougolnaya_belaya_zru9302899_izdelie.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://spb.shop-roca.ru/upload/resize_cache/iblock/d3e/535_450_1/vanna_roca_easy_170x75_pryamougolnaya_belaya_zru9302899_izdelie_2_.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://spb.shop-roca.ru/upload/resize_cache/iblock/522/535_450_1/vanna_roca_easy_170x75_pryamougolnaya_belaya_zru9302899_izdelie_7_.jpg" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="#">Акриловая ванна VagnerPlast Kasandra</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">8 400 ₽</span>
                            <span class="product-price__old">32 700 ₽</span>
                        </div>
                        <a href="VagnerPlast_Kasandra.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://vagnerplast-online.ru/image/cache/catalog/foto21/VPBA170CAV2X-04-3-1000x1000.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://vodopadoff.ru/image/cache/catalog/akrilovue-vannu/9/doff-ru-image-catalog-products-vannu-akrilovue-vannu-AKRILOVYE_VANNY_VAGNERPLAST_CAVALLO_ULTRA_BELYY_N000291716_3-900x900.JPG" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="http://www.vagnerplast-shop.ru/files/catalog/tovs/add_normal/33_4.jpg" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="#">Акриловая ванна Vagnerplast cavallo</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">46 680 ₽</span>
                            <span class="product-price__old">54 040 ₽</span>
                        </div>
                        <a href="product2.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://radomir.ru/upload/iblock/b21/b2176bf7b139aa3d65e225309318c671.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://radomir.ru/upload/iblock/ff4/ff4c80464fc3ebccec1f39ca9bb8d434.png" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://radomir.ru/upload/iblock/531/5310a83e791dd0486ee55b202a5b8b39.png" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="#">Акриловая ванна Радомир Николь</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">24 270 ₽</span>
        <!--                    <span class="product-price__old">194 578 ₽</span>-->
                        </div>
                        <a href="Radomir_Nicole.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://radomir.ru/upload/iblock/d21/nqigk0pkl2dx63inqa07mzb4zknuk8zt.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://radomir.ru/upload/iblock/440/440c1c9cc3879b5a7747b5d7446ac6cd.png" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://radomir-online.ru/image/magictoolbox_cache/2a7509832adc81dcc8362518a7f5d4ec/2/5/2589_product/original/297893426/3445224.JPG" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="#">Акриловая ванна  Радомир Ирма</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">30 570 ₽</span>
        <!--                    <span class="product-price__old">194 578 ₽</span>-->
                        </div>
                        <a href="Radomir_Irma.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture><img src="https://vagnerplast-online.ru/image/cache/catalog/foto21/VPBA170CAV2X-04-3-1000x1000.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture><img src="http://www.aquatek-rf.ru/upload/resize_cache/iblock/4e4/555_388_2/01_oberon_3-4.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture><img src="http://www.aquatek-rf.ru/upload/iblock/8fb/Oberon.jpg" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="#">Акриловая ванна Акватек Оберон</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">23 460 ₽</span>
                            <span class="product-price__old">31 280 ₽</span>
                        </div>
                        <a href="Aquatek_Oberon.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture><img src="https://san123.ru/wa-data/public/shop/products/90/29/12990/images/42098/42098.970.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture><img src="http://onlysanteh.ru/sites/default/files/5b64eca7f20263093d27c963.jpg" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="#">Чугунная ванна Roca Continental</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">40 970 ₽</span>
                        </div>
                        <a href="Roca_Continental.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://estet-online.ru/assets/images/products/68/5.jpg" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://estet-online.ru/assets/images/products/77/vanna-delta-1.jpg" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="Estet_Delta.html">Эстет Дельта</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">36 140 ₽</span>
                        </div>
                        <a href="product7.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                    <article class="product wow animate__zoomIn">
                        <a href="#" class="product__image">
                            <div class="product__switch image-switch">
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://www.jacobdelafon.ru/sites/default/files/styles/product_fiche_zoom/public/ambience-products/SOISSONS_ambiance_01.tif.jpeg?itok=jar0n5HU" alt=""> </picture></div>
                                </div>
                                <div class="image-switch__item">
                                    <div class="image-switch__img"><picture>       <img src="https://santehnika-online.ru/cdn-cgi/image/width=1000,height=1000/upload/iblock/1d5/1d5ac5c7e4b75e6ae2aa649d079ee9f9.JPG" alt=""> </picture></div>
                                </div>
                            </div>
                            <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                        </a>
                        <h3 class="product__title">
                            <a href="#">Чугунная ванна Jacob Delafon soissons</a>
                        </h3>
                        <div class="product__props">
                            <span class="product__rating">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                    />
                                </svg>
                                4,5
                            </span>
                        </div>
                        <div class="product__info">
                            <span class="product__term">Артикул: 879876</span>
                        </div>
                        <div class="product__price product-price">
                            <span class="product-price__current">46 710 ₽</span>
                            <span class="product-price__old">52 560 ₽</span>
                        </div>
                        <a href="JacobDelafon_soissons.html"><button class="product__btn">Подробнее</button></a>
                    </article>
        
                </div>
        
                <div class="recommend_icon-ball icon-ball">
                    <div class="component_line">
                        <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4L1 3ZM72 4L77 6.38676L77 0.613253L72 3L72 4ZM1 4L72.5 4L72.5 3L1 3L1 4Z" fill="#145B7A"/>
                        </svg>
                    </div>
        
                    <div class="component_circle " data-title="Главное">
                        <a href="#hat">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="Преимущества">
                      <a href="#benefits">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                          </svg>
                      </a>
                    </div>
                    <div class="component_circle active_circle" data-title="Рекомендуем">
                        <a href="#recommend">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="О нас">
                        <a href="#about">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="Вопрос - ответ">
                        <a href="#FAQ">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
                    <div class="component_circle" data-title="Контакты">
                        <a href="#contact">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                            </svg>
                        </a>
                    </div>
        
                    <div class="component_line">
                        <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3L1.60608e-07 0.613249L-1.60608e-07 6.38675L5 4L5 3ZM76 4C76.2761 4 76.5 3.77615 76.5 3.5C76.5 3.22386 76.2761 3 76 3L76 4ZM4.5 4L76 4L76 3L4.5 3L4.5 4Z" fill="#145B7A"/>
                        </svg>
                    </div>
                </div>
        
                <a href="catalod.html">
                    <div class="recommend_see-more">
                        <span>Показать всё</span><svg width="23" height="8" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM22.3536 4.35355C22.5488 4.15829 22.5488 3.84171 22.3536 3.64645L19.1716 0.464466C18.9763 0.269204 18.6597 0.269204 18.4645 0.464466C18.2692 0.659728 18.2692 0.976311 18.4645 1.17157L21.2929 4L18.4645 6.82843C18.2692 7.02369 18.2692 7.34027 18.4645 7.53553C18.6597 7.7308 18.9763 7.7308 19.1716 7.53553L22.3536 4.35355ZM1 4.5H22V3.5H1V4.5Z" fill="#145B7A"/></svg>
                    </div>
                </a>
        
        
        
            </article>
            <div class="recommend_box-price">
                <div class="recommend_box-price__wrapper">
                    <div class="recommend_box-text">
                        <h5 class="recommend_price-title wow animate__flipInX">
                            Узнайте стоимость Вашей ванны
                        </h5>
                        <h6 class="recommend_price-text wow animate__flipInX">
                            Введите Ваш номер телефона
                        </h6>
                        <p class="recommend-text wow animate__flipInX">
                            После заявки, наш оператор свяжется
                            с вами для того, чтобы уточнить подробности установки
                            гидромассажа в вашу ванну.
                        </p>
                    </div>
                    <div class="recommend_box-input wow animate__zoomIn">
                      <input type="tel" id="phone" name="phone"  pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" required placeholder="+7 (900) 999-99-99" value="+7">
                      <button class="submit_phone" id="wow animate__zoomIn">Отправить</button>
                    </div>
                </div>
            </div>
            <h3 class="recommend_title ab_title " id="about">О нас</h3>
            <div class="absolute_text absolute_aboutUs text-a">
              <p>О нас</p>
            </div>
            <article class="aboutUs" >
              <div class="aboutUs__wrapper">
                <h3>Наша философия</h3>
                <span></span>
                <p>
                    Наша философия - помочь <i class="blue">каждому</i> клиенту в подборе ванны с дополнительным оборудованием. Если на рынке готовых комплектаций гидромассажа нет той, что вам подходит, мы всегда готовы создать что-то новое именно для Вас! В <i class="blue">любую</i> ванну, представленную в нашем магазине, можно врезать <i class="blue">любые</i> гидро- и аэрофорсунки!
                </p>
              </div>
            </article>
            <div class="aboutUs_icon-ball icon-ball">
                <div class="component_line">
                    <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4L1 3ZM72 4L77 6.38676L77 0.613253L72 3L72 4ZM1 4L72.5 4L72.5 3L1 3L1 4Z" fill="#145B7A"/>
                    </svg>
                </div>
        
                <div class="component_circle " data-title="Главное">
                    <a href="#hat">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                        </svg>
                    </a>
                </div>
                <div class="component_circle" data-title="Преимущества">
                    <a href="#benefits">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                        </svg>
                    </a>
                </div>
                <div class="component_circle" data-title="Рекомендуем">
                    <a href="#recommend">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                        </svg>
                    </a>
                </div>
                <div class="component_circle active_circle" data-title="О нас">
                    <a href="#about">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                        </svg>
                    </a>
                </div>
                <div class="component_circle" data-title="Вопрос - ответ">
                    <a href="#FAQ">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                        </svg>
                    </a>
                </div>
                <div class="component_circle" data-title="Контакты">
                    <a href="#map">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)" fill="#145B7A"/>
                        </svg>
                    </a>
                </div>
        
                <div class="component_line">
                    <svg width="77" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L1.60608e-07 0.613249L-1.60608e-07 6.38675L5 4L5 3ZM76 4C76.2761 4 76.5 3.77615 76.5 3.5C76.5 3.22386 76.2761 3 76 3L76 4ZM4.5 4L76 4L76 3L4.5 3L4.5 4Z" fill="#145B7A"/>
                    </svg>
                </div>
            </div>
        
            <article class="answer" id="FAQ">
              <div class="absolute_text absolute_answer text-a">Вопрос - ответ</div>
              <h3 class="recommend_title ab_title" id="about">Вопрос - ответ</h3>
              <div class="answer__wrapper">
                <div class="answer__table">
                  <div class="answer-accordion accor wow animate__backInLeft">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>Чем отличаются материалы ванн?</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        Ванны бывают из разных материалов таких как: акрил, чугун и сталь
                      </p>
                      <p>
                        Акриловые ванны имеют небольшой вес - 15-20 кг. Вода остывает медленнее, чем в чугунных ваннах. Так как акрил является звукопоглощающим материалом, ванна издаёт глухой звук. При появлении царапин или других повреждений, поддаются реставрационным работам, которые можно выполнить и своими руками. Бывают разных форм благодаря пластичности материала.
                      </p>
                      <p>
                        Чугунные ванны имеют большой вес – от 100 до 150 кг. Процесс набора воды происходит довольно тихо, в отличие от стальных ванн. Температура воды в них снижается на 5-10°C за час. Из-за непластичных свойств материала из чугуна делают только прямоугольные и овальные ванны. При появлении царапин или других повреждений восстановить поверхность эмали, хоть и сложно, но возможно.
                      </p>
                      <p>
                        Стальные ванны имеют небольшой вес – от 30 до 40 кг. Образование значительного шума при наполнении ванны водой. Вода остывает быстро при комнатной температуре воздуха, а зимой — в течение 10-15 минут. Имеют разные
                        формы. Ванна стойкая к повреждениям и царапинам,
                        но восстановить поврежденную поверхность ванны очень сложно.
                      </p>
        
        
                    </div>
                    <div class="answer-accordion__bg"></div>
                  </div>
                  <div class="answer-accordion accor wow animate__backInLeft">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>В какую ванну можно встроить гидромассаж?</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        Гидромассаж можно встроить в любую ванну по форме и по материалу. Но повышенным спросом пользуются ванны из акрила, чугуна и камня.
                      </p>
        
        
                    </div>
                    <div class="answer-accordion__bg"></div>
                  </div>
                  <div class="answer-accordion accor wow animate__backInLeft">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>Можно ли установить гидромассаж в вашу ванну?</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        Да можно. Свяжитесь по данному вопросу с нашим менеджером.
                      </p>
        
                    </div>
                     <div class="answer-accordion__bg"></div>
                  </div>
                  <div class="answer-accordion accor wow animate__backInLeft">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>Как ухаживать за ванной?</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        Акриловая ванна:
                      </p>
                      <p>
                        Очищается обычным мылом, нанесенным на мягкую тряпочку или губку. Прекрасно справятся с задачей любые неагрессивные препараты для мытья посуды. Акрил нельзя тереть жесткими щетками с применением чистящих веществ, так называемых абразивных материалов. Нельзя выплескивать в ванну ацетон, разбавители для красок, бензин, сосновый скипидар, уксус, лимонную кислоту, перекись водорода, хлор и подобные им составы. А также растворители и очищающие средства, относящиеся к химическим классам кетонов, разбавленные фтористоводородные и цианистоводородные кислоты, галогеносодержащие и хлорированные углеводороды (дихлорэтан, хлороформ), альдегиды, бензол, трихлорэтилен. Нежелательно ополаскивать ванну кипятком – допустимая температура воды не более 45°С .
                      </p>
                      <p>
                        Чугунная ванна:
                      </p>
                      <p>
                        После каждого приема ванны вытирайте её мягкой тканью насухо. Небольшие загрязнения удаляйте мягкой губкой, смоченной в растворе обычного мыла. Более существенные загрязнения можно удалить, растворив 200 мл уксуса в полной
                        ванне теплой воды. Оставьте раствор на три часа, а затем ополосните ванну. Не используйте средства с концентрированными кислотами, чистящие средства с крупными абразивными частицами, металлические щетки.
                      </p>
                      <p>
                        Устранить пятна ржавчины, и известковый налет помогут специальные средства.
                      </p>
                      <p>
                        Стальная ванна:
                      </p>
                      <p>
                        Избегайте перепадов температур, так как может произойти растрескивание эмали. Никогда не используйте для очистки поверхности ванны абразивные вещества, средства с кислотами, металлические щетки, твердые губки. После каждого использования ванну нужно вытирать досуха, так как застаивание воды на ее дне может привести к образованию известкового налета, пожелтению и выцветанию эмали.
                      </p>
                    </div>
                     <div class="answer-accordion__bg"></div>
                  </div>
                </div>
                <div class="answer__table">
                  <div class="answer-accordion accor wow animate__backInRight">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>Отличия гидромассажных систем разных производителей</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        Существует всего 3 гидромассажных системы: MAC (Китай), Sirem (Франция), Koller (Австрия). Отличаются они исключительно двумя параметрами, а именно: размерами и шумом. Koller - самые тихие и маленькие системы, но они достаточно дорогие и редко бывают в наличии. Sirem немного проигрывают в шуме и занимаемом месте Австрийским конкурентам, но чуть лучше относительно MAC. Последние являются лидерами рынка в странах СНГ, т.к. они самые сбалансированные по соотношению цены и качества. 
                      </p>
        
        
        
                    </div>
                    <div class="answer-accordion__bg"></div>
                  </div>
                  <div class="answer-accordion accor wow animate__backInRight">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>Есть ли противопоказания гидромассажа?</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        Да есть:
                      </p>
                      <ul>
                        <li>Сюда включаются любые заболевания в острой стадии, туберкулез, тромбозы и кровоизлияния.</li>
                        <li>Также врачи не советуют принимать джакузи при кожных воспалениях и инфекциях.</li>
                        <li>Противопоказан гидромассаж для людей со злокачественными и доброкачественными новообразованиями.</li>
                        <li>Серьёзными заболеваниями сердечно-сосудистой системы (гипертония 3-й степени, инфаркт миокарда, ишемия 2-3-й степени и др.).</li>
                      </ul>
                      <p>
                        Чтобы не нанести вред, рекомендуют начинать с 15 минут, а дальше наращивать время процедуры до получаса
                      </p>
                    </div>
                    <div class="answer-accordion__bg"></div>
                  </div>
                  <div class="answer-accordion accor wow animate__backInRight">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>Дополнительные опции гидромассажа?</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        При заказе ванны с гидромассажем можно добавить дополнительные опции:
                      </p>
                      <ul>
                        <li>Массаж спины – это набор форсунок, расположенных на задней поверхности ванны;</li>
                        <li>Гидромассаж ступней – это набор форсунок, расположенных на стенке ванны таким образом, чтобы струи бурлящей воды попадали на стопы, когда вы находитесь в естественном расслабленном положении;</li>
                        <li>Аэромассаж – это отдельная система. Специальные форсунки и компрессор подают тысячи воздушных пузырьков в ванну с водой, создают неповторимое ощущение легких поглаживаний, нежно стимулируют нервные окончания, тонизируют и преображают кожу, обогащают ее кислородом;</li>
                        <li>Подогрев воды – эта опция автоматически включается при работе гидронасоса и сама отключается без воды, позволяет поддерживать заданную температуру воды;</li>
                        <li>Встроенная подсветка</li>
                        <li>Озонатор – это дополнительная функция аэрокомпрессора для обеззараживания воздуха и поверхностей в ванной.</li>
                      </ul>
        
        
                    </div>
                    <div class="answer-accordion__bg"></div>
                  </div>
                  <div class="answer-accordion accor wow animate__backInRight">
                    <div class="answer-accordion__title accor-title">
                      <div class="answer-accordion__title_left">
                        <p class="answer-accordion__icon">?</p>
                        <p>Как ухаживать за гидромассажем?</p>
                      </div>
                      <span class="arrow"></span>
                    </div>
                    <div data-simplebar class="answer-accordion__content accor-content">
                      <p>
                        Для дезинфекции гидромассажной системы наполнить ванну водой t – 20 градусов выше уровня форсунок, добавить в воду 1,5 литра 5-процентного раствора хлорки или дезинфицирующего средства. Включить на 10 минут. Выключить, слить воду. Снова наполнить ванну водой и включить на несколько секунд для вымывания остатков средства. Слить воду и ополоснуть из душа.
                      </p>
                      <p>
                        Чистка гидромассажной системы должна производится не реже одного раза в месяц:
                      </p>
                      <p>1. Наполнить акриловую гидромассажную ванну теплой водой.</p>
                      <p>2. Развести жидкое моющее средство (в соответствии со способом применения, инструкцией моющего средства) и запустить гидромассажную установку на ≈ 5 минут.</p>
                      <p>3. После этого выключить гидромассажную систему и дать постоять воде 10 минут.</p>
                      <p>4. Слить воду из акриловой ванны.</p>
                      <p>5. Повторно наполнить акриловую ванну водой и включить гидромассаж на 5 минут.</p>
                      <p>6. Слить воду и выполнить чистку акриловой ванны.</p>
        
        
        
                    </div>
                    <div class="answer-accordion__bg"></div>
                  </div>
                </div>
              </div>
        
              <div class="answer-bg">
                <div class="answer-bg__left">
                  <img loading="lazy" class="bg-left_img1" src="https://ruden-design.ru/img/question-icon.svg" alt="">
                  <img loading="lazy" class="bg-left_img2" src="https://ruden-design.ru/img/question-icon.svg" alt="">
                  <img loading="lazy" class="bg-left_img3" src="https://ruden-design.ru/img/question-icon.svg" alt="">
                </div>
                <div class="answer-bg__right">
                  <img loading="lazy" class="bg-right_img1" src="https://ruden-design.ru/img/question-icon.svg" alt="">
                  <img loading="lazy" class="bg-right_img2" src="https://ruden-design.ru/img/question-icon.svg" alt="">
                  <img loading="lazy" class="bg-right_img3" src="https://ruden-design.ru/img/question-icon.svg" alt="">
                </div>
              </div>
            </article>
        
            <div class="contacts wow animate__zoomIn" id="contact">
              <div class="contacts__wrapper">
                <h3 class="contacts__title wow animate__zoomIn">Если вы <span>не нашли</span>, что искали - свяжитесь с нами!
                У нас это точно есть!</h3>
                <div class="contacts__body">
                  <div class="contacts__table wow animate__zoomIn">
                    <p>Вы можете позвонить нам напрямую</p>
                    <div class="contacts__item">
                      <a class="link-tell" href="tel:+78129827020">
                      <i class="contacts__item_call wow animate__zoomIn">
                        <img loading="lazy" src="https://ruden-design.ru/img/tell.svg" alt="">
                      </i> +7 (950) 226 88 22</a>
                    </div>
                  </div>
                  <div class="contacts__table wow animate__zoomIn">
                    <p>Вы можете написать нам на почту</p>
                    <div class="contacts__item">
                      <a href="mailto:info@badenshop.ru">info@badenshop.ru</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="map" id="map">
                <div class="map__wrapper">
                   <div class="map_box">
                      <div class="absolute_text absolute_map wow animate__zoomIn">ТК “МУЛЬТИПЛЕКС”</div>
                      <div class="map_box-content">
                          <picture>
                              <img class="wow animate__zoomIn" loading="lazy" href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%AE%D0%B6%D0%BD%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5&oid=b%3A1370897124&noreask=1&serp-reload-from=companies" src="https://ruden-design.ru/img/map_1.png" alt="">
                          </picture>
                          <div class="map_box-text wow animate__zoomIn">
                              <h3>ТК "МУЛЬТИМЕКС"</h3>
                              <a class="geo" href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%AE%D0%B6%D0%BD%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5&oid=b%3A1370897124&noreask=1&serp-reload-from=companies">
                                  Санкт-Петербург,
                                  <br>
                                  ш. Южное шоссе д.37 зал 2 модуль 9A
                              </a>
                              <a class="tell">
                                  +7 (950) 226 33 11
                                  <br>
                                  vanna-baden@yandex.ru
                              </a>
                          </div>
                      </div>
                  </div>
                    <div class="map_box">
                        <div class="absolute_text absolute_map amap">ТК “ЗАГОРОДНЫЙ </div>
                        <div class="map_box-content">
                            <picture>
                                <img loading="lazy" href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20140%D0%95&oid=b%3A1102620193&noreask=1&serp-reload-from=companies" class="wow animate__zoomIn" src="https://ruden-design.ru/img/map_2.png" alt="">
                            </picture>
                            <div class="map_box-text wow animate__zoomIn">
                                <h3>ТК "ЗАГОРОДНЫЙ ДОМ"</h3>
                                <a class="geo" href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20140%D0%95&oid=b%3A1102620193&noreask=1&serp-reload-from=companies" class="geo">
                                    Санкт-Петербург
                                    <br>
                                    Ленинский проспект, 140Е модуль 301А
                                </a>
                                <a class="tell">
                                    +7 (950) 226 88 22
                                    <br>
                                    vanna-baden@yandex.ru
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="map_box">
                        <div class="absolute_text absolute_map amap">ТЦ "MebelWOOD"</div>
                        <div class="map_box-content">
                            <picture>
                                <img loading="lazy" href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20140%D0%95&oid=b%3A1102620193&noreask=1&serp-reload-from=companies" class="wow animate__zoomIn" src="https://ruden-design.ru/img/map_3.png" alt="">
                            </picture>
                            <div class="map_box-text wow animate__zoomIn">
                                <h3>ТЦ "MebelWOOD"</h3>
                                <a class="geo" href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20140%D0%95&oid=b%3A1102620193&noreask=1&serp-reload-from=companies" class="geo">
                                    Санкт-Петербург
                                    <br>
                                    Дальневосточный пр. 14 модуль 32/34, 
                                    <br>
                                    -1 этаж
                                </a>
                                <a class="tell">
                                    +7 (950) 226 33 22
                                    <br>
                                    vanna-baden@yandex.ru
                                </a>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
        <footer>
                <div class='footer__wrapper'>
                    <div class='footer_box-right logo'>
                        <a href="https://gidro-vanna.com/index.html " ></a>
                        <!--<img src='img/Group%2055.png'> <span>© 1990–2021. Компания «Баден». Все права защищены.</span>-->
                    </div>
                    <div class='footer_box-left'>
                        <div class='footer_box-text'>
                          <h3>ТК "МУЛЬТИМЕКС"</h3>
                          <a class="geo" href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%AE%D0%B6%D0%BD%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5&oid=b%3A1370897124&noreask=1&serp-reload-from=companies">
                            Санкт-Петербург, Южное шоссе д.37 к.1, 2 секция, модуль 9А
                          </a>
                        </div>
                        <div class='footer_box-text'>
                          <h3>ТК "ЗАГОРОДНЫЙ ДОМ"</h3>
                            <a href="https://yandex.ru/search/?lr=2&drag_context=ZAAAAAgCEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJmQ0yychZ9T8RD9WUZB2O4z8iBQABAgQGKAA4AEACSAFiIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIm1pZGRsZV9wb3N0ZmlsdGVyX3RocmVzaGNoYWluPTAuMzliIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiIGFkZF9zbmlwcGV0PXNraV9kYXRhX3RvXzFvcmcvMS54YhthZGRfc25pcHBldD1hdmlhX3ByaWNlcy8xLnhiLGFkZF9zbmlwcGV0PWJ1c2luZXNzX2F3YXJkc19leHBlcmltZW50YWwvMS54YhxhZGRfc25pcHBldD1tYWluX2FzcGVjdHMvMS54Yh1taWRkbGVfcG9zdGZpbHRlcl90aHJlc2g9MC4zOWIdbWlkZGxlX3Bvc3RmaWx0ZXJfdGhyZXNoPTAuMzliHXJlbGV2PXNlYXJjaF90ZXh0X2V4cF9uYW1lPXYxYhJyZWxldj1yZWxldmdlbz0yMjViK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiK3JlbGV2X3JhbmtpbmdfbXNlX2Zvcm11bGE9bXNlX2ZtbDgyODgwMl9leHBiJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODM4NjU1YiZyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2ZtbDgyNTkzNWImcmVsZXZfaXJyZWxfZmlsdGVyPTEuMDppcnJlbF9mbWw4Mzg2NTViJnJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZm1sODI1OTM1YlFyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0J1c0dlb0Nob29zZS9UYWtlUnVicmljRmlyc3RTYW1lQnlSZXN1bHRzTXNlVGhyZXNob2xkPTAuMzliUXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQnVzR2VvQ2hvb3NlL1Rha2VSdWJyaWNGaXJzdFNhbWVCeVJlc3VsdHNNc2VUaHJlc2hvbGQ9MC4zOWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNjBiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUG9zdGZpbHRlci9JcnJlbFRocmVzaG9sZD0wLjU1YjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC42MGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTViMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZGRGaXhlZFRvcEdlb2pzb249MWIycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdG9wSW5zYW5lQ2hhaW5GaWx0cmF0aW9uPTFiMnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3RvcEluc2FuZUNoYWluRmlsdHJhdGlvbj0xYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlYjdyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlcXVlc3RVZ2NGb3JQb3NzaWJsZU93bmVycz10cnVlagJydZUBAAAAAJ0BzcxMPqABAagBAL0B%2FRg2D8IBD%2BT12I0FoczijQSgrKLxM%2BoBAPIBAPgBAIICKdCx0LDQtNC10L0g0YHQsNC90YLQtdGF0L3QuNC60LAg0LIg0YHQv9CxigIAkgIBMpoCBHNlcnA%3D&text=Baden%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20140%D0%95&oid=b%3A1102620193&noreask=1&serp-reload-from=companies" class="geo">
                              Санкт-Петербург,  Ленинский проспект 140Е, 3 этаж модуль 301А
                            </a>
                        </div>
                        <div class='footer_box-text'>
                          <h3>ТЦ "MebelWOOD"</h3>
                            <a href="https://yandex.ru/maps/org/mebelvud/1048377836/?ll=30.448047%2C59.910542&z=15" class="geo">
                              Санкт-Петербург,  Дальневосточный проспект 14, -1 этаж, модуль 32/34
                            </a>
                        </div>
                        <div class='footer_box-text'>
                            <h3>Связаться с нами</h3>
                            <a class='mail' href='mailto:vanna-baden@yandex.ru'>vanna-baden@yandex.ru</a>
                            <div class='tell'>
                                <a>8 950 226 88 22;</a> <a>8 950 226 88 11</a>
                            </div>
                            <!--<a class='inst'>Подпишись на наш инстаграм!</a>-->
                            <div class="footer__social">
                                <a class="inst" href="https://www.instagram.com/baden_santehnika/">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="50" height="50"
                                        viewBox="0 0 172 172"
                                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M55.04,10.32c-24.6648,0 -44.72,20.0552 -44.72,44.72v61.92c0,24.6648 20.0552,44.72 44.72,44.72h61.92c24.6648,0 44.72,-20.0552 44.72,-44.72v-61.92c0,-24.6648 -20.0552,-44.72 -44.72,-44.72zM127.28,37.84c3.784,0 6.88,3.096 6.88,6.88c0,3.784 -3.096,6.88 -6.88,6.88c-3.784,0 -6.88,-3.096 -6.88,-6.88c0,-3.784 3.096,-6.88 6.88,-6.88zM86,48.16c20.8808,0 37.84,16.9592 37.84,37.84c0,20.8808 -16.9592,37.84 -37.84,37.84c-20.8808,0 -37.84,-16.9592 -37.84,-37.84c0,-20.8808 16.9592,-37.84 37.84,-37.84zM86,55.04c-17.0624,0 -30.96,13.8976 -30.96,30.96c0,17.0624 13.8976,30.96 30.96,30.96c17.0624,0 30.96,-13.8976 30.96,-30.96c0,-17.0624 -13.8976,-30.96 -30.96,-30.96z"></path></g></g>
                                    </svg>
                                </a>
                                <a class="vk" href="https://vk.com/badenpro">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="24" height="24"
                                        viewBox="0 0 172 172"
                                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M142.72417,93.36733c-2.78067,-3.51167 -1.98517,-5.074 0,-8.213c0.03583,-0.03583 22.99067,-31.7555 25.35567,-42.51267l0.01433,-0.00717c1.17533,-3.92017 0,-6.80117 -5.68317,-6.80117h-18.80533c-4.78733,0 -6.99467,2.4725 -8.17717,5.23883c0,0 -9.57467,22.919 -23.11967,37.7755c-4.37167,4.29283 -6.39267,5.66883 -8.77917,5.66883c-1.17533,0 -3.00283,-1.376 -3.00283,-5.29617v-36.58583c0,-4.70133 -1.34017,-6.80117 -5.30333,-6.80117h-29.56967c-3.00283,0 -4.78733,2.193 -4.78733,4.2355c0,4.45767 6.7725,5.4825 7.47483,18.02417v27.21183c0,5.96267 -1.08217,7.05917 -3.483,7.05917c-6.39267,0 -21.9085,-23.01217 -31.10333,-49.34967c-1.85617,-5.10983 -3.66933,-7.17383 -8.4925,-7.17383h-18.8125c-5.36783,0 -6.45,2.4725 -6.45,5.23883c0,4.88767 6.39267,29.18983 29.72733,61.2965c15.55167,21.91567 37.453,33.79083 57.37633,33.79083c11.9755,0 13.4375,-2.63733 13.4375,-7.17383c0,-20.941 -1.08217,-22.919 4.91633,-22.919c2.78067,0 7.568,1.376 18.748,11.94683c12.77817,12.5345 14.878,18.146 22.03033,18.146h18.80533c5.36067,0 8.07683,-2.63733 6.5145,-7.84033c-3.57617,-10.9435 -27.74217,-33.454 -28.8315,-34.959z"></path></g></g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
        
        
          <script src="https://ruden-design.ru/php_js/jquery-3.6.0.min.js"></script>
          <script src="https://ruden-design.ru/js/maskedInput.js"></script>
          <script src="https://ruden-design.ru/php_js/form.js"></script>
          <script src="https://ruden-design.ru/js/product.js"></script>
          <script src="https://ruden-design.ru/js/simplebar.js"></script>
          <script src="https://ruden-design.ru/js/script.js"></script>
          <script src="https://ruden-design.ru/php_js/index_phone.js"></script>
          <script src="https://ruden-design.ru/js/wow.min.js"></script>
        </body>
        </html>
        
        `
    )
}
module.exports = indexHTML;