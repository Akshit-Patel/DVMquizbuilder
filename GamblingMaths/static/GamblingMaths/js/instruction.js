

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

function send(){
    
    var data = $.ajax( {
        type: 'GET',
        url: `/quiz-portal/gamblingMaths/hello/`,
        data: { 'url':'/quiz-portal/gamblingMaths/memcreate'
        },
        success: function(data) {  
        }
    
    });
}
