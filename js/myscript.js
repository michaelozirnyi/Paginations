jQuery(function ($) {

    $('#table').DataTable();


    var table = $('#table').DataTable();

    $('#three').on( 'click', function () {
        table.page.len( 3 ).draw();
    } );

    $('#six').on( 'click', function () {
        table.page.len( 6 ).draw();
    } );

    $('#nine').on( 'click', function () {
        table.page.len( 9 ).draw();
    } );
});



