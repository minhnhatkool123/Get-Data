const puppeteer = require('puppeteer');

async function getDetails(url, id) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

	const products = await page.evaluate(() => {
		let items = document.querySelectorAll('.mains');
		let listLink = {};
		let listImage = [];
		let listColor = [];

		let listDiscount = [30000, 50000, 15000, 20000, 25000];

		//let saveIdDiscount = [];

		let listSize = [];

		let oneImage = null;

		items.forEach((item) => {
			let name = item.querySelector('.title').innerText;
			let price = item.querySelector('.product-price .price').innerText;
			price = parseFloat(price.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''));

			//lay image
			let UUU = item.querySelectorAll('.owl-stage-outer');
			let classImage = UUU[0].getElementsByTagName('img');

			if (classImage.length === 0) {
				let aItem = classImage.getAttribute('src');
				listImage.push({ imageLink: aItem, productId: 1 });
			} else {
				for (let jj = 0; jj < classImage.length; jj++) {
					let aItem = classImage[jj].getAttribute('src');
					listImage.push({ imageLink: aItem, productId: 1 });
				}
				//classImage?.forEach((abc) => {});
			}

			//lay color
			if (classImage.length === 1) {
				listColor.push({ colorLink: classImage[0].getAttribute('src') });
			} else if (classImage.length === 2) {
				listColor.push({ colorLink: classImage[0].getAttribute('src') });
				listColor.push({ colorLink: classImage[1].getAttribute('src') });
			} else {
				for (let i = 1; i < classImage.length; i++) {
					listColor.push({
						colorLink: classImage[classImage.length - i].getAttribute('src'),
					});
				}
				// listColor.push({
				// 	colorLink: classImage[classImage.length - 2].getAttribute('src'),
				// });
				// listColor.push({
				// 	colorLink: classImage[classImage.length - 1].getAttribute('src'),
				// });
			}

			//random 1 or 2
			if ((Math.floor(Math.random() * 2) + 1) % 2 === 0) {
				listLink = {
					name,
					categoryId: 4,
					typeId: 12,
					price,
					//random 0->4
					discount: listDiscount[Math.floor(Math.random() * 5)],
					quantity: 50,
					soldQuantity: 0,
				};
			} else {
				listLink = {
					name,
					categoryId: 4,
					typeId: 12,
					price,
					discount: 0,
					quantity: 50,
					soldQuantity: 0,
				};
			}
		});
		return listImage;
	});
	// console.log(products);
	// console.log(',');
	await browser.close();
	return products;
}

async function getLink() {
	let result = [];
	let links = [
		'/gau-bong-mj-lon-meo-hoang-thuong-cun-au-mai-got-nam-60cm-p36085279.html',
		'/gau-bong-mj-am-tay-cun-unicorn-happy-face-20x25-p35930987.html',
		'/gau-bong-mj-am-tay-khung-long-unicorn-ma-tim-happy-25x33-p35817055.html',
		'/gau-bong-mj-am-tay-fruit-peach-cartoon-ma-hong-32x30-p35810604.html',
		'/gau-bong-mj-am-tay-fruit-avocado-trai-bo-hat-gau-ngo-dau-32x28-p35810601.html',
		'/gau-bong-ms-vit-bom-tai-tho-deo-tui-cute-23cm-p35777809.html',
		'/gau-bong-ms-tho-heo-vay-luoi-cuc-bong-cute-23cm-p35777807.html',
		'/gau-bong-ms-cute-cat-blue-eyes-deo-no-23cm-p35777804.html',
		'/gau-bong-ms-baby-bear-deo-no-23cm-p35777800.html',
		'/gau-bong-ms-ho-cam-map-cute-tiger-23cm-p35638706.html',
		'/gau-bong-mj-cute-tiger-tron-mat-33cm-p35552845.html',
		'/gau-bong-mj-cute-tiger-laugh-out-loud-33cm-p35552843.html',
		'/gau-bong-ms-cute-tiger-tron-mat-28cm-p35552840.html',
		'/gau-bong-ms-cute-tiger-laugh-out-loud-28cm-p35552838.html',
		'/gau-bong-ms-tiger-ma-hong-20cm-p35413638.html',
		'/gau-bong-mj-am-tay-tho-vit-ma-tim-25x30-p35233374.html',
		'/gau-bong-mj-am-tay-da-nang-bread-cartoon-carrot-8x28x32-p35233090.html',
		'/gau-bong-mj-am-tay-phia-sau-cun-corgi-x-meo-soc-26x35-p35233084.html',
		'/gau-bong-mj-am-tay-fruit-dau-tay-carrot-cartoon-ma-hong-25x30-p35225046.html',
		'/gau-bong-mj-lon-cun-husky-map-nam-60cm-p35221698.html',
		'/gau-bong-mj-lon-fat-tiger-nam-60cm-p35220530.html',
		'/gau-bong-ms-baby-bear-gau-tho-mat-map-deo-no-23cm-p35214912.html',
		'/gau-bong-mj-am-tay-khung-long-heo-hong-unicorn-ma-tim-30x30-p35018203.html',
		'/gau-bong-mj-lon-black-cat-90cm-p34777922.html',
	];
	let idproduct = 259;
	let listDataImage = [];
	let listSaveIdDiscount = [];
	for (let i = 0; i < links.length; i++) {
		let url = links[i];
		idproduct++;
		let a = await getDetails('https://moji.vn' + url, idproduct);
		//-- xu li cho image va color
		for (let j = 0; j < a.length; j++) {
			a[j].productId = idproduct;
			listDataImage.push(a[j]);
		}

		//-- xu li id cho product voi nhung product giam gia
		//if (a.discount !== 0) listSaveIdDiscount.push(idproduct);
	}
	console.log(listDataImage);
	//console.log(listSaveIdDiscount);
}

getLink();
