# install dependences

`bower install`

# html

 `<hotelbanner data-logo="assets/img/logo_placeholder.png" data-colour="#000f23"></hotelbanner>
  <!-- vendors -->
  <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
  <script type="text/javascript" src="bower_components/fabric.js/dist/fabric.js"></script>
  <script type="text/javascript" src="bower_components/downloadjs/download.js"></script>

  <!-- scripts -->
  <script type="text/javascript" src="assets/lib/HotelBanner.js"></script>
  <script type="text/javascript" src="assets/js/main.js"></script>`

# js

  `var options = $("hotelbanner").dataset()
   var myhotelbanner = new HotelBanner(options)`
