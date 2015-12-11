;(function( context ) {


  var viewport;

  function init() {
    window.onresize = resizing;
    injectElement();
  }

  function injectElement() {
    var e = document.createElement('div');
    e.style.position = "fixed";
    e.style.width = "200px";
    e.style.bottom = "20px";
    e.style.left = "50%";
    e.style.marginLeft = "-100px";
    e.style.color = "#000";
    e.style.fontSize = "1.2em";
    e.style.textAlign = "center";
    e.style.zIndex = "9999";
    viewport = document.body.appendChild( e );
  }

  function resizing() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(w, h);
    viewport.innerHTML = w + " X " + h;
  }

  document.addEventListener('DOMContentLoaded', init, false);

})( this );