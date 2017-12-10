export function fetch (url, successHandler, errorHandler) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        crossOrigin: true,
        success:  function (result) {
            successHandler(result);
        },
        error: function (error) {
            errorHandler(error.responseJSON);
        }
    });
};

export function save(url, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: url,
            data: JSON.stringify(data),
            async:true,
            crossDomain: true,
            success: function (result) {
                successHandler(result);
            },
            error: function (error) {
                errorHandler(error.responseJSON);
            }
        });
    });
};
