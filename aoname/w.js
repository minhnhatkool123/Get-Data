const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
	path: 'imageGauBongCute.csv',
	// header: [
	// 	{ id: 'name', title: 'NAME' },
	// 	{ id: 'categoryId', title: 'CATEGORYID' },
	// 	{ id: 'typeId', title: 'TYPEID' },
	// 	{ id: 'price', title: 'PRICE' },
	// 	{ id: 'discount', title: 'DISCOUNT' },
	// 	{ id: 'quantity', title: 'quantity' },
	// 	{ id: 'soldQuantity', title: 'SOLDQUANTITY' },
	// ],

	//--image
	header: [
		{ id: 'imageLink', title: 'imageLink' },
		{ id: 'productId', title: 'productId' },
	],

	//--color
	// header: [
	// 	{ id: 'colorLink', title: 'colorLink' },
	// 	{ id: 'productId', title: 'productId' },
	// ],
});

//name,categoryId,typeId,price,discount,soldQuantity
const records = [
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211207/21120001_be.JPG',
		productId: 260,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211207/21120001_gr.JPG',
		productId: 260,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211205/21112291.JPG',
		productId: 261,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211205/21112291_OR.JPG',
		productId: 261,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211205/21112291_HOC.JPG',
		productId: 261,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211128/21112251.JPG',
		productId: 262,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211128/21112251_HOC.JPG',
		productId: 262,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211128/21112251_GN.JPG',
		productId: 262,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211205/21110493_HOC.JPG',
		productId: 263,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211128/21110492_GN.JPG',
		productId: 264,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211203/21110478_yl.JPG',
		productId: 265,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211203/21110477.JPG',
		productId: 266,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211203/21110477_hoc.JPG',
		productId: 266,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211203/21110477_WH.JPG',
		productId: 266,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211203/21110476_HOC.JPG',
		productId: 267,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211203/21110475_BR.JPG',
		productId: 268,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211203/21110212_YL.JPG',
		productId: 269,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211112/21110151_YL.JPG',
		productId: 270,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211112/DSCF7182.JPG',
		productId: 270,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211112/21110150_YL.JPG',
		productId: 271,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211112/21110149_YL.JPG',
		productId: 272,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211112/21110148_YL.JPG',
		productId: 273,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211112/21110071_XX.JPG',
		productId: 274,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211204/21110071_WH.JPG',
		productId: 274,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100302.JPG',
		productId: 275,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100302_HOC.JPG',
		productId: 275,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100302_YL.JPG',
		productId: 275,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100301_LYL.JPG',
		productId: 276,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100300.JPG',
		productId: 277,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100300_OR.JPG',
		productId: 277,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100300_GR.JPG',
		productId: 277,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100293.JPG',
		productId: 278,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100293_HOC.JPG',
		productId: 278,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100293_OR.JPG',
		productId: 278,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100286_LG.JPG',
		productId: 279,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100285_YL.JPG',
		productId: 280,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100266.JPG',
		productId: 281,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100266_br.JPG',
		productId: 281,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211103/21100266_wh.JPG',
		productId: 281,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211101/21100230.JPG',
		productId: 282,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211101/21100230_GN.JPG',
		productId: 282,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211101/21100230_PE.JPG',
		productId: 282,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211101/21100230_hoc.JPG',
		productId: 282,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211028/21100090_BL.JPG',
		productId: 283,
	},
	{
		imageLink:
			'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20211028/21100090_BL1.JPG',
		productId: 283,
	},
];

csvWriter
	.writeRecords(records) // returns a promise
	.then(() => {
		console.log('...Done');
	});
