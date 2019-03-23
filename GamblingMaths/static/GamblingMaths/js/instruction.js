function startTimer(){
    var data = $.ajax( {
        type: 'POST',
        url: `/quiz-portal/gamblingMaths/get_time_remaining/`,
        data: {
        },
        success: function(data) {  
        }
    
    });
}