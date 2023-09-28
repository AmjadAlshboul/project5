function getAdvice(){
	fetch('https://api.adviceslip.com/advice')
	.then(response => response.json())
	.then(json => {
		const advice=json.slip.advice;
		const quote = document.querySelector('.card__quote');
		console.log(advice);
		
		quote.innerHTML = `${advice}`;
	});
}
