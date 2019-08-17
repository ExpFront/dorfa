function addToCart(e, willBeWhite) {
	if (!willBeWhite) {
		$(e).removeClass('button--white')
		$(e).addClass('button--blue')
	} else {
		$(e).addClass('button--fulfill')
	}

	$(e).text('Добавлено!')
	const currentCount = $('.small-cart__count').text()

	if (currentCount > 0) {
		$('.small-cart__count').css('display', 'block')
	}

	const newCount = +currentCount + 1;

	localStorage.setItem('cartCount', newCount)
	$('.small-cart__count').text(newCount)
}


$(document).ready(function() {
	const currentCount = +localStorage.getItem('cartCount');

	if (currentCount > 0) {
		$('.small-cart__count').text(currentCount)
		$('.small-cart__count').css('display', 'block')
	}
})
