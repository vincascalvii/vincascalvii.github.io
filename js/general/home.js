/* ==========================================================================

	HOME JS

========================================================================== */

new Splide('.splide', {
	type: 'slide',
	arrows: false,
	perPage: 2,
	perMove: 1,
	gap: '40px',
	padding: {
		right: '160px'
	},
	classes: {
		pagination: 'pagination',
		page: 'page'
	},
	breakpoints: {
		992: {
			gap: '25px',
			padding: {
				right: '0'
			}
		},
		767: {
			perPage: 1,
			gap: '20px',
			padding: {
				right: '0'
			}
		}
	}
}).mount();