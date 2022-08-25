function handleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credentials.accessToken;
    var user = result.user;
    console.log(user.email);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  })
}

// THIS FUNCTION IS HERE ONLY FOR FUTURRE REFERENCE!
// function getweather(searchQurey) {
//   var url = "https://api.openwethermap.ogr/data/2.5/weather?q="+searchQurey+"&units=imperial&APPID="+apiKey;
//   $(".city").text("");
//   $(".temp").text("");
//   $(".error-message").text("");
//   $.ajax(url, {success: function(data) {
//     console.log(data);
//     $(".city").text(data.name);
//     $(".temp").text(data.main.temp);
//   }, error: function(error) {
//     $(".error-message").text("An error occured!");
//   }})
// }
// function searchWeather() {
//   var searchQurey = $(".search").val();
//   getweather(searchQurey);
// }