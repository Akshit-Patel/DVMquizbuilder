function startTimer(){
    var data = $.ajax( {
        type: 'POST',
        url: `/quiz-portal/mechanix/get_time_remaining/`,
        data: {
        },
        success: function(data) {  
        }
    
    });
}