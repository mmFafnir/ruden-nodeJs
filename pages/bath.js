// const cutStr = require('../routes/routes');
const bathHTML = (obj) => {
    console.log(obj)
    // console.log(cutStr('sadsad1'))
   const html = `<!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${obj.title}</title>
      <link rel="stylesheet" href="css/modal.css">
      <link rel="stylesheet" href="css/fancybox.css">
      <link rel="stylesheet" href="css/font.css">
      <link rel="stylesheet" href="css/basket.css">
      <link rel="stylesheet" href="css/swiper.css">
      <link rel="stylesheet" href="product/css/style.css">
      <link rel="stylesheet" href="product/css/slider.css">
      <link rel="stylesheet" href="product/css/product.css">
    
    </head>
    <body class="product-page" data-id="${obj.vendoreCode}">
         <header class="header header_color">
           <div class="header__wrapper">
              <a href="index.html" class="logo">
                
              </a>
              <nav>
                  <ul class="menu">
                      <li><a href="index.html">Главное</a></li>
                      <li><a href="catalod.html">Ассортимент</a></li>
                      <li><a href="accordion.html">Гидромассаж</a></li>
                      <li><a href="basket.html"><i>Корзина</i><span class="cart__quantity">0</span></a></li>
                  </ul>
              </nav>
              <div class="number">
                  <p>+7 (950) 226 88 22</p>
              </div>
              <div class="burger-menu">
                <div class="burger-menu__nav">
                  <a href="index.html" class="burger-menu__link">Главное</a>
                  <a href="catalod.html" class="burger-menu__link">Ассортимент</a>
                  <a href="accordion.html" class="burger-menu__link">Гидромассаж</a>
                  <a href="basket.html" class="burger-menu__link">Корзина</a>
                </div>
                <div class="burger-menu__footer">
                  <div class="burger-menu__footer_block">
    
                  </div>
                  <p class="burger-menu__footer_tel">+7 (950) 226 88 22</p>
                </div>
              </div>
              <div class="burger-icon "><span></span></div>
           </div>
    
        </header>
      <main>
        <div class="first-block">
          <img src="img/triangle.svg" alt="">
        </div>
        <div class="container">
          <div class="card" >
            <div class="card-slider">
              <div class="card-slider__nav slider-nav">
    
              </div>
              <div class="card-slider__block slider-block">
                <div class="swiper-wrapper">
    
    
                </div>
              </div>
            </div>
            <div class="card-info">
             <div class="vendor">
             <span>Артикулы:</span>
              <span class="vendor__value"></span>
             </div>
              <h1 class="title"></h1>
              <p class="desc"></p>
              <div class="price">
                <span class="price__current price-box"></span>
                <span class="price__old"></span>
              </div>
              <div class="box_button">
                <a id='linkAddTo' href="#"><button class="button btn_1">В корзину</button></a>
                <button data-modal="buyOneClick" class="button btn_2 modal-open">Купить в 1 клик</button>
              </div>
              <div class="size">
    
              </div>
    
            </div>
          </div>
    
    
        </div>
        <div class="related form-related ">
          <div class="related__wrapper ">
    
    
          </div>
        </div>
      </main>
    
    
      <div data-modal='buyOneClick' class="modal modal-order">
        <div class="modal__wrapper">
         <div class="modal__body">
         <div class="modal__close"></div>
          <h2 class="modal-order__title">Информация о заказе</h2>
           <div class="product-item" >
             <div class="products_up">
                 <div class="picture_up">
                 </div>
                 <hr>
                 <div class="product_box-right">
                     <div class="title_product"></div>
                     <div class="box_compl">
                         <div class="price_product price-box"></div>
    <!--
                         <div class="number_product">
                            <button data-id="${obj.vendoreCode}" class=" btnPlus"></button>
                            <span class="quantity-value">1</span>
                            <button data-id="${obj.vendoreCode}" class="btnMinus"></button>
                          </div>
    -->
                     </div>
                      <div class="product__info">
                        <span class="product__info article">
                            Артикул: <span class="article__value"></span>
                        </span>
                    </div>
                     <div class="give_box">
                         <img src="img/подарок.png" alt="">
                         <a href=""><button id='submit' type="submit">Выбрать подарок</button></a>
                     </div>
                 </div>
             </div>
    
             <a class="add_product  add_product-related accor">
                <h3 class="accor-title">
                  Сопутствующие товары
                  <span class="arrow"></span>
                </h3>
                <div class="accor-content accor-related">
                   <div class="form-related form-related_modal">
    
                   </div>
    
                </div>
             </a>
            </div>
            <div class="num ber_two">
                    <h3>Укажите контактную информацию</h3>
                    <div class="box_form">
                        <form id="form" method="POST" action="php_js/email.php">
                            <p>Как вас зовут? * </p>
                            <input form="form" name="name" type="text">
                        </form>
                        <span>
                            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9H22V7H1V9Z" fill="#145B7A"/>
                            </svg>
                        </span>
                        <form id="form" method="POST" action="php_js/email.php">
                            <p>Телефон *</p>
                            <input form="form" name="phone" type="text">
                        </form>
                        <span>
                            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9H22V7H1V9Z" fill="#145B7A"/>
                            </svg>
                        </span>
                        <form id="form" method="POST" action="php_js/email.php">
                            <p>Email *</p>
                            <input form="form" name="email" type="text">
                        </form>
                    </div>
    
                </div>
                <div class="number_three">
                <h3>Выберите удобный способ получения</h3>
                <!-- tab -->
                <div class="box_price-delivery">
                    <form id="form" method="POST" action="php_js/email.php">
                       <div class="input-delivery">
                         <input data-price="0" form="form" type="radio" checked name="delivery" value="Самовывоз" id="pickup">
                         <label for="pickup"><img src="img/cart.svg" alt=""><span>Самовывоз</span></label>
                       </div>
                       <div class="input-delivery">
                         <input data-price="1000" form="form" type="radio" checked name="delivery" value="Доставка" id="delivery">
                         <label for="delivery"><img src="img/car.svg" alt=""><span>Доставка</span></label>
                       </div>
                    </form>
                </div>
                <div class="box_delivery">
                  <h4>Доставка курьером</h4>
                  <div class="price_delivery"></div>
                </div>
    
                <p>Общая стоимость заказа:</p> <p class="info_price"></p>
    
                <button type="submit" class="modal-order__btn">Оформить заказ</button>
                
                <p class="success">Данные отправлены! Наш менеджер скоро с вами свяжется.</p>
            </div>
         </div>
    
        </div>
    
      </div>
    
    
    <div data-modal="addProduct" class="modal related-modal ">
      <div class="related-modal__wrapper modal__wrapper">
        <div class="modal__body">
          <div class="related-modal__close modal__close"></div>
          <div class="modal__content related-modal__content">
    
          </div>
        </div>
      </div>
    </div>
    
    
    
    <div class="aside-modal accor-related">
      <div class="aside-modal__close aside-modal__mask"></div>
      <div class="aside-modal__wrapper">
        <div class="aside-modal__close modal__close"></div>
        <div class="aside-modal__content">
             
        </div>
      </div>
    </div>
    
    <div class="aside-modal accor-related">
      <div class="aside-modal__close aside-modal__mask"></div>
      <div class="aside-modal__wrapper">
        <div class="aside-modal__close modal__close"></div>
        <div class="aside-modal__content">
             
        </div>
      </div>
    </div>   
    
      <script defer src="js/addToCart.js"></script>
      <script defer src="js/jquery-2.1.1.js"></script>
      <script defer src="js/swiper.js"></script>
      <script defer src="js/fensybox.js"></script>
      <!-- <script defer src="product/js/product.js"></script> -->
      <script defer src="js/script.js"></script>
      <script src="php_js/jquery-3.6.0.min.js"></script>
      <script src="js/maskedInput.js"></script>
      <script src="php_js/form.js"></script>
    </body>
    </html>`
    
    return html
}
module.exports = bathHTML;