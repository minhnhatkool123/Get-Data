const puppeteer = require('puppeteer');

async function laynamepage(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const products = await page.evaluate(() => {
		let items = document.querySelectorAll('.product-item');
		let links = [];

		items.forEach((item) => {
			let url = item.querySelector('.name a').getAttribute('href');

			links.push(url);
		});
		return links;
	});
	console.log(products);
	await browser.close();
}

async function getLink() {
	await laynamepage('https://moji.vn/gau-bong-cute-pc362839.html');
}

getLink();
