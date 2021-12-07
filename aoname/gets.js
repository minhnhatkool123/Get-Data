const createCsvWriter = require('csv-writer').createObjectCsvWriter;
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

let k = 0;
let count = 0;
let index1 = 0;
let index2 = 0;
let newSize = [];
for (let i = 0; i < links.length; i++) {
	k = count = index1 = index2 = 0;
	for (let j = links[i].length - 1; j >= 0; --j) {
		if (links[i][j] === '-') {
			count++;
		}
		if (count === 1 && k === 0) {
			index1 = j;
			k = 1;
		}
		if (count === 2) {
			index2 = j + 1;
			break;
		}
	}
	newSize.push(links[i].slice(index2, index1));
}

//-- 1->5 aothethao

//-- 6->45 aothunnu

//-- 46->56 aokieunu

//-- 57->96 aosominu

//-- 97->135 aokhoacnu

//-- 136->175 quandai

//-- 176->214 quanshortnu

//-- 215->226 quanlegging

//-- 227->236 chanvay

//-- 237->250 damnu

//-- 251->259 yem

//-- 260->283 gaubongcute

let id = 259;
for (let i = 0; i < newSize.length; i++) {
	id++;
	newSize[i] = { name: newSize[i], productId: id };
}

const csvWriter = createCsvWriter({
	path: 'sizeGauBongCute.csv',
	header: [
		{ id: 'name', title: 'name' },
		{ id: 'productId', title: 'productId' },
	],
});

csvWriter
	.writeRecords(newSize) // returns a promise
	.then(() => {
		console.log('...Done');
	});

console.log(newSize);
