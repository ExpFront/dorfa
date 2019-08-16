function calculateTotalCount() {
	const length = $('.form-field-input').length
	let totalCount = 0;

	for (var id = 0; id < length; id = id + 2) {
		const count = +$('.form-field-input')[id].value;

		totalCount += count;
	}

	return totalCount;
}

function formatNumber(num) {
	const sumArray = num.toString().split('').reverse();
	sumArray.map((sumbol, id) => {
		if (id % 4 === 0) {
			sumArray.splice(id, 0, ' ')
		}
	})

	return `${sumArray.reverse().join("")} ₽`;
}




function changeTotal(initialCount, costPerOne, totalId) {
	const totalText = formatNumber(initialCount * costPerOne)
	$('.total')[totalId].innerText = totalText;

	const totalLength = $('.total').length;
	let totalSum = 0;

	for (var i = 0; i < totalLength; i++) {
		totalSum += +$('.total')[i].innerText.split(' ₽')[0].replace(' ','')
	}

	const text = formatNumber(totalSum)
	const totalCount = calculateTotalCount()

	$('.submit__total').text(text);
	$('.sideblock__count-text').text(`${totalCount} шт.`)
	$('.sideblock__total').text(text);
}


function calculateFinalCost(e, totalId, inputId, costPerOne) {
	const initialCount = $('.form-field-input')[inputId].value;
	changeTotal(initialCount, costPerOne, totalId)
}

$(document).ready(function() {
	const length = $('.form-field-input').length

	for (var id = 0; id < length; id = id + 2) {
		const initialCount = $('.form-field-input')[id].value;
		const costPerOne =  $('.money')[id].innerText.split('₽')[0].replace(' ','')
		const totalId = id === 2 ? 1 : 0

		changeTotal(initialCount, costPerOne, totalId)
	}

	$("#orderForm").validate({
		rules:{
			phoneRUS:
			{
				required: true,
				phoneRUS: true
			}
		}
	});

	$.validator.addMethod("phoneRUS", function(phoneNumber, element) {
		return phoneNumber.length === 18
	}, "Пожалуйста, введите корректный номер телефона" );

	$.extend( $.validator.messages, {
		required: "Это поле необходимо заполнить.",
		remote: "Пожалуйста, введите правильное значение.",
		email: "Пожалуйста, введите корректный адрес электронной почты.",
		url: "Пожалуйста, введите корректный URL.",
		date: "Пожалуйста, введите корректную дату.",
		dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
		number: "Пожалуйста, введите число.",
		digits: "Пожалуйста, вводите только цифры.",
		creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
		equalTo: "Пожалуйста, введите такое же значение ещё раз.",
		extension: "Пожалуйста, выберите файл с правильным расширением.",
		maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
		minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
		rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
		range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
		max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
		min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
	});
});
