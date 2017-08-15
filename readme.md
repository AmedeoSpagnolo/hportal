# install dependences

`bower install`

# html

```
<!-- assets -->
<div style="display:none">
 <img src="assets/img/logo_placeholder.png">
 <img src="assets/img/info_English.png">
</div>

<hotelbanner data-image="assets/img/logo_placeholder.png"
             data-bgcolor="#000f23"
             data-lang="assets/img/info_English.png"
             data-name="hotelbanner"
             data-width="720"></hotelbanner>
```

# js

```
var options = $("hotelbanner").data()
options.target = "hotelbanner"
var myhotelbanner = new HotelBanner(options).init()
```
