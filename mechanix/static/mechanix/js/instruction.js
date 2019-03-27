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
function memberForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdisvV9C_KCfjI0JFacdrst0qwTrlEGs_U948eSn2DA4FQxvg/viewform?vc=0&c=0&w=1")
}


function send(){
    
    var data = $.ajax( {
        type: 'GET',
        url: `/quiz-portal/mechanix/hello/`,
        data: { 'url':'/quiz-portal/mechanix/memcreate'
        },
        success: function(data) {  
        }
    
    });
}
