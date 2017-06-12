;class HotelBanner {

  constructor(options = {}) {
    this.obj = $.extend({
      name: "preview",
      target: "body",
      width: 720, // image size 720 * 154
      bgcolor: "#000f23",
      data: "",
      todownload: true,
      el: {
        canvas: null,
        logo: null,
        lang: null,
        bg: null}
    }, options)

    this.obj.height = this.resize(154)
    this.obj.logo = {
      margin: this.resize(30),
      maxwidth: this.resize(300),
      center: { w: this.resize(305),
                h: this.resize(77)}
    }
  }

  resize (e){
    return e * this.obj.width / 720
  }

  createcanvas () {
    var env = this.obj
    var wrap = $(env.target).append('<div style=position:relative id=wrap_' + env.name + '></div>')
    if (env.todownload) $("#wrap_" + env.name).append('<button id="download_' + env.name + '" style="position:absolute;top:0;right:0;" onclick="">download</button>')
    $("#wrap_" + env.name).append('<canvas id="canvas_' + env.name + '" width="' + env.width + '" height="' + env.height + '"></canvas>')
  }

  color_bg () {
    var env = this.obj
    var rect = new fabric.Rect({
      left: 0,
      top: 0,
      width: env.width,
      height: env.height,
      fill: env.bgcolor
    });
    env.el.canvas.add(rect);
    return rect
  }

  add_logo (link) {
    var env = this.obj
    if (env.el.logo) env.el.logo.remove()
    function getsize (img) {
      var _h = env.height - (env.logo.margin * 2)
      var _w = img.width * _h / img.height
      if (_w > env.logo.maxwidth){
        _w = env.logo.maxwidth;
        _h = img.height * _w / img.width
      }
      return {w: _w, h: _h}
    }
    fabric.Image.fromURL(link, function(img) {
      var oImg = img.set({
        originX: "center",
        originY: "center",
        left: env.logo.center.w,
        top: env.logo.center.h,
        width: getsize(img).w,
        height: getsize(img).h})
      env.el.canvas.add(img)
      env.el.logo = img
    });
  }

  add_lang (link) {
    var env = this.obj
    fabric.Image.fromURL(link, function(img) {
      var oImg = img.set({
        left: 0,
        top: 0,
        width: env.width,
        height: env.height})
      env.el.canvas.add(img)
      env.el.logo = img
    });
  }

  dload () {
    download(this.obj.el.canvas.toDataURL('png'), this.obj.name + ".png", "img/png")
  }

  init () {
    var env = this.obj
    this.createcanvas()
    env.el.canvas  = new fabric.StaticCanvas('canvas_' + env.name);
    env.el.bg      = this.color_bg()
    env.el.lang    = this.add_lang(env.lang)
    env.el.logo    = this.add_logo(env.image)
    return this
  }
}
