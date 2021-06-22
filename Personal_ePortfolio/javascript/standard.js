$(document).ready(function(){
    $("#resume").click(function(){
        alert("Resume: " + $("#jq_get1").text());
    });
});

$(document).ready(function(){                           //putting an action into exsistance
    $("#references").click(function(){                  //when the button with the references id is clicked
        alert("References: " + $("#jq_get2").text());   //content goes to an alert window
    });                                                 //content starts with a title "References"
});                                                     //concatinated with the text of the given id