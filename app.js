const vegPromise = new Promise((resolve, reject) => {
	let vegArr = ["🍅","🍆","🌽","🌶️","🫑","🥒","🥦","🥔","🥕","🧅","🧄",];
	setTimeout(() => {
		resolve(vegArr);
	}, 3000);
});

async function printVeg() {
	console.log("Upload in Progress, please wait");
	let vegetables = await vegPromise;
	console.log("Upload successful => running print...");

	vegetables.forEach((vegetable) => {
		console.log(vegetable);
		let mainDiv = document.createElement("div");
		document.body.appendChild(mainDiv);
		mainDiv.innerText += vegetable;
	});
}
printVeg()
