function startTimer(){
    var data = $.ajax( {
        type: 'POST',
        url: `/quiz-portal/polysis/get_time_remaining/`,
        data: {
        },
        success: function(data) {  
        }
    
    });
}