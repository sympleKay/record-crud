$(document).ready(function () {
    $('.delete-employee').on('click', function(e) {
        e = $(this).data('id');
        console.log(e);

        $.ajax ({ 
            url: `/employee/delete/${e}`, 
            method: 'DELETE'
        })
            .then (function (data) {
                console.log(`This the data from the delete request made: ${data}`);
                location.reload();
            })
            .catch(function (err) {
                console.log (`Error: ${err}`);
        })
    });
});

//var id = $(this).dataset.id
/*
                $.ajax ({ url: `/employee/delete/${e}`, method: 'DELETE' })
            .then (function (data) {
                console.log(`This the data from the delete request made: ${data}`);
            })
            .catch(function (err) {
                console.log (`Error: ${err}`);
        })

            $.ajax ({
            type: 'DELETE',
            url:`/employee/delete/${e}`,
            success: function (response) {
                alert('Delete Employee?');
                window.location.href = '/'
            },
            error: function (err) {
                console.log(err);
            }
        });
*/
