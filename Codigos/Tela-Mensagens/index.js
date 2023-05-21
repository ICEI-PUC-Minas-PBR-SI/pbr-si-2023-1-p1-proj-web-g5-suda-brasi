$('#searsh').on('input', function () {
    const val = $(this).val().toUpperCase()
    $('.posts-title').each(function () {
        if ($(this).html().toUpperCase().indexOf(val) !== -1) {
            $(this).show()
        }
        else {
            $(this).hide()
        }
    })
})