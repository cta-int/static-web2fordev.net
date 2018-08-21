jQuery(document).ready(function($) {
    var $form = $('#form-mail');
    var $loading = $('<div class="loading" style="height: 200px;"></div>');
    var $modalBody = $form.find('.modal-content').find('.modal-body');
    var $modalFooter = $form.find('.modal-content').find('.modal-footer');
    $modalBody.find('.success').hide();
    $modalBody.find('.failed').hide();
    $modalBody.find('.loading').hide();

    $form.on('submit', function(event) {
        event.preventDefault();

        $modalBody.children().hide();
        $modalFooter.hide();
        $modalBody.find('.loading').show();
        $modalBody.append($loading);

        $.post($form.attr('action'), $form.serialize())
            .done(function() {
                $modalBody.find('.success').show();
            })
            .fail(function() {
                $modalBody.children().show();
                $modalFooter.show();
                $modalBody.find('.success').hide();
            })
            .always(function() {
                $loading.remove();
            });
    });

    $('#mail').on('click', function() {
        $modalBody.children().show();
        $modalFooter.show();
        $modalBody.find('.success').hide();
        $modalBody.find('.failed').hide();
    });
});