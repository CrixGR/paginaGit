const staticZay = "Zay-site-v1"
const assets = [
    "/",
    "index.html",
    "assets/css/bootstrap.min.cs",
    "assets/css/custom.css",
    "assets/css/fontawesome.min.css",
    "assets/css/fontawesome.css",
    "assets/css/slick-theme.min.css",
    "assets/css/slick-theme.css",
    "assets/css/slick.min.css",
    "assets/css/templatemo.css",
    "assets/css/templatemo.min.css",
    "assets/js/bootstrap.bundle.min.js",
    "assets/js/custom.js",
    "assets/js/jquery-1.11.0.min.js",
    "assets/js/jquery-migrate-1.2.1.min.js",
    "assets/js/slick.min.js",
    "assets/js/templatemo.js",
    "assets/js/templatemo.min.js",
    "assets/img/about-hero.svg",
    "assets/img/ajax-loader.gif",
    "assets/img/apple-icon",
    "assets/img/banner_img_01.png",
    "assets/img/banner_img_02.png",
    "assets/img/banner_img_03.png",
    "assets/img/brand_01.png",
    "assets/img/brand_02.png",
    "assets/img/brand_03.png",
    "assets/img/brand_04.png",
    "assets/img/category_img_01.png",
    "assets/img/category_img_02.png",
    "assets/img/category_img_03.png",
    "assets/img/computadora1.png",
    "assets/img/computadora2.png",
    "assets/img/computadora3.png",
    "assets/img/computadora4.png",
    "assets/img/computadora5.png",
    "assets/img/computadora6.png",
    "assets/img/computadora7.png",
    "assets/img/feature_prod_01.jpg",
    "assets/img/favicon.ico",
    "assets/img/feature_prod_02.jpg",
    "assets/img/feature_prod_03.jpg",
    "assets/img/product_single_02.jpg",
    "assets/img/product_single_01.jpg",
    "assets/img/product_single_03.jpg",
    "assets/img/product_single_04.jpg",
    "assets/img/product_single_05.jpg",
    "assets/img/product_single_06.jpg",
    "assets/img/product_single_07.jpg",
    "assets/img/product_single_08.jpg",
    "assets/img/product_single_09.jpg",
    "assets/img/product_single_10.jpg",
    "assets/img/shop_01.jpg",
    "assets/img/shop_02.jpg",
    "assets/img/shop_03.jpg",
    "assets/img/shop_04.jpg",
    "assets/img/shop_05.jpg",
    "assets/img/shop_06.jpg",
    "assets/img/shop_07.jpg",
    "assets/img/shop_08.jpg",
    "assets/img/shop_09.jpg",
    "assets/img/shop_10.jpg",
    "assets/img/shop_11.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntill(
        caches.open(staticZay).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})