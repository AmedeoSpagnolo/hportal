;$( document ).ready(function() {

  var options = $("hotelbanner").data()
  options.target = "hotelbanner"
  var myhotelbanner = new HotelBanner(options).init()

})
