function startTimer(){
    alert("HELLO!!!!!!")
    var data = $.ajax( {
        type: 'POST',
        url: `/polysis/get_time_remaining/`,
        data: {
        },
        success: function(data) {       
        }
    
    });
}