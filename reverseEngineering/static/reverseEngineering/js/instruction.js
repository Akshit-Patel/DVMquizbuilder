function startTimer(){
    var data = $.ajax( {
        type: 'POST',
        url: `/quiz-portal/reverseEngineering/get_time_remaining/`,
        data: {
        },
        success: function(data) {  
        }
    
    });
}