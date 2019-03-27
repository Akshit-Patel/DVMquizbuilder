function createQuestions() {
    var data = $.ajax( {
        type: 'POST',
        url: `/quiz-portal/gamblingMaths/generate_questions/`,
        data: {
        },
        success: function(data) {  
        }
    });
}


document.getElementsByClassName("skip-button")[0].addEventListener("click", function() {
    createQuestions();
    location.href = "/quiz-portal/gamblingMaths/instructions";
});

function addMember() {
    if(document.member_details.member_name.value && document.member_details.member_email.value){
        var name = document.member_details.member_name.value;
        var email = document.member_details.member_email.value;
        var data = $.ajax( {
            type: 'POST',
            url: `/quiz-portal/gamblingMaths/add_team_member/`,
            data: {
                "team_member_name" : name,
                "team_member_email" : email
            },
            success: function(data, textStatus, xhr) {
                console.log("Status: ", xhr.status);
                if(xhr.status == 204){
                    alert("Email already exists");}
                else{
                    createQuestions();
                    location.href = "/quiz-portal/gamblingMaths/instructions";
                }
                
            }
        });
    }
    else
    alert("Please Enter the details");
}