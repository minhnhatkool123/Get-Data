// const cheerio = require('cheerio'); // khai báo module cheerio

// const request = require('request-promise'); // khai báo module request-promise

// request('http://www.gaugaushop.com/shop/new', (error, response, html) => { // gửi request đến trang 
//   console.log(response.statusCode); // 200, kiểm tra xem kết nối thành công không :D
// });
// const fetch = require("node-fetch");
// const endpoint = 'https://google.com'
// fetch(endpoint)
//      .then((response) => response.json())
//      .then((data) => console.log(data));

//const rp = require("request-promise");

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   //page.setViewport({ width: 1280, height:720 });
//   await page.goto('http://www.gaugaushop.com/shop/new', { waitUntil: 'networkidle2' });
//   //await page.screenshot({path: 'kenh14.png'});


//   let product = await page.evaluate(() => {
//     //let titleLinks = document.querySelectorAll('div.product-item');
//     //titleLinks = [...titleLinks];
//     //return titleLinks;
//     //let articles = titleLinks.map(link => ({
//         //price: link.getElement('product_price'),
//         //url: link.getAttribute('href')
//     //}));
//     //return articles;

//     let title=document.querySelectorAll('div[class="product_title"] > h3').innerText;
//     //let price=document.querySelector('div[class="product_price"] > span').innerText;
//     return title;

// });
//   console.log(product);
//   await browser.close();
// })();

const puppeteer = require("puppeteer");

async function getDetails(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const products = await page.evaluate(() => {
    let items = document.querySelectorAll(".col-md-11");
    let listLink = {};
    let listImage = [];
    let listColor = [];

    items.forEach(item => {
      //let url = item.querySelector('.product-img-inner a').getAttribute('href');
      //let image = item.querySelector('.product-img-inner a img').getAttribute('src');
      //let price = item.querySelector('.price_new').innerText;
      let name = item.querySelector('.product-child-right h1').innerText;
      let price = item.querySelector('.box-price-detail #price').innerText;

      let mausac = item.querySelectorAll('.product-options .group .option1 li label');//.children[0].innerText;
      mausac.forEach(asd => {
        let kool = 'http://gaugaushop.com/' + asd.getAttribute('data-image');
        listColor.push(kool);
      })

      // for(let i=0;i<mausac.childElementCount;i++){
      //   listColor.push(i);
      //   //let asd=mausac[].querySelector("li > label > img").getAttribute('src'); 
      //   //listColor.push(asd);
      // }

      //let mausac =item.querySelector('.infomation-product-detail').children[1].innerText;//.substring(11,color.length);
      //let color=mausac.substring(11,mausac.length);
      let XL = item.querySelector('.infomation-product-detail').children[3].innerText;
      let size = XL.substring(8, XL.length);

      let classImage = item.querySelectorAll('.owl-item');
      classImage.forEach(a => {
        let aItem = 'http://gaugaushop.com/' + a.querySelector('a img').getAttribute('src');
        listImage.push(aItem);
      })
      //console.log(color);
      //let mota=item.querySelector('.infomation-product-detail');
      //let color=item.getElementsByClassName('.infomation-product-detail')[1].innerText

      listLink = { name, price, colors: listColor, size, status: 0, discount: 0, category: 'Áo', type: 'Áo Kiểu Nữ', images: listImage, quantity: 5 };

    });
    return listLink;
  });
  console.log(products);
  console.log(",");
  await browser.close();
};

async function getLink() {

  // let links = [
  // 'sp/ao-caro-nu-810',
  // 'sp/ao-kieu-thuy-thu-phoi-mau-nhat-ban-826',
  // 'sp/ao-kieu-nu-tay-lo-de-thuong-751',
  // 'sp/ao-kieu-caro-nu-ho-vai-824',
  // 'sp/ao-caro-nu-810',
  // 'sp/ao-kieu-nu-2-day-hot-summer-782',
  // 'sp/ao-kieu-nu-2-day-mua-he-783',
  // 'sp/ao-kieu-nu-babydoll-bigsize-771',
  // 'sp/ao-kieu-nu-ren-morigirl-778',
  // 'sp/ao-kieu-nu-hai-day-trai-thom-756',
  // 'sp/ao-kieu-nu-tay-beo-749'];
  let result = [];
  let links = [
    // 'sp/ao-kieu-thuy-thu-phoi-mau-nhat-ban-826',
    // 'sp/ao-kieu-nu-tay-lo-de-thuong-751',       
    // 'sp/ao-kieu-caro-nu-ho-vai-824',
    // 'sp/ao-caro-nu-810',
    // 'sp/ao-kieu-nu-2-day-hot-summer-782',       
    // 'sp/ao-kieu-nu-2-day-mua-he-783',
    // 'sp/ao-kieu-nu-babydoll-bigsize-771',       
    //'sp/ao-kieu-nu-ren-morigirl-778',
    'sp/ao-khoac-jean-nu-505',
    'sp/ao-thun-nu-nhat-ban-in-tho-f05',      
    'sp/ao-khoac-kaki-nu-play-games-ak17',    
    'sp/ao-khoac-du-2-lop-tui-hop-ak16',      
    'sp/ao-thun-tay-dai-hinh-gau-k204',       
    'sp/ao-so-mi-ca-vat-nu-sinh-nhat-925',    
    'sp/ao-so-mi-co-beo-theu-gau-914',        
    'sp/ao-so-mi-tay-ngan-cot-no-917',        
    'sp/ao-so-mi-cong-so-theu-co-gai-936',    
    'sp/ao-so-mi-tay-ngan-ca-vat-933',        
    'sp/ao-khoac-kaki-tui-hop-ak10',
    'sp/ao-khoac-kaki-i-love-cats-ak09',      
    'sp/ao-thun-co-tron-phong-cach-nhat-k260',
    'sp/ao-thun-co-tron-gau-bear-k268',       
    'sp/ao-thun-thuy-thu-tay-dai-k267',       
    'sp/ao-thun-hoodie-gau-nau-k263',
    'sp/ao-thun-croptop-purple-rut-eo-k261',
    'sp/ao-thun-croptop-theu-buom-k271',
    'sp/ao-khoac-kaki-nu-de-thuong-995',
    'sp/ao-khoac-kaki-tui-hop-ak14',
    'sp/ao-khoac-kaki-meo-xinh-ak13',
    'sp/ao-khoac-du-nhe-phan-mau-ak03',
    'sp/ao-khoac-du-nhe-di-nang-ak05',
    'sp/ao-khoac-kaki-nu-lovely-cat-904',
    'sp/ao-thun-nu-gia-yem-tho-cam-k265',
    'sp/ao-thun-co-tron-phoi-mau-k264',
    'sp/ao-thun-co-tron-theu-chuon-chuon-k262',
    'sp/ao-thun-hoodie-trai-dau-nhat-ban-k257',
    'sp/ao-thun-co-tron-meow-k269',
    'sp/ao-thun-hoodie-love-you-love-me-k259',
    'sp/ao-khoac-kaki-nu-tui-hop-hq-ak12',
    'sp/ao-khoac-len-croptop-nut-mau-ak15',
    'sp/ao-khoac-kaki-phan-mau-hq-ak07',
    'sp/ao-so-mi-cong-so-meo-ca-939',
    'sp/ao-so-mi-tay-ngan-cherry-940',
    'sp/ao-khoac-kaki-mang-to-dang-suong-ak11',
    'sp/ao-so-mi-thuy-thu-form-rong-938',
    'sp/ao-kieu-thuy-thu-phoi-mau-nhat-ban-826',
    'sp/ao-so-mi-cong-so-cherry-930',
    'sp/ao-so-mi-no-xinh-hq-935'
  ]
  for (let i = 0; i < links.length; i++) {
    let url = links[i];
    let a = await getDetails("http://gaugaushop.com/" + url);
  }
  //console.log(result)
}

getLink();

