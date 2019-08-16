function formatNumber(num) {
	const sumArray = num.toString().split('').reverse();
	sumArray.map((sumbol, id) => {
		if (id % 4 === 0) {
			sumArray.splice(id, 0, ' ')
		}
	})

	return `${sumArray.reverse().join("")} ₽`;
}


function changeTotal() {
	const initialCount = $('#slct')[0].value;
	const costPerOne =  $('.product-page__price')[0].innerText.split('₽')[0].replace(' ','')

	const totalText = formatNumber(initialCount * costPerOne)

	$('.product-page__total-price')[0].innerText = totalText;
}

$(document).ready(function() {
	changeTotal()
})
