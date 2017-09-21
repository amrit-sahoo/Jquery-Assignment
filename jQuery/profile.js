// main document ready function to check if dom is loaded fully or not
$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBADX1VrZAnxCiFLW4lvloWRZBLzE5qFZAubv65BZCDusjGf2CUVUeUVKdPT311bxHHQlPDTVr0DdDzCNYGc8FgZC5GcZCJrFJY4oJUP6ZA8IWZAse1OUyGPUWkOEhVKCbLDBwgJLNtDQy8SUMlz2kOaPTSnyQxT9JaJkQmB2xLiZCrZBNNKEZBvshZBoZD';
    $("#profile").css("visibility","hidden");
    function getFacebookInfo(){
        $("#profile").css("visibility","visible");
        $.ajax('https://graph.facebook.com/me?fields=id,name,email,hometown,gender,location,education&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myName").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myGender").text(response.gender);
                    $("#location").text(response.location.name);
                    $("#grdCollegeName").text(response.education[2].school.name);
                    $("#degree").text(response.education[2].degree.name);
                    $("#collegeName").text(response.education[3].school.name);
                    $("#discipline").text(response.education[3].concentration[0].name);
                    $("#schoolName").text(response.education[1].school.name);
                    $("#class").text("10th");

                     },
                 error: function(error){
                
                    alert(error.responseJSON.error.message)
                }

            

            }//end argument list 



        );// end ajax call 


    }// end get facebook info
    // $(".myProfile").on('click',function(){

    //       $("#profile").css("visibility","visible");

    //   });

    $(".myProfile").on('click',getFacebookInfo);
    
    

  });
