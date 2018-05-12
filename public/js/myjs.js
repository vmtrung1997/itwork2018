/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
   getData(); 
});
function getData(){
 $.ajax({
                url: "http://janeto.us.to:7752/api/contact",
                method: "GET",
                success: function(data){
                  var html="";
                  for(var i=0;i<data.length;i++){
                      html+="<p>" + data[i].id + ". " + data[i].name + ", " + data[i].email + ", " + data[i].message + " <button onclick='deleteId(" + data[i].id + ")'>x</button></p>";
                  }
                  $('.result').html(html);// gan gia tri tai the co class result la 1 html
                },
                error: function(err){
                    console.log(err);
                }       
         }); 
}
function deleteid(id){
    $.ajax({
       url: "http://janeto.us.to:7752/api/contact/" + id,
       method: "DELETE",
       suceess: function(data){
            window.alert("DELETE id"+id+"is successfully");
            getData();
       },
       error:function(err){
           console.log(err);
       }
    });
}
function create(){
    var name= $('input[name="name"]').val();
    var email = $('input[name="name"]').val();
    var mes = $('textarea').val();
    if(name===""||email===""||mes===""){
        window.alert("type information incorrect!!");
    }else{
        $.ajax({
           url:"http://janeto.us.to:7752/api/contact",
           method:"POST",
           headers:{
               ContentType:"application/json"
           },
           data:{
               name:name,
               email:email,
               message:mes
           },
           success:function(data){
                window.alert("Summit successfully");
                getData();
           },
           error:function(err){
            console.log(err);   
           }
                   
        });
    }
}
// When the user scrolls the page, execute myFunction 
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction();};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky +120) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
