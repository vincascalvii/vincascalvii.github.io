/* ==========================================================================

	SINGLE CHARACTER DESIGN JS

========================================================================== */

/* ==========================================================================

    DETERMINE THE CHARACTER

========================================================================== */

(function() {

	// Get the character
	var character = getParameter('name');

	// Fetch the JSON file
	fetch('/github/data/' + character + '.json')

	.then( response => {
		if (!response.ok)
			throw new Error("HTTP error " + response.status);
       
        return response.json();
    })

	.then( data => {

		// Populate the name
		var name = data[0]['name'];
		document.querySelector('.item.name').innerHTML = name;
		document.querySelector('.title.name').innerHTML = name;

		// Populate the lore
		var lore = data[0]['lore'];
		document.querySelector('.lore').innerHTML = lore;

		// Populate the abilities
		for ( var i = 1 ; i < 6; i++ ) {
			var abilityType = data[0]['ability'][i]['type'];
			var abilityName = data[0]['ability'][i]['name'];
			var abilityDetails = data[0]['ability'][i]['details'];
			document.querySelector('.ability .info-' + i + ' .type').innerHTML = abilityType;
			document.querySelector('.ability .info-' + i + ' .name').innerHTML = abilityName;
			document.querySelector('.ability .info-' + i + ' .details').innerHTML = abilityDetails;
		}

	})
	
	.catch( function(error) {
		console.log('Fetch error: ', error);
	});

})();



/* ==========================================================================

    GET UTM VALUES

========================================================================== */

function getParameter() {

    var key = false, results = {}, item = null;

    // Get the query string without the "?""
    var qs = location.search.substring(1);

    // Check for the key as an argument
    if ( arguments.length > 0 && arguments[0].length > 1 ) key = arguments[0];

    // Make a regex pattern to grab key/value
    var pattern = /([^&=]+)=([^&]*)/g;

    // Loop the items in the query string,
    // Either find a match to the argument, 
    // Or build an object with key/value pairs
    while ( item = pattern.exec(qs) ) {
        if ( key !== false && decodeURIComponent(item[1]) === key ) {
            return decodeURIComponent(item[2]);
        } else if ( key === false ) {
            results[decodeURIComponent(item[1])] = decodeURIComponent(item[2]);
        }
    }

    return key === false ? results : null;
}



/* ==========================================================================

    SWITCHING ABILITY

========================================================================== */

(function() {

	var abilities = document.querySelectorAll('.ability .block');

	for ( var i = 0; i < abilities.length; i++ ) {

		abilities[i].addEventListener('click', function() {

			var thumbnails = document.querySelectorAll('.ability .thumbnails .block');

			for ( var j = 0; j < thumbnails.length; j++ ) {
				thumbnails[j].classList.remove('active');
			}

			this.classList.add('active');

			var infos = document.querySelectorAll('.ability .info');

			for ( var k = 0; k < infos.length; k++ ) {
				infos[k].classList.remove('active');
			}

			var id = this.id.replace('ability', 'info');

			document.querySelector('.' + id).classList.add('active');

		}, false);

	}

})();