const buttonSubmit = document.querySelector('.btn');
const divResult = document.querySelector('.result');

function showResult(data) {
	divResult.innerHTML = "";
	data.forEach((item) => {
		image = document.createElement('img');
		image.src = item.download_url;
		image.setAttribute('width', '100%');
		image.setAttribute('height', 'auto');
		image.setAttribute('title', item.author);
		divResult.append(image);
	});
}

const getImage = async (url) => {
	return fetch(url)
	.then((response) => {
		const result = response.json();
		console.log('response.json', result)
		return result;
	})	
	.then((data) => {
		return data;
	})
	.catch(() => {
		console.log('Ошибка!');
	})
}

document.addEventListener("DOMContentLoaded", () => {
	if (localStorage) {
		showResult(JSON.parse(localStorage.getItem('myJSON')));
	} else {
		showResult(JSON.parse(localStorage.getItem('response.json')));
	}
});

buttonSubmit.addEventListener(
	'click', 
	async () => {
		let page = document.getElementById('inputPage').value;
		let limit = document.getElementById('inputLimit').value;
		const errorPage = isNaN(page) || page < 1 || page > 10;
		const errorLimit = isNaN(limit) || limit < 1 || limit > 10;

		if (errorPage && errorLimit) {
			divResult.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
		} else if (errorPage) {
			divResult.textContent = 'Номер страницы вне диапазона от 1 до 10';
		} else if (errorLimit) {
			divResult.textContent = 'Лимит вне диапазона от 1 до 10';		
		} else {
			let data = await getImage(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
			localStorage.setItem("myJSON", JSON.stringify(data));
			showResult(data);
		}
	}
);
