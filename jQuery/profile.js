// main document ready function to check if dom is loaded fully or not
$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAKpXuZAwkkR5h4GtZBvxY3ShhmW1uCKNU4PkP3exKXv38OAQBWRCClKCsAUmGqzjbSUNI6S454EZB88ip8PrsLGRERJXNvusp1ZCl1t1jGgemoV41U3QcjP0QUwkZAOZBjoBthB2oYP9WUVrkidNdr4qbsbdUzk7ipAChPvKxijDbmGGJhuHYZD';
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