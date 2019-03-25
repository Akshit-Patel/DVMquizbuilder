document.getElementsByClassName("skip-button")[0].addEventListener("click", function() {
    location.href = "/quiz-portal/gamblingMaths/instructions";
});

function addMember() {
    var name = document.member_details.member_name.value;
    var email = document.member_details.member_email.value;
    var data = $.ajax( {
        type: 'POST',
        url: `/quiz-portal/gamblingMaths/add_team_member/`,
        data: {
            "team_member_name" : name,
            "team_member_email" : email
        },
        success: function(data) {
            location.href = "/quiz-portal/gamblingMaths/instructions";
        }
    });
}