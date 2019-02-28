// test code for register/login

// const register = function(e){
//     e.preventDefault();
//     $.ajax({
//         method: "POST",
//         url: "/api/users/registration",
//         data:{
//             username: $("#registerUsername").val(),
//             password: $("#registerPassword").val(),
//             cohortId: $("#cohortCode").val()
//         },
//         success: function(response){
//             console.log(response);
//             $("body").append("You have registered");
//             $.ajax({
//                 method: "POST",
//                 url: "/api/users/session",
//                 data:{
//                     username: $("#registerUsername").val(),
//                     password: $("#registerPassword").val(),
//                 },
//                 success: function(data){
//                     console.log(data);
//                     $("body").append("You have logged in");
//                 }
//             })
//         }
//     })
// }

// const login = function(e){
//     e.preventDefault();
//     $.ajax({
//         method: "POST",
//         url: "/api/users/session",
//         data:{
//             username: $("#loginUsername").val(),
//             password: $("#loginPassword").val(),
//         },
//         success: function(data){
//             console.log(data);
//             $("body").append("You have logged in");
//         }
//     })
// }

// $("#loginBtn").on('click', login);
// $("#registerBtn").on("click", register);