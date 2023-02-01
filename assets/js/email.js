$(document).ready(function() {

    $(".form").submit(function() {

        var th = $(this);

        var fd = new FormData();

        if ($(this).find('#file').length > 0) {

            var files = $('#file')[0].files;

            if(files.length > 0 ){
                fd.append('file',files[0]);
            }
        }

        fd.append('qs',th.serialize());


        $.ajax({
            url: '/email.php',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(response){
                console.log('AJAX response : ', response);
                if(response == 'ok'){
                    th.trigger("reset");
                    //alert('Сообщение отправлено!');
                    $('.close-pop-up').click();
                    $('.pop-up-mess-ok').removeClass('d-none');
                    setTimeout(function () {
                        $('.pop-up-mess-ok').addClass('d-none');
                    }, 2000);
                }else{
                    $('.pop-up-mess-err').removeClass('d-none');
                    setTimeout(function () {
                        $('.pop-up-mess-err').addClass('d-none');
                    }, 2000);
                }
            }
        });
        return false;
    });
    $('.pop-up-mess-err, .pop-up-mess-ok').on( "click", function() {
        $(this).addClass('d-none');
        return false;
    })
});