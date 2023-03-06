var search = document.getElementById( 'example-search-input' ),
    accordions = document.querySelectorAll( '.accordion-item' );

// Show content on click
Array.prototype.forEach.call( accordions, function( accordion ) {
    accordion.querySelector( 'button' ).addEventListener( 'click', function() {
        this.nextElementSibling.classList.add( 'active' );
    } );
} );

// Apply search
search.addEventListener( 'input', function() {
    var searchText = search.value.toLowerCase();
    //var searchText1 = search.value.normalize("NFKC").replace(/[\u0300-\u036f]/g, "");
    Array.prototype.forEach.call( accordions, function( accordion ) {
        if ( accordion.innerText.toLowerCase().indexOf( searchText ) >= 0 ) {
            accordion.style.display = 'block';
        }
        else {
            accordion.style.display = 'none';
        }
    } );
} );
