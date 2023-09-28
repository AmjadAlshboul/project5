function getAdvice(){
	fetch('https://api.adviceslip.com/advice')
	.then(response => response.json())
	.then(json => {
		const advice=json.slip.advice;
		const idValue=json.slip.id;
		const quote = document.querySelector('.card__quote');
		const id = document.querySelector('.card__title__id');
		console.log(advice);
		
		quote.innerHTML = `${advice}`;
		id.innerHTML = `#${idValue}`
	});
}
