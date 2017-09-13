 // main document ready function to check if dom is loaded fully or not
 $( document ).ready(function() {

    var myFacebookToken ='EAACEdEose0cBAKpXuZAwkkR5h4GtZBvxY3ShhmW1uCKNU4PkP3exKXv38OAQBWRCClKCsAUmGqzjbSUNI6S454EZB88ip8PrsLGRERJXNvusp1ZCl1t1jGgemoV41U3QcjP0QUwkZAOZBjoBthB2oYP9WUVrkidNdr4qbsbdUzk7ipAChPvKxijDbmGGJhuHYZD';
    
    $("#feed").css("visibility","hidden");
    function getFeedInfo(){
        
        $("#feed").css("visibility","visible");
        $.ajax('https://graph.facebook.com/me?fields=posts{story,full_picture,caption,attachments{url,media},created_time,message},picture,name&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    for (var i = 0; i < response.posts.data.length; i++){
                        console.log(response.posts.data.length);
                       //This if condition check  if the user post only texts where there is no sharing of other post 
                       if(response.posts.data[i].story==undefined){
                                  $(".feedTab").append('<div class="container newsFeed"><br><div class="row"><div class="col-md-6  col-md-offset-4"><div class="media"><div class="media-left" ><img   src='+response.picture.data.url+' class="media-object img-circle" id="profilePic" style="width:35px"> </div><div class="media-body"><h4 class="media-heading"><span id="story">'+response.name+'</span> </h4>on  <span id=createdtime>'+response.posts.data[i].created_time+'</span> </div> </div><br><p><span id="message">'+response.posts.data[i].message+'</span></p><br></div></div></div><br><br>');
 

                       }

                       //This if condition check if the user has shared any post which has some media or link but havent written any message or caption

                        else if(response.posts.data[i].message==undefined){
                                                   $(".feedTab").append('<div class="container newsFeed"><br><div class="row"><div class="col-md-6  col-md-offset-4"><div class="media"><div class="media-left" ><img   src='+response.picture.data.url+' class="media-object img-circle" id="profilePic" style="width:35px"> </div><div class="media-body"><h4 class="media-heading"><span id="story">'+response.posts.data[i].story+'</span> </h4>on  <span id=createdtime>'+response.posts.data[i].created_time+'</span> </div> </div><br><p><span id="message"></span></p><br><div class="postPic"><img src='+response.posts.data[i].full_picture+' id="post_img" style="width:350px;height:250px" ></div> </div></div></div><br><br>');
 

                         }
                        
                        //This condition holds true if a user has shared a post which has some media along with a caption or message
                         else {
                                  $(".feedTab").append('<div class="container newsFeed"><br><div class="row"><div class="col-md-6 col-md-offset-4 post_tab"><div class="media"><div class="media-left" ><img   src='+response.picture.data.url+' class="media-object img-circle" id="profilePic" style="width:35px"> </div><div class="media-body"><h4 class="media-heading"><span id="story">'+response.posts.data[i].story+'</span> </h4>on  <span id=createdtime>'+response.posts.data[i].created_time+'</span> </div> </div><br><p><span id="message">'+response.posts.data[i].message+'</span></p><br><div class="postPic"><img src='+response.posts.data[i].full_picture+' id="post_img" style="width:350px;height:250px" ></div> </div></div></div><br><br>');
 
                         }
                        
                         

                        

                     }//end for loop

                 },//end success function

                 error: function(error){
                
                    alert(error.responseJSON.error.message)
                 }//end error
             
             }//end argument list 



         );// end ajax call 

     }//end getFeedInfo
    

    $(".myFeed").on('click',getFeedInfo);
    
    

  });