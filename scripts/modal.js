document.getElementById('btn-modal').addEventListener('click', function() {
	document.getElementById('modal-window-overlay').classList.add('is-visible');
	document.getElementById('modal-window').classList.add('is-visible');
});

document.getElementById('close-btn').addEventListener('click', function() {
	document.getElementById('modal-window-overlay').classList.remove('is-visible');
	document.getElementById('modal-window').classList.remove('is-visible');
});

document.getElementById('modal-window-overlay').addEventListener('click', function() {
	document.getElementById('modal-window-overlay').classList.remove('is-visible');
	document.getElementById('modal-window').classList.remove('is-visible');
});


$(document).ready(function() {
	$('#consultationForm').on('submit', function(e) {
		e.preventDefault();

		const data = {
			name: $('.name-input').val(),
			phone: $('.phone-input').val(),
		}

		console.log('Отправка данных в 1с', data)
	})

	$("#consultationForm").validate({
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
