$(document).ready(function(){

  var $menu = $("#sidebar-wrapper");

  $(document).on("click", ".js-menu-open", function(){
    console.log("Open action");
    $menu.addClass("open");
    return false;
  }).on("click", ".js-menu-close", function(){
    console.log("Close action");
    $menu.removeClass("open");
    return false;
  });

  var getWeather = function () {
    $.ajax({
      url: "http://api.wunderground.com/api/20eb543aab3a31a5/geolookup/conditions/q/91301.json",
      dataType: "jsonp",
      success: function (response){
        var conditions = response.current_observation.weather;
        loadImage(conditions);
      }
    });
  };

  getWeather(); //Make API call for weather conditions, possible responses: "clear", "Snow", "Cloudy"

  var getTimeOfDay = function () {
    var time = new Date();
    var hours = time.getHours();
    var timeOfDay;

    if(hours < 12){
      timeOfDay = "morning";
    }
    else if(hours >= 12 && hours < 17){
      timeOfDay = "after";
    }
    else{
      timeOfDay = "night";
    }

    return timeOfDay;
  };

  var loadImage = function (_conditions) {
    var imageSRC = "img/weather/hero-";
    var validConditions = ["clear", "cloudy", "rain", "snow"];
    var timeOfDay =  getTimeOfDay();
    var conditions = _conditions.toLowerCase();

    if(validConditions.indexOf(conditions) === -1){
      conditions = "cloudy";
    }

    var url = imageSRC + conditions + "-" + timeOfDay + ".jpg";

    $('#intro').css("background-image","url(" + url + ")");
  };

});
