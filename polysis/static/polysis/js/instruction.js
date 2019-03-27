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

function send(){
    
    var data = $.ajax( {
        type: 'GET',
        url: `/quiz-portal/polysis/hello/`,
        data: { 'url':'/quiz-portal/polysis/memcreate'
        },
        success: function(data) {  
        }
    
    });
}
