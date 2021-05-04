const puppeteer = require("puppeteer");

async function laynamepage (url)  {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const products = await page.evaluate(() => {
    let items = document.querySelectorAll(".product_index");
    let links = [];

    items.forEach(item => {
      let url = item.querySelector('.product-img-inner a').getAttribute('href');
     
      links.push(url);
    });
    return links;
  });
  console.log(products);
  await browser.close();
};

async function getLink(){

    await laynamepage ('http://www.gaugaushop.com/shop/ao-kieu')
    //   for(let i=1;i<2;i++){
    //     let url = 'http://www.gaugaushop.com/shop/ao-thun?page='+i+'&status=0';
    //     let a=await laynamepage(url);
    //   } 
    
}

getLink();