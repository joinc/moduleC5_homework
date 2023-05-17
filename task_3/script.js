const buttonSubmit = document.querySelector('.btn');
const divResult = document.querySelector('.result');

function showResult(url) {
	let xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onload = function () {
		if (xhr.status == 200) {
			const result = JSON.parse(xhr.response);
			divResult.innerHTML = "";
			result.forEach((item) => {
				image = document.createElement('img');
				image.src = item.download_url;
				image.setAttribute('width', '100%');
				image.setAttribute('height', 'auto');
				image.setAttribute('title', item.author);
				divResult.append(image);
			});
		} else {
			console.log('Внимание! Ответ сервера: ', xhr.status);
		}
	};
	xhr.send();
}

buttonSubmit.addEventListener(
	'click', () => {
		const value = document.querySelector('input').value;
		if (value < 1 || value > 10) {
			divResult.innerHTML = "<h4>Число вне диапазона от 1 до 10</h4>";
		} else {
			url = `https://picsum.photos/v2/list?limit=${value}`;
			showResult(url);
		}
	}
)