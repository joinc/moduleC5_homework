const buttonSubmit = document.querySelector('.btn');
const divResult = document.querySelector('.result');
const inputWidth = document.getElementById('width');
const inputHeight = document.getElementById('height');

const getImage = async (width, height) => {
	try {
		const response = await fetch(`https://picsum.photos/${width}/${height}`);
		const data = response;
		return data.url;
	} catch {
		console.log('Ошибка!');
	}
}

buttonSubmit.addEventListener(
	'click', 
	async () => {
		width = Number(inputWidth.value);
		height = Number(inputHeight.value);
		if (width < 100 || width > 300 || isNaN(width) || isNaN(height) || height < 100 || height > 300) {
			divResult.textContent = 'Одно из чисел вне диапазона от 100 до 300';
		} else {
			const resultRequest = await getImage(width, height);
			image = document.createElement('img');
			image.src = resultRequest;
			divResult.innerHTML = "";
			divResult.append(image);
		}
	}
)