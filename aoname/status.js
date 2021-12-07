const createCsvWriter = require('csv-writer').createObjectCsvWriter;
//const dataSize = ['S', 'M', 'L', 'XL', 'FreeSize'];

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

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let data = [];
let res1 = null;
let arrCheck = [];
let res2 = null;
let res3 = null;

const idDiscount = [260, 262, 263, 267, 269, 270, 274, 275, 276, 278, 280, 281];

for (let i = 260; i <= 283; i++) {
	if (idDiscount.includes(i) === false) {
		if (randomIntFromInterval(1, 2) % 2 === 0) {
			res1 = 1;
			arrCheck.push(res1);
			data.push({ productId: i, statusId: res1 });
		} else {
			res1 = randomIntFromInterval(3, 4);
			arrCheck.push(res1);
			data.push({ productId: i, statusId: res1 });
		}

		if (res1 !== 1) {
			if (randomIntFromInterval(1, 2) % 2 === 0) {
				if (res1 === 3) {
					res2 = 4;
				} else res2 = 3;

				//arrCheck.push(res2);
				data.push({ productId: i, statusId: res2 });
			}

			// if (randomIntFromInterval(1, 2) % 2 === 0) {
			// 	res3 = randomIntFromInterval(2, 4);
			// 	while (arrCheck.includes(res3) === true) {
			// 		res3 = randomIntFromInterval(2, 4);
			// 	}
			// 	data.push({ productId: i, statusId: res3 });
			// }
		}
		arrCheck = [];
	} else {
		res1 = 2;
		arrCheck.push(res1);
		data.push({ productId: i, statusId: res1 });

		if (randomIntFromInterval(1, 2) % 2 === 0) {
			res2 = randomIntFromInterval(3, 4);
			while (arrCheck[0] === res2) {
				res2 = randomIntFromInterval(3, 4);
			}
			arrCheck.push(res2);
			data.push({ productId: i, statusId: res2 });
		}

		if (randomIntFromInterval(1, 2) % 2 === 0) {
			if (res2 === 3) res3 = 4;
			else res3 = 3;

			data.push({ productId: i, statusId: res3 });
		}
		arrCheck = [];
	}
}

console.log(data);

const csvWriter = createCsvWriter({
	path: 'statusGauBongCute.csv',
	header: [
		{ id: 'productId', title: 'productId' },
		{ id: 'statusId', title: 'statusId' },
	],
});

const records = data;

csvWriter
	.writeRecords(records) // returns a promise
	.then(() => {
		console.log('...Done');
	});
