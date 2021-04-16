$('ul').on('click', '.remove', function (e) {
	$(e.target).closest('li').remove();
});

$('#movie-form').on('submit', function (e) {
	e.preventDefault();
	$('ul').append(
		`<li>${$('#movie').val()} - Rating: ${$('#rating').val()} <button class="remove">Remove</button></li>`
	);
	$('#movie-form')[0].reset();
});

// $('#sort').on('click', function (e) {
// 	if (e.target.innerText === 'Rating') {
// 		e.target.innerText = 'Title';
// 	} else e.target.innerText = 'Rating';
// });
